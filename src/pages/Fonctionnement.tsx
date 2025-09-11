export default function Fonctionnement() {
  return (
    <main>
      <section className="page-gradient">
        <div className="container">
          <h1 className="section-title">Fonctionnement & bénéfices</h1>
          <p className="section-sub">
            NORA capte les demandes, répond instantanément et redirige vers la prise de rendez-vous
            ou un rappel—sans effort côté équipe.
          </p>

          <div className="grid">
            <article className="card-soft">
              <h3>Parcours type</h3>
              <ol className="steps">
                <li>
                  <strong>Accueil instantané</strong>
                  <span>Un visiteur pose une question (horaires, tarifs, services).</span>
                </li>
                <li>
                  <strong>Qualification</strong>
                  <span>Le chatbot identifie le besoin et propose la bonne action.</span>
                </li>
                <li>
                  <strong>Conversion</strong>
                  <span>Redirection vers prise de RDV, devis ou demande de rappel.</span>
                </li>
              </ol>
            </article>

            <article className="card-soft">
              <h3>Pourquoi ça marche</h3>
              <ul className="steps">
                <li><strong>Disponibilité 24/7</strong><span>réponse quand vos clients sont libres.</span></li>
                <li><strong>Moins d’appels</strong><span>fini les répétitions sur horaires/prix.</span></li>
                <li><strong>Plus de RDV</strong><span>passerelle directe vers l’action.</span></li>
              </ul>
            </article>

            <article className="card-soft">
              <h3>Impact rapide</h3>
              <ul className="steps">
                <li><strong>+ Conversion</strong><span>moins de frictions dans le parcours.</span></li>
                <li><strong>+ Satisfaction</strong><span>réponse claire et immédiate.</span></li>
                <li><strong>− Charge</strong><span>équipe concentrée sur la valeur.</span></li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
