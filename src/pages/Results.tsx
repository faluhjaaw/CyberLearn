
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScoreCard from "@/components/ScoreCard";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/hooks/useProgress";
import { Link } from "react-router-dom";
import { Book, Lock, BookOpen, Share2, Download, RefreshCcw, Award, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Results = () => {
  const { score, resetAllScores } = useProgress();
  const { toast } = useToast();
  const [certificateGenerated, setCertificateGenerated] = useState(false);
  
  const totalModulesCompleted = 
    (score.quizCompleted ? 1 : 0) + 
    (score.phishingCompleted ? 1 : 0) + 
    (score.scenariosCompleted ? 1 : 0);
  
  const totalModules = 3;
  const percentCompleted = Math.round((totalModulesCompleted / totalModules) * 100);
  
  const quizRecommendations = [
    "Consultez les guides de cybersécurité pour les concepts clés",
    "Restez informé sur les dernières menaces",
    "Utilisez des outils comme des gestionnaires de mots de passe"
  ];
  
  const phishingRecommendations = [
    "Vérifiez toujours l'expéditeur des emails reçus",
    "Ne cliquez pas sur les liens suspects",
    "Contactez directement les organisations en cas de doute"
  ];
  
  const scenariosRecommendations = [
    "Appliquez les bonnes pratiques dans votre quotidien",
    "Partagez vos connaissances avec votre entourage",
    "Restez vigilant face aux nouvelles techniques d'attaque"
  ];
  
  const handleResetProgress = () => {
    if (window.confirm("Êtes-vous sûr de vouloir réinitialiser toute votre progression ? Cette action est irréversible.")) {
      resetAllScores();
      toast({
        title: "Progression réinitialisée",
        description: "Votre progression a été remise à zéro avec succès.",
      });
    }
  };
  
  const handleShareResults = () => {
    const text = `J'ai obtenu un score de ${score.total}% sur PhishGuard - Campus Anti-Phishing ! #CyberSécurité #PhishGuard`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Mes résultats PhishGuard',
        text: text,
        url: window.location.href,
      })
      .then(() => {
        toast({
          title: "Partagé !",
          description: "Vos résultats ont été partagés avec succès.",
        });
      })
      .catch(() => {
        copyToClipboard(text);
      });
    } else {
      copyToClipboard(text);
    }
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copié !",
      description: "Le message a été copié dans votre presse-papier.",
    });
  };
  
  const handleGenerateCertificate = () => {
    setCertificateGenerated(true);
    toast({
      title: "Certificat généré !",
      description: "Votre certificat de compétence est prêt à être téléchargé.",
    });
  };
  
  const allModulesCompleted = score.quizCompleted && score.phishingCompleted && score.scenariosCompleted;
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-phishguard-deep-blue sm:text-4xl">Vos résultats</h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Découvrez votre niveau de compétence en cybersécurité
            </p>
          </div>
          
          {/* Progress overview */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Vue d'ensemble de votre progression</h2>
                <p className="text-gray-600">{totalModulesCompleted} modules sur {totalModules} terminés</p>
              </div>
              <div className="mt-4 sm:mt-0 flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                  onClick={handleResetProgress}
                >
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Réinitialiser
                </Button>
                <Button
                  size="sm"
                  className="bg-phishguard-purple hover:bg-phishguard-dark-purple flex items-center"
                  onClick={handleShareResults}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Partager
                </Button>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
              <div 
                className="h-4 rounded-full bg-gradient-to-r from-phishguard-purple to-phishguard-dark-purple"
                style={{ width: `${percentCompleted}%` }}
              ></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-phishguard-light-gray rounded-lg p-4 text-center">
                <div className="text-4xl font-bold text-phishguard-purple">
                  {score.total || 0}%
                </div>
                <div className="text-gray-600">Score total</div>
              </div>
              <div className="bg-phishguard-light-gray rounded-lg p-4 text-center">
                <div className="text-4xl font-bold text-phishguard-purple">
                  {totalModulesCompleted}
                </div>
                <div className="text-gray-600">Modules terminés</div>
              </div>
              <div className="bg-phishguard-light-gray rounded-lg p-4 text-center">
                <div className="text-4xl font-bold text-phishguard-purple">
                  {totalModulesCompleted >= 3 ? "Expert" : totalModulesCompleted >= 2 ? "Intermédiaire" : "Débutant"}
                </div>
                <div className="text-gray-600">Niveau actuel</div>
              </div>
            </div>
          </div>
          
          {/* Module results */}
          <div className="grid gap-8 md:grid-cols-3">
            <ScoreCard
              title="Quiz Cybersécurité"
              score={score.quiz}
              completed={score.quizCompleted}
              recommendations={quizRecommendations}
              icon={<Book className="h-6 w-6 text-blue-600" />}
            />
            <ScoreCard
              title="Détection de Phishing"
              score={score.phishing}
              completed={score.phishingCompleted}
              recommendations={phishingRecommendations}
              icon={<Lock className="h-6 w-6 text-green-600" />}
            />
            <ScoreCard
              title="Scénarios Éducatifs"
              score={score.scenarios}
              completed={score.scenariosCompleted}
              recommendations={scenariosRecommendations}
              icon={<BookOpen className="h-6 w-6 text-amber-600" />}
            />
          </div>
          
          {/* Certificate section */}
          {allModulesCompleted && (
            <div className="mt-12 bg-gradient-to-br from-phishguard-deep-blue to-phishguard-dark-purple rounded-lg p-8 text-center text-white shadow-lg">
              <Award className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Félicitations !</h2>
              <p className="text-lg mb-6">
                Vous avez terminé tous les modules de formation. Vous pouvez maintenant générer votre certificat de compétence.
              </p>
              {certificateGenerated ? (
                <Button
                  className="bg-white text-phishguard-deep-blue hover:bg-gray-100 flex items-center mx-auto"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger le certificat
                </Button>
              ) : (
                <Button
                  className="bg-white text-phishguard-deep-blue hover:bg-gray-100 flex items-center mx-auto"
                  onClick={handleGenerateCertificate}
                >
                  <Award className="mr-2 h-4 w-4" />
                  Générer mon certificat
                </Button>
              )}
            </div>
          )}
          
          {/* Next steps */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Prochaines étapes</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-phishguard-purple hover:shadow-md transition-all">
                {!allModulesCompleted ? (
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Terminer votre formation</h3>
                    <p className="text-gray-600 mb-4">Complétez tous les modules pour obtenir votre certificat de compétence.</p>
                    {!score.quizCompleted && (
                      <Link to="/quiz">
                        <Button className="w-full bg-phishguard-purple hover:bg-phishguard-dark-purple">
                          Faire le quiz
                        </Button>
                      </Link>
                    )}
                    {score.quizCompleted && !score.phishingCompleted && (
                      <Link to="/phishing">
                        <Button className="w-full bg-phishguard-purple hover:bg-phishguard-dark-purple">
                          Tester la détection de phishing
                        </Button>
                      </Link>
                    )}
                    {score.quizCompleted && score.phishingCompleted && !score.scenariosCompleted && (
                      <Link to="/scenarios">
                        <Button className="w-full bg-phishguard-purple hover:bg-phishguard-dark-purple">
                          Explorer les scénarios
                        </Button>
                      </Link>
                    )}
                  </div>
                ) : (
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Devenir ambassadeur</h3>
                    <p className="text-gray-600 mb-4">Partagez vos connaissances avec votre entourage et sensibilisez-les à la cybersécurité.</p>
                    <Button 
                      variant="outline"
                      className="w-full border-phishguard-purple text-phishguard-purple hover:bg-phishguard-light-gray"
                      onClick={handleShareResults}
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Partager mes résultats
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-phishguard-purple hover:shadow-md transition-all">
                <h3 className="font-semibold text-lg mb-2">Ressources complémentaires</h3>
                <p className="text-gray-600 mb-4">Approfondissez vos connaissances avec ces ressources essentielles.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                      <Shield className="h-3 w-3" />
                    </div>
                    <span className="text-sm">Guide des bonnes pratiques en cybersécurité</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                      <Lock className="h-3 w-3" />
                    </div>
                    <span className="text-sm">Comment créer des mots de passe sécurisés</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-2">
                      <BookOpen className="h-3 w-3" />
                    </div>
                    <span className="text-sm">Les dernières techniques de phishing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-phishguard-deep-blue mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-sm">
            © 2025 PhishGuard – Campus Anti-Phishing. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Results;
