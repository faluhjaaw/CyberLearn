import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { useProgress } from "@/hooks/useProgress";
const Index = () => {
  const {
    score
  } = useProgress();
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-phishguard-purple font-semibold tracking-wide uppercase">Statistiques</h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                Votre progression
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Suivez votre évolution à travers nos modules d'apprentissage
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                <div className="card p-6 bg-gray-50">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-phishguard-purple text-white text-2xl font-bold">
                      {score.quizCompleted ? `${score.quiz}%` : "?"}
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Quiz</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {score.quizCompleted ? "Terminé" : "Non complété"}
                    </p>
                  </div>
                </div>

                <div className="card p-6 bg-gray-50">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-phishguard-purple text-white text-2xl font-bold">
                      {score.phishingCompleted ? `${score.phishing}%` : "?"}
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Phishing</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {score.phishingCompleted ? "Terminé" : "Non complété"}
                    </p>
                  </div>
                </div>

                <div className="card p-6 bg-gray-50">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-phishguard-purple text-white text-2xl font-bold">
                      {score.scenariosCompleted ? `${score.scenarios}%` : "?"}
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Scénarios</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {score.scenariosCompleted ? "Terminé" : "Non complété"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-phishguard-deep-blue">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-zinc-700">
          <p className="text-center text-white text-sm">
            © 2025 PhishGuard – Campus Anti-Phishing. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;