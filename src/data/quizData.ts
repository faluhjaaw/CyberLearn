
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qu'est-ce que le phishing ?",
    options: [
      "Une technique de pêche en haute mer",
      "Une technique d'hameçonnage pour voler des informations personnelles",
      "Un virus informatique",
      "Une méthode pour récupérer des données supprimées"
    ],
    correctAnswer: 1,
    explanation: "Le phishing est une technique frauduleuse destinée à leurrer l'internaute pour l'inciter à communiquer des données personnelles en se faisant passer pour un tiers de confiance."
  },
  {
    id: 2,
    question: "Comment reconnaître un email de phishing ?",
    options: [
      "Il provient toujours d'une adresse gmail",
      "Il contient des offres très avantageuses",
      "Il comporte souvent des fautes d'orthographe et une mise en page douteuse",
      "Il est toujours écrit en anglais"
    ],
    correctAnswer: 2,
    explanation: "Les emails de phishing contiennent souvent des fautes d'orthographe, une mise en page douteuse, des demandes urgentes d'action et des liens suspects."
  },
  {
    id: 3,
    question: "Quelle action est recommandée si vous recevez un email suspect ?",
    options: [
      "Cliquer sur les liens pour vérifier s'ils sont légitimes",
      "Répondre à l'expéditeur pour lui demander plus d'informations",
      "Transférer l'email à tous vos contacts pour les prévenir",
      "Ne pas cliquer sur les liens et supprimer l'email"
    ],
    correctAnswer: 3,
    explanation: "Il est recommandé de ne jamais cliquer sur les liens contenus dans des emails suspects et de supprimer ces emails. Si l'email semble provenir d'une source légitime, contactez directement l'organisation par un canal officiel."
  },
  {
    id: 4,
    question: "Quelle information personnelle est la plus dangereuse à partager en ligne ?",
    options: [
      "Votre film préféré",
      "Votre mot de passe",
      "Votre plat favori",
      "Votre sport préféré"
    ],
    correctAnswer: 1,
    explanation: "Les mots de passe sont des informations très sensibles qui ne devraient jamais être partagés. Même les services légitimes ne vous demanderont jamais votre mot de passe par email."
  },
  {
    id: 5,
    question: "Qu'est-ce qu'une authentification à deux facteurs (2FA) ?",
    options: [
      "Une méthode qui nécessite deux mots de passe différents",
      "Une méthode qui utilise deux appareils pour se connecter",
      "Une méthode qui combine quelque chose que vous savez et quelque chose que vous possédez",
      "Une méthode qui nécessite la validation de deux personnes différentes"
    ],
    correctAnswer: 2,
    explanation: "L'authentification à deux facteurs combine quelque chose que vous connaissez (comme un mot de passe) avec quelque chose que vous possédez (comme votre téléphone) pour vérifier votre identité."
  },
  {
    id: 6,
    question: "Quelle est la meilleure pratique pour créer un mot de passe sécurisé ?",
    options: [
      "Utiliser votre date de naissance et votre nom",
      "Utiliser le même mot de passe pour tous vos comptes",
      "Utiliser une phrase complexe avec des caractères spéciaux",
      "Changer votre mot de passe tous les ans"
    ],
    correctAnswer: 2,
    explanation: "Un mot de passe fort est long, combine lettres majuscules, minuscules, chiffres et caractères spéciaux. L'utilisation d'une phrase mémorisable mais complexe est une bonne approche."
  },
  {
    id: 7,
    question: "Qu'est-ce qu'un logiciel malveillant (malware) ?",
    options: [
      "Un logiciel qui corrige les bugs de votre ordinateur",
      "Un logiciel conçu pour endommager ou prendre le contrôle d'un système",
      "Un logiciel de protection des données",
      "Un logiciel qui améliore les performances de votre ordinateur"
    ],
    correctAnswer: 1,
    explanation: "Un malware est un logiciel malveillant conçu pour s'infiltrer dans un système informatique sans le consentement de l'utilisateur, dans le but de voler des données, d'espionner, ou d'endommager le système."
  },
  {
    id: 8,
    question: "Pourquoi est-il important de mettre régulièrement à jour ses logiciels ?",
    options: [
      "Pour avoir toujours les dernières fonctionnalités",
      "Pour corriger les failles de sécurité connues",
      "Pour économiser de l'espace disque",
      "Pour rendre l'ordinateur plus rapide"
    ],
    correctAnswer: 1,
    explanation: "Les mises à jour logicielles incluent souvent des correctifs de sécurité qui réparent des vulnérabilités découvertes. Ne pas mettre à jour ses logiciels expose à des risques d'attaques exploitant ces failles."
  },
  {
    id: 9,
    question: "Qu'est-ce qu'une attaque par déni de service (DDoS) ?",
    options: [
      "Une attaque qui vole les données personnelles",
      "Une attaque qui modifie le contenu d'un site web",
      "Une attaque qui surcharge un service en ligne pour le rendre inaccessible",
      "Une attaque qui déchiffre les mots de passe"
    ],
    correctAnswer: 2,
    explanation: "Une attaque DDoS tente de rendre un service en ligne indisponible en le submergeant de trafic provenant de multiples sources, empêchant ainsi les utilisateurs légitimes d'y accéder."
  },
  {
    id: 10,
    question: "Quelle est la meilleure façon de protéger vos comptes en ligne ?",
    options: [
      "Utiliser le même mot de passe partout pour ne pas l'oublier",
      "Utiliser des mots de passe différents et l'authentification à deux facteurs",
      "Noter tous vos mots de passe dans un carnet",
      "Partager vos mots de passe avec un ami de confiance en cas d'oubli"
    ],
    correctAnswer: 1,
    explanation: "Utiliser des mots de passe uniques pour chaque compte et activer l'authentification à deux facteurs quand c'est possible offre la meilleure protection contre les accès non autorisés à vos comptes."
  }
];
