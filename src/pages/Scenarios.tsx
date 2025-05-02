import { useState } from "react";
import Navbar from "@/components/Navbar";
import Scenario from "@/components/Scenario";
import { scenarios } from "@/data/scenarioData";
import { Award, Book, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useProgress } from "@/hooks/useProgress";
import { Link } from "react-router-dom";
const Scenarios = () => {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);
  const [scenarioCompleted, setScenarioCompleted] = useState(false);
  const [scenarioScores, setScenarioScores] = useState<Record<number, number>>({});
  const {
    updateScenariosScore,
    markSectionCompleted
  } = useProgress();
  const handleSelectScenario = (scenarioId: number) => {
    setSelectedScenario(scenarioId);
    setScenarioCompleted(false);
  };
  const handleScenarioComplete = (score: number) => {
    if (selectedScenario !== null) {
      const newScores = {
        ...scenarioScores,
        [selectedScenario]: score
      };
      setScenarioScores(newScores);
      setScenarioCompleted(true);

      // Calculate average score across all completed scenarios
      const completedScenarios = Object.values(newScores);
      const averageScore = Math.round(completedScenarios.reduce((sum, score) => sum + score, 0) / completedScenarios.length);
      updateScenariosScore(averageScore);

      // If all scenarios are completed
      if (completedScenarios.length === scenarios.length) {
        markSectionCompleted("scenarios");
      }
    }
  };
  const resetScenario = () => {
    setScenarioCompleted(false);
  };
  const backToScenarioList = () => {
    setSelectedScenario(null);
    setScenarioCompleted(false);
  };
  const isScenarioCompleted = (scenarioId: number) => {
    return scenarioId in scenarioScores;
  };
  const getCompletedCount = () => {
    return Object.keys(scenarioScores).length;
  };
  return <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {selectedScenario === null ? <>
              <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-phishguard-deep-blue sm:text-4xl">Scénarios Éducatifs</h1>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  Découvrez des situations réelles de cybersécurité à travers nos mini-scénarios interactifs
                </p>
                <div className="mt-6 inline-flex items-center px-4 py-2 rounded-full bg-phishguard-light-gray text-phishguard-purple">
                  <Book className="h-5 w-5 mr-2" />
                  <span>{getCompletedCount()}/{scenarios.length} scénarios terminés</span>
                </div>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2">
                {scenarios.map(scenario => <Card key={scenario.id} className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="aspect-video w-full overflow-hidden">
                      <img src={scenario.thumbnail} alt={scenario.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>{scenario.title}</CardTitle>
                        {isScenarioCompleted(scenario.id) && <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                            <Award className="h-3 w-3 mr-1" />
                            Terminé : {scenarioScores[scenario.id]}%
                          </Badge>}
                      </div>
                      <CardDescription>{scenario.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-3">{scenario.steps.length} étapes</span>
                        <span>{Math.round(scenario.steps.length * 3)} min.</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={() => handleSelectScenario(scenario.id)} className="w-full bg-phishguard-purple hover:bg-phishguard-dark-purple bg-blue-500 hover:bg-blue-400">
                        {isScenarioCompleted(scenario.id) ? "Refaire ce scénario" : "Commencer ce scénario"}
                      </Button>
                    </CardFooter>
                  </Card>)}
              </div>
              
              {getCompletedCount() === scenarios.length && <div className="mt-12 text-center">
                  <div className="inline-block p-6 rounded-lg bg-green-50 border border-green-200">
                    <Award className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h2 className="text-xl font-bold text-green-800">Félicitations !</h2>
                    <p className="text-green-700 mt-2">
                      Vous avez terminé tous les scénarios de formation.
                    </p>
                    <Link to="/results">
                      <Button className="mt-4 bg-green-600 hover:bg-green-700">
                        Voir mes résultats globaux
                      </Button>
                    </Link>
                  </div>
                </div>}
            </> : scenarioCompleted ? <div className="animate-fade-in max-w-3xl mx-auto">
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-phishguard-purple/10">
                  <Award className="h-12 w-12 text-phishguard-purple" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Scénario terminé !</h2>
                <p className="text-gray-600 mb-6">
                  {scenarioScores[selectedScenario] >= 80 ? "Excellent ! Vous avez bien compris les enjeux de sécurité de ce scénario." : scenarioScores[selectedScenario] >= 50 ? "Bien joué ! Vous avez assimilé les concepts principaux." : "Continuez à vous entraîner pour mieux comprendre les bonnes pratiques."}
                </p>
                
                <div className="mb-8">
                  <div className="relative h-40 w-40 mx-auto">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle className="text-gray-200 stroke-current" strokeWidth="10" cx="50" cy="50" r="40" fill="transparent" />
                      <circle className="text-phishguard-purple stroke-current" strokeWidth="10" strokeLinecap="round" cx="50" cy="50" r="40" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 - 251.2 * scenarioScores[selectedScenario] / 100} style={{
                    transformOrigin: 'center',
                    transform: 'rotate(-90deg)'
                  }} />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-phishguard-deep-blue">
                      {scenarioScores[selectedScenario]}%
                    </div>
                  </div>
                </div>
                
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2">Points clés à retenir :</h3>
                    <ul className="text-left space-y-2 text-gray-700 list-disc pl-5">
                      {scenarios.find(s => s.id === selectedScenario)?.tips.slice(0, 3).map((tip, index) => <li key={index}>{tip}</li>)}
                    </ul>
                  </CardContent>
                </Card>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                  <Button onClick={resetScenario} className="bg-phishguard-purple hover:bg-phishguard-dark-purple">
                    Refaire ce scénario
                  </Button>
                  <Button onClick={backToScenarioList} variant="outline">
                    Retour aux scénarios
                  </Button>
                </div>
                
                {getCompletedCount() === scenarios.length && <div className="mt-6">
                    <Link to="/results">
                      <Button className="w-full bg-phishguard-deep-blue hover:bg-opacity-90">
                        <Shield className="mr-2 h-4 w-4" />
                        Voir mes résultats globaux
                      </Button>
                    </Link>
                  </div>}
              </div>
            </div> : <div>
              <button onClick={backToScenarioList} className="mb-6 flex items-center text-phishguard-purple hover:text-phishguard-dark-purple transition-colors">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour aux scénarios
              </button>
              
              <Scenario scenario={scenarios.find(s => s.id === selectedScenario)!} onComplete={handleScenarioComplete} />
            </div>}
        </div>
      </main>
      <footer className="bg-phishguard-deep-blue">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-sm">
            © 2025 PhishGuard – Campus Anti-Phishing. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>;
};
export default Scenarios;