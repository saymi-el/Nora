// api/send-contact.ts — Vercel Serverless Function pour projet Vite
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  nom: z.string().trim().min(1, "Le nom est requis"),
  email: z.string().trim().email("Email invalide"),
  tel: z.string().trim().max(50).optional(),
  sujet: z.enum(["rappel", "demo", "devis"], { errorMap: () => ({ message: "Sujet invalide" }) }),
  message: z.string().trim().max(5000).optional(),
  hp: z.string().optional(), // honeypot
});

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const requestId = crypto.randomUUID();
  res.setHeader("x-request-id", requestId);

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, code: "method_not_allowed", message: "Méthode interdite", requestId });
  }

  // IP & UA
  const ip = ((req.headers["x-forwarded-for"] as string) || "").split(",")[0]?.trim()
    || (req.socket as any)?.remoteAddress || "0.0.0.0";
  const ua = (req.headers["user-agent"] as string) || "";

  // Body (Vercel fournit déjà req.body en JSON si header Content-Type ok)
  const body = req.body ?? {};
  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return res.status(422).json({
      ok: false,
      code: "validation_error",
      message: "Certains champs sont invalides.",
      issues: parsed.error.issues.map(i => ({ path: i.path, message: i.message })),
      requestId,
    });
  }
  const data = parsed.data;

  // Honeypot: si rempli → 204 no content (on ne “révèle” rien au bot)
  if (data.hp && data.hp.trim()) return res.status(204).end();

  const FROM = process.env.CONTACT_FROM;
  const TO = process.env.CONTACT_TO;
  if (!process.env.RESEND_API_KEY || !FROM || !TO) {
    console.error("[send-contact] Missing envs", {
      hasApiKey: !!process.env.RESEND_API_KEY, hasFrom: !!FROM, hasTo: !!TO, requestId
    });
    return res.status(500).json({ ok: false, code: "server_misconfig", message: "Config serveur incomplète.", requestId });
  }

  const subject = `[Site] ${data.sujet} — ${data.nom}`;
  const text = [
    `Nom: ${data.nom}`,
    `Email: ${data.email}`,
    `Téléphone: ${data.tel ?? ""}`,
    `Sujet: ${data.sujet}`,
    "",
    (data.message ?? ""),
    "",
    `IP: ${ip} • UA: ${ua}`,
  ].join("\n");

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.4">
      <h2 style="margin:0 0 12px">Nouveau message de contact</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td><strong>Nom</strong></td><td>${escapeHtml(data.nom)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(data.email)}</td></tr>
        <tr><td><strong>Téléphone</strong></td><td>${escapeHtml(data.tel ?? "")}</td></tr>
        <tr><td><strong>Sujet</strong></td><td>${escapeHtml(data.sujet)}</td></tr>
      </table>
      ${data.message ? `<p style="margin-top:12px;white-space:pre-wrap">${escapeHtml(data.message)}</p>` : ""}
      <hr style="margin:16px 0;border:none;border-top:1px solid #eee"/>
      <small>IP: ${ip} • UA: ${escapeHtml(ua)}</small>
    </div>
  `;

  try {
    const r = await resend.emails.send({
      from: FROM,
      to: [TO],
      subject,
      text,
      html,
      reply_to: data.email,
    });

    if (r.error) {
      console.error("[send-contact] Resend error", { requestId, err: r.error.message });
      return res.status(502).json({ ok: false, code: "email_send_failed", message: "Échec d'envoi de l'email.", requestId });
    }

    return res.status(200).json({ ok: true, id: r.data?.id, requestId });
  } catch (e: any) {
    console.error("[send-contact] Unhandled", { requestId, err: e?.message });
    return res.status(500).json({ ok: false, code: "server_error", message: "Erreur serveur.", requestId });
  }
}

function escapeHtml(s: string) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
