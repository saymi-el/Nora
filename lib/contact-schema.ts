// /lib/contact-schema.ts
import { z } from "zod";

export const ContactSchema = z.object({
  nom: z.string().trim().min(1, "Le nom est requis"),
  email: z.string().trim().email("Email invalide"),
  tel: z.string().trim().max(50).optional(),
  sujet: z.enum(["rappel", "demo", "devis"], {
    errorMap: () => ({ message: "Sujet invalide" }),
  }),
  message: z.string().trim().max(5000).optional(),
  // honeypot optionnel (champ caché côté front)
  hp: z.string().optional(),
});

export type ContactInput = z.infer<typeof ContactSchema>;
