
export interface ScenarioStep {
  id: number;
  title: string;
  content: string;
  image?: string;
  options?: {
    text: string;
    correct: boolean;
    feedback: string;
  }[];
}

export interface Scenario {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  steps: ScenarioStep[];
  tips: string[];
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Un café, un WiFi et... un pirate ?",
    description: "Apprenez les dangers des réseaux WiFi publics et comment vous protéger.",
    thumbnail: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
    steps: [
      {
        id: 1,
        title: "Le café branché",
        content: "Sarah travaille sur son mémoire dans un café. Elle se connecte au WiFi gratuit 'CaféConnect' sans vérification et commence à consulter ses emails et son compte bancaire.",
        image: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhZmV8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: 2,
        title: "Une connexion suspecte",
        content: "À quelques tables de Sarah, un homme surveille le trafic réseau grâce à un point d'accès WiFi malveillant qu'il a nommé 'CaféConnect' pour piéger les clients du café.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhY2tlcnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        id: 3,
        title: "L'attaque en cours",
        content: "L'attaquant utilise une technique d'attaque 'Man-in-the-Middle' pour intercepter les données échangées. Il peut voir les sites que Sarah visite et même capturer ses identifiants de connexion.",
        image: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFja2VyfGVufDB8fDB8fHww"
      },
      {
        id: 4,
        title: "Que devrait faire Sarah ?",
        content: "Sarah reçoit une notification de connexion inhabituelle sur son compte bancaire. Que devrait-elle faire ?",
        options: [
          {
            text: "Ignorer la notification et continuer à utiliser le WiFi public",
            correct: false,
            feedback: "Mauvais choix ! Ignorer les alertes de sécurité peut permettre à l'attaquant de continuer à accéder à vos comptes."
          },
          {
            text: "Se déconnecter immédiatement du WiFi, changer ses mots de passe depuis une connexion sécurisée",
            correct: true,
            feedback: "Excellent ! Se déconnecter du réseau suspect et changer rapidement ses mots de passe depuis une connexion sécurisée est la meilleure action à prendre."
          },
          {
            text: "Contacter le gérant du café pour lui signaler le problème",
            correct: false,
            feedback: "Ce n'est pas suffisant. Le gérant n'est probablement pas responsable et pendant ce temps, vos données restent vulnérables."
          }
        ]
      },
      {
        id: 5,
        title: "La solution sécurisée",
        content: "Pour se protéger sur les réseaux WiFi publics, Sarah devrait utiliser un VPN (Virtual Private Network) qui chiffre toutes ses communications, même sur un réseau non sécurisé. Elle devrait également éviter d'accéder à des informations sensibles sur des réseaux publics.",
        image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VlBOfGVufDB8fDB8fHww"
      }
    ],
    tips: [
      "Utilisez toujours un VPN sur les réseaux WiFi publics",
      "Vérifiez l'authenticité du réseau WiFi auprès du personnel",
      "Activez la navigation HTTPS uniquement dans votre navigateur",
      "Évitez d'accéder à des comptes sensibles sur des réseaux publics",
      "Désactivez le partage de fichiers et la détection automatique des réseaux"
    ]
  },
  {
    id: 2,
    title: "Le cadeau empoisonné",
    description: "Découvrez les dangers des clés USB trouvées et comment éviter les malwares.",
    thumbnail: "https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VVNCJTIwZHJpdmV8ZW58MHx8MHx8fDA%3D",
    steps: [
      {
        id: 1,
        title: "Une trouvaille intrigante",
        content: "Marc trouve une clé USB dans le parking de son entreprise. Elle porte le logo de l'entreprise et une étiquette marquée 'CONFIDENTIEL - RH'.",
        image: "https://images.unsplash.com/photo-1563452439­726-677e106a2925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFVTQiUyMGRyaXZlfGVufDB8fDB8fHww"
      },
      {
        id: 2,
        title: "La curiosité",
        content: "Intrigué et pensant aider, Marc insère la clé USB dans son ordinateur professionnel pour voir son contenu et potentiellement identifier son propriétaire.",
        image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFVTQiUyMGNvbXB1dGVyfGVufDB8fDB8fHww"
      },
      {
        id: 3,
        title: "Le piège",
        content: "En réalité, la clé USB a été délibérément abandonnée par un attaquant. Dès qu'elle est connectée, un logiciel malveillant s'installe silencieusement sur l'ordinateur de Marc.",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpcnVzJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: 4,
        title: "Que devrait faire Marc ?",
        content: "Marc remarque que son ordinateur ralentit et que des fenêtres étranges apparaissent. Que devrait-il faire ?",
        options: [
          {
            text: "Éteindre son ordinateur et informer immédiatement le service informatique de l'incident",
            correct: true,
            feedback: "Excellent ! Débrancher la clé, éteindre l'ordinateur et signaler immédiatement l'incident au service informatique est la meilleure réaction."
          },
          {
            text: "Installer un antivirus et lancer une analyse",
            correct: false,
            feedback: "Ce n'est pas suffisant. L'infection est peut-être déjà établie et pourrait avoir compromis le réseau de l'entreprise."
          },
          {
            text: "Supprimer tous les fichiers de la clé USB et continuer à travailler",
            correct: false,
            feedback: "Mauvais choix ! Le malware s'est probablement déjà installé et supprimer les fichiers de la clé ne résout pas le problème."
          }
        ]
      },
      {
        id: 5,
        title: "La prévention",
        content: "Pour se protéger contre ce type d'attaque (appelée 'baiting' ou 'USB drop attack'), l'entreprise organise une formation de sensibilisation à la sécurité. Elle met en place une politique stricte concernant l'utilisation de périphériques externes non autorisés.",
        image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VjdXJpdHklMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
      }
    ],
    tips: [
      "Ne jamais connecter de clés USB ou périphériques inconnus à votre ordinateur",
      "Toujours signaler les périphériques suspects au service informatique",
      "Utiliser des logiciels de sandbox pour analyser les périphériques suspects",
      "Désactiver l'exécution automatique des périphériques USB",
      "Maintenir à jour vos logiciels antivirus et votre système d'exploitation"
    ]
  }
];
