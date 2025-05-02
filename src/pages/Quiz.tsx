
import { useState } from "react";
import Navbar from "@/components/Navbar";
import QuizComponent from "@/components/QuizComponent";
import { quizQuestions } from "@/data/quizData";
import { Shield, Award, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/hooks/useProgress";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const { markSectionCompleted } = useProgress();

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    setQuizCompleted(true);
    markSectionCompleted("quiz");
  };

  const restartQuiz = () => {
    setQuizCompleted(false);
    setQuizScore(0);
  };

  const getScoreMessage = () => {
    if (quizScore >= 90) return "Excellent ! Vous êtes un expert en cybersécurité !";
    if (quizScore >= 70) return "Bien joué ! Vous avez de bonnes connaissances en sécurité.";
    if (quizScore >= 50) return "Pas mal ! Mais il y a encore place à l'amélioration.";
    return "Vous devriez réviser les bases de la cybersécurité.";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-phishguard-deep-blue sm:text-4xl">Quiz Cybersécurité</h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Testez vos connaissances en cybersécurité et apprenez à vous protéger en ligne
            </p>
          </div>
          
          {quizCompleted ? (
            <div className="animate-fade-in max-w-3xl mx-auto">
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-phishguard-purple/10">
                  <Award className="h-12 w-12 text-phishguard-purple" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Quiz terminé !</h2>
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
                        strokeDashoffset={251.2 - (251.2 * quizScore) / 100}
                        style={{ 
                          transformOrigin: 'center',
                          transform: 'rotate(-90deg)'
                        }}
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-phishguard-deep-blue">
                      {quizScore}%
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                  <Button 
                    onClick={restartQuiz} 
                    className="flex items-center space-x-2 bg-phishguard-purple hover:bg-phishguard-dark-purple"
                  >
                    <RefreshCcw className="h-4 w-4" />
                    <span>Refaire le quiz</span>
                  </Button>
                  <Link to="/phishing">
                    <Button 
                      className="flex items-center space-x-2 bg-phishguard-deep-blue hover:bg-opacity-90"
                    >
                      <Shield className="h-4 w-4" />
                      <span>Passer au test de phishing</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <QuizComponent questions={quizQuestions} onComplete={handleQuizComplete} />
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

export default Quiz;
