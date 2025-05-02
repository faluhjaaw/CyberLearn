
import { useState } from "react";
import Navbar from "@/components/Navbar";
import EmailSimulator from "@/components/EmailSimulator";
import { emails } from "@/data/emailData";
import { Shield, Award, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/hooks/useProgress";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const PhishingDetection = () => {
  const [simulationCompleted, setSimulationCompleted] = useState(false);
  const [phishingScore, setPhishingScore] = useState(0);
  const { markSectionCompleted } = useProgress();

  const handleSimulationComplete = (score: number) => {
    setPhishingScore(score);
    setSimulationCompleted(true);
    markSectionCompleted("phishing");
  };

  const restartSimulation = () => {
    setSimulationCompleted(false);
    setPhishingScore(0);
  };

  const getScoreMessage = () => {
    if (phishingScore >= 90) return "Excellent ! Vous êtes un véritable expert en détection de phishing !";
    if (phishingScore >= 70) return "Bien joué ! Vous avez de bonnes compétences en détection de phishing.";
    if (phishingScore >= 50) return "Pas mal ! Mais restez vigilant face aux emails suspects.";
    return "Vous devriez améliorer vos compétences en détection de phishing.";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-phishguard-deep-blue sm:text-4xl">Détection de Phishing</h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Entraînez-vous à identifier les tentatives de phishing dans cette simulation de boîte mail
            </p>
          </div>
          
          {simulationCompleted ? (
            <div className="animate-fade-in max-w-3xl mx-auto">
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-phishguard-purple/10">
                  <Award className="h-12 w-12 text-phishguard-purple" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Simulation terminée !</h2>
                <p className="text-gray-600 mb-6">{getScoreMessage()}</p>
                
                <div className="mb-8">
                  <div className="relative h-40 w-40 mx-auto">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        className="text-gray-200 stroke-current" 
                        strokeWidth="10" 
                        cx="50" 
                        cy="50" 
                        r="40" 
                        fill="transparent" 
                      />
                      <circle 
                        className="text-phishguard-purple stroke-current" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        cx="50" 
                        cy="50" 
                        r="40" 
                        fill="transparent" 
                        strokeDasharray="251.2" 
                        strokeDashoffset={251.2 - (251.2 * phishingScore) / 100}
                        style={{ 
                          transformOrigin: 'center',
                          transform: 'rotate(-90deg)'
                        }}
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-phishguard-deep-blue">
                      {phishingScore}%
                    </div>
                  </div>
                </div>
                
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">Conseils de détection du phishing :</h3>
                    <ul className="text-left space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-2 flex-shrink-0">1</div>
                        <span>Vérifiez toujours l'adresse email complète de l'expéditeur, pas uniquement le nom affiché</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-2 flex-shrink-0">2</div>
                        <span>Méfiez-vous des messages créant un sentiment d'urgence ou de peur</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-2 flex-shrink-0">3</div>
                        <span>Survolez les liens (sans cliquer) pour voir la véritable URL de destination</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 flex-shrink-0">4</div>
                        <span>Si vous avez un doute, contactez directement l'organisation par ses canaux officiels</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                  <Button 
                    onClick={restartSimulation} 
                    className="flex items-center space-x-2 bg-phishguard-purple hover:bg-phishguard-dark-purple"
                  >
                    <RefreshCcw className="h-4 w-4" />
                    <span>Refaire la simulation</span>
                  </Button>
                  <Link to="/scenarios">
                    <Button 
                      className="flex items-center space-x-2 bg-phishguard-deep-blue hover:bg-opacity-90"
                    >
                      <Shield className="h-4 w-4" />
                      <span>Découvrir les scénarios</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <EmailSimulator emails={emails} onComplete={handleSimulationComplete} />
          )}
        </div>
      </main>
      <footer className="bg-phishguard-deep-blue">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-sm">
            © 2025 PhishGuard – Campus Anti-Phishing. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PhishingDetection;
