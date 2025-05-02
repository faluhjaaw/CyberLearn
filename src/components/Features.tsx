
import { Book, Lock, Bolt, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function Features() {
  const features = [
    {
      name: 'Quiz Interactif',
      description: 'Testez vos connaissances avec notre quiz dynamique pour évaluer votre niveau de sensibilisation à la cybersécurité.',
      icon: Book,
      link: '/quiz',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      name: 'Détection de Phishing',
      description: 'Entraînez-vous à identifier les tentatives de phishing dans notre simulation de boîte mail interactive.',
      icon: Lock,
      link: '/phishing',
      color: 'bg-phishguard-soft-green text-green-700'
    },
    {
      name: 'Scénarios Éducatifs',
      description: 'Découvrez des situations réelles à travers nos mini-scénarios animés et apprenez les bonnes pratiques.',
      icon: Bolt,
      link: '/scenarios',
      color: 'bg-amber-100 text-amber-700'
    },
    {
      name: 'Résultats & Conseils',
      description: 'Obtenez des recommandations personnalisées basées sur vos performances et partagez vos résultats.',
      icon: Award,
      link: '/results',
      color: 'bg-purple-100 text-purple-700'
    },
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Un parcours d'apprentissage complet
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Notre plateforme propose différentes activités interactives pour vous former efficacement à la cybersécurité.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <Link to={feature.link} key={feature.name} className="group">
                <div className="relative pl-16 transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg ${feature.color}`}>
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="flex items-center">
                      {feature.name}
                      <svg className="ml-2 h-5 w-5 text-phishguard-purple opacity-0 transition-opacity group-hover:opacity-100" 
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
