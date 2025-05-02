
export interface EmailData {
  id: number;
  sender: string;
  senderEmail: string;
  subject: string;
  date: string;
  body: string;
  isPhishing: boolean;
  explanation: string;
  clues: string[];
}

export const emails: EmailData[] = [
  {
    id: 1,
    sender: "Amazon Prime",
    senderEmail: "customer-services@amazon-prime-loyalty.com",
    subject: "Votre compte Amazon a été suspendu - action requise",
    date: "Aujourd'hui, 09:15",
    body: `
      <div style="font-family: Arial, sans-serif;">
        <div style="text-align: center;">
          <img src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hem9ufGVufDB8fDB8fHww" style="width: 150px;" alt="Amazon Logo" />
        </div>
        <p>Cher(e) Client(e),</p>
        <p>Nous avons constaté une activité suspecte sur votre compte Amazon. Pour des raisons de sécurité, nous avons temporairement suspendu votre compte.</p>
        <p>Pour restaurer l'accès à votre compte, <b>cliquez sur le lien ci-dessous</b> et confirmez vos informations:</p>
        <div style="text-align: center; margin: 20px 0;">
          <a href="#" style="background-color: #FF9900; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">RÉACTIVER MON COMPTE</a>
        </div>
        <p>Si vous ne confirmez pas vos informations dans les 24 heures, votre compte sera définitivement supprimé.</p>
        <p>Merci de votre coopération,</p>
        <p>L'équipe Amazon Prime</p>
      </div>
    `,
    isPhishing: true,
    explanation: "Cet email présente plusieurs signes de phishing : un domaine d'expéditeur suspect (amazon-prime-loyalty.com au lieu d'amazon.com), une urgence injustifiée, et une demande de cliquer sur un lien pour 'confirmer vos informations'.",
    clues: [
      "Le domaine de l'expéditeur n'est pas officiel (amazon-prime-loyalty.com)",
      "L'email crée un sentiment d'urgence injustifié",
      "Il demande de cliquer sur un lien pour 'confirmer vos informations'",
      "Amazon ne menace jamais de supprimer votre compte pour ce genre de raison",
      "Le ton de l'email est impersonnel"
    ]
  },
  {
    id: 2,
    sender: "Netflix",
    senderEmail: "info@netflix.com",
    subject: "Votre facture Netflix - Mai 2025",
    date: "Hier, 15:42",
    body: `
      <div style="font-family: Arial, sans-serif;">
        <div style="text-align: center;">
          <img src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D" style="width: 150px;" alt="Netflix Logo" />
        </div>
        <p>Bonjour,</p>
        <p>Merci d'utiliser Netflix. Votre abonnement mensuel a été renouvelé le 15/05/2025.</p>
        <p>Montant prélevé : 15,99€</p>
        <p>Mode de paiement : Visa se terminant par ****4578</p>
        <p>Date du prochain prélèvement : 15/06/2025</p>
        <p>Pour consulter les détails de votre facture ou modifier votre abonnement, connectez-vous à votre compte Netflix.</p>
        <p>Cordialement,</p>
        <p>L'équipe Netflix</p>
      </div>
    `,
    isPhishing: false,
    explanation: "Cet email est légitime. Il vient du domaine officiel de Netflix, ne contient pas de liens suspects, et fournit des informations factuelles sur un abonnement sans créer un sentiment d'urgence ni demander d'action immédiate.",
    clues: [
      "L'adresse email de l'expéditeur est officielle (info@netflix.com)",
      "Le message est informatif et ne demande pas d'action urgente",
      "Il n'y a pas de liens suspects",
      "Les informations sont précises et personnalisées (numéro de carte masqué)",
      "Le ton est professionnel et sans fautes d'orthographe"
    ]
  },
  {
    id: 3,
    sender: "Service Fiscal",
    senderEmail: "remboursement-impots@finances-services.org",
    subject: "URGENT: Remboursement d'impôt en attente",
    date: "17/05/2025, 11:23",
    body: `
      <div style="font-family: Arial, sans-serif;">
        <div style="text-align: center;">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF4fGVufDB8fDB8fHww" style="width: 150px;" alt="Logo Impôts" />
        </div>
        <p>AVIS IMPORTANT - Remboursement d'impôt</p>
        <p>Suite à un récent calcul de votre dossier fiscal, nous avons déterminé que vous êtes éligible à un remboursement de 843,27€.</p>
        <p>Pour recevoir votre remboursement, vous devez confirmer vos coordonnées bancaires en remplissant le formulaire sécurisé accessible via le lien ci-dessous :</p>
        <div style="text-align: center; margin: 20px 0;">
          <a href="#" style="background-color: #345F93; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">DEMANDER MON REMBOURSEMENT</a>
        </div>
        <p>Attention: Si vous ne confirmez pas vos coordonnées dans un délai de 3 jours, votre remboursement sera annulé.</p>
        <p>Cordialement,</p>
        <p>Service des impôts des particuliers</p>
      </div>
    `,
    isPhishing: true,
    explanation: "Cet email est un exemple classique de phishing fiscal. Le domaine de l'expéditeur n'est pas un domaine officiel du gouvernement français, l'email crée un sentiment d'urgence, propose un montant précis pour sembler crédible, et demande des informations bancaires via un lien.",
    clues: [
      "Domaine d'expéditeur non officiel (finances-services.org au lieu de impots.gouv.fr)",
      "Le titre contient 'URGENT' pour créer une pression",
      "Montant très précis (843,27€) pour sembler crédible",
      "Demande de confirmation de coordonnées bancaires (les services fiscaux ont déjà ces informations)",
      "Menace d'annulation du remboursement si l'action n'est pas effectuée rapidement"
    ]
  },
  {
    id: 4,
    sender: "Microsoft 365",
    senderEmail: "noreply@microsoft.com",
    subject: "Votre abonnement Microsoft 365 expire bientôt",
    date: "15/05/2025, 08:06",
    body: `
      <div style="font-family: Arial, sans-serif;">
        <div style="text-align: center;">
          <img src="https://images.unsplash.com/photo-1640272693741-7c0cf5ad6475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1pY3Jvc29mdHxlbnwwfHwwfHx8MA%3D%3D" style="width: 150px;" alt="Microsoft Logo" />
        </div>
        <p>Bonjour,</p>
        <p>Nous vous informons que votre abonnement Microsoft 365 Famille expirera le 28/05/2025.</p>
        <p>Pour continuer à bénéficier de toutes les fonctionnalités de Microsoft 365, y compris Word, Excel, PowerPoint et 1 To de stockage OneDrive, nous vous invitons à renouveler votre abonnement.</p>
        <p>Vous pouvez gérer votre abonnement et vos options de renouvellement en vous connectant à votre compte Microsoft.</p>
        <p>Nous vous remercions pour votre fidélité.</p>
        <p>L'équipe Microsoft 365</p>
      </div>
    `,
    isPhishing: false,
    explanation: "Cet email est légitime. Il provient d'un domaine officiel de Microsoft, fournit des informations précises sur l'abonnement sans créer d'urgence excessive, et ne contient pas de liens suspects ni ne demande d'informations sensibles.",
    clues: [
      "Adresse email officielle de Microsoft",
      "Informations précises sur le produit",
      "Pas de sentiment d'urgence extrême",
      "Pas de demande d'informations personnelles ou sensibles",
      "Pas de liens suspects"
    ]
  },
  {
    id: 5,
    sender: "Support PayPal",
    senderEmail: "securite@palpal-support.com",
    subject: "Connexion inhabituelle détectée - Action immédiate requise",
    date: "12/05/2025, 22:47",
    body: `
      <div style="font-family: Arial, sans-serif;">
        <div style="text-align: center;">
          <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF5cGFsfGVufDB8fDB8fHww" style="width: 150px;" alt="PayPal Logo" />
        </div>
        <p>Cher(e) client(e),</p>
        <p><b>ALERTE DE SÉCURITÉ : Nous avons détecté une tentative de connexion inhabituelle à votre compte depuis Moscou, Russie.</b></p>
        <p>Si ce n'était pas vous, votre compte pourrait être compromis.</p>
        <p>Veuillez vérifier immédiatement vos informations de sécurité en cliquant sur le bouton ci-dessous :</p>
        <div style="text-align: center; margin: 20px 0;">
          <a href="#" style="background-color: #0070BA; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">SÉCURISER MON COMPTE</a>
        </div>
        <p>Si vous ne confirmez pas votre identité dans les 24 heures, votre compte sera temporairement bloqué pour des raisons de sécurité.</p>
        <p>Service Sécurité PayPal</p>
      </div>
    `,
    isPhishing: true,
    explanation: "Cet email est frauduleux. L'adresse d'expéditeur contient une faute ('palpal' au lieu de 'paypal') et n'utilise pas le domaine officiel de PayPal. Il utilise des tactiques de peur (connexion depuis la Russie) et d'urgence pour inciter à cliquer sur un lien suspect.",
    clues: [
      "Faute d'orthographe dans le nom de domaine (palpal au lieu de paypal)",
      "Crée un sentiment de peur (connexion depuis la Russie)",
      "Urgence explicite avec menace de blocage du compte",
      "Demande de cliquer sur un lien pour 'vérifier les informations'",
      "Ton alarmiste avec texte en gras pour générer de l'anxiété"
    ]
  },
  {
    id: 6,
    sender: "La Banque Postale",
    senderEmail: "service-client@labanquepostale.fr",
    subject: "Confirmation de virement bancaire",
    date: "10/05/2025, 14:33",
    body: `
      <div style="font-family: Arial, sans-serif;">
        <div style="text-align: center;">
          <img src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua3xlbnwwfHwwfHx8MA%3D%3D" style="width: 150px;" alt="La Banque Postale Logo" />
        </div>
        <p>Bonjour,</p>
        <p>Nous vous confirmons l'exécution du virement suivant :</p>
        <ul style="list-style-type: none; padding-left: 0;">
          <li><strong>Date :</strong> 10/05/2025</li>
          <li><strong>Montant :</strong> 350,00 EUR</li>
          <li><strong>Bénéficiaire :</strong> Électricité de France</li>
          <li><strong>Référence :</strong> FACT-EDF-052025</li>
        </ul>
        <p>Pour consulter le détail de cette opération, connectez-vous à votre espace client.</p>
        <p>Nous vous remercions de votre confiance.</p>
        <p>Service Clientèle<br>La Banque Postale</p>
      </div>
    `,
    isPhishing: false,
    explanation: "Cet email semble légitime. Il est envoyé depuis le domaine officiel de La Banque Postale, contient des informations précises concernant un virement sans urgence excessive, et ne demande pas d'action spécifique ni ne contient de lien suspect.",
    clues: [
      "L'adresse email de l'expéditeur utilise le domaine officiel",
      "Le message est informatif et ne demande pas d'action urgente",
      "Les informations sont précises et correspondant à un service réel",
      "Pas de liens suspects ou de demande d'informations personnelles",
      "Le ton est professionnel"
    ]
  }
];
