import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Mail, AlertTriangle, CheckCircle, Clock, AlertCircle, ThumbsUp, ThumbsDown, Info } from 'lucide-react';
import { EmailData } from '@/data/emailData';
import { useProgress } from '@/hooks/useProgress';

interface EmailSimulatorProps {
  emails: EmailData[];
  onComplete: (score: number) => void;
}

export default function EmailSimulator({ emails, onComplete }: EmailSimulatorProps) {
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const [selectedEmails, setSelectedEmails] = useState<Record<number, boolean>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [emailsAnalyzed, setEmailsAnalyzed] = useState(0);
  const [simulationCompleted, setSimulationCompleted] = useState(false);
  
  const { toast } = useToast();
  const { updatePhishingScore } = useProgress();
  
  const currentEmail = emails[currentEmailIndex];
  
  useEffect(() => {
    if (simulationCompleted) {
      const score = Math.round((correctAnswers / emails.length) * 100);
      updatePhishingScore(score);
      onComplete(score);
    }
  }, [simulationCompleted, correctAnswers, emails.length, onComplete, updatePhishingScore]);

  const handleEmailSelection = (isPhishing: boolean) => {
    setSelectedEmails({
      ...selectedEmails,
      [currentEmail.id]: isPhishing
    });
    
    setShowFeedback(true);
    setEmailsAnalyzed(emailsAnalyzed + 1);
    
    if (isPhishing === currentEmail.isPhishing) {
      setCorrectAnswers(correctAnswers + 1);
      toast({
        title: "Bonne analyse !",
        description: isPhishing 
          ? "Bien joué ! C'était bien une tentative de phishing." 
          : "Correct ! Cet email est légitime.",
        variant: "default",
      });
    } else {
      toast({
        title: "Analyse incorrecte",
        description: isPhishing 
          ? "Attention ! Cet email est en fait légitime." 
          : "Attention ! Il s'agissait d'une tentative de phishing.",
        variant: "destructive",
      });
    }
  };

  const handleNextEmail = () => {
    setShowFeedback(false);
    
    if (currentEmailIndex < emails.length - 1) {
      setCurrentEmailIndex(currentEmailIndex + 1);
    } else {
      setSimulationCompleted(true);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="border-b border-gray-200 bg-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-phishguard-purple" />
            <h3 className="font-medium text-gray-800">Simulateur de Boîte Mail</h3>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-white">
              <Clock className="h-3 w-3 mr-1" />
              Email {currentEmailIndex + 1}/{emails.length}
            </Badge>
            <Badge variant="secondary" className="bg-phishguard-purple text-white">
              <CheckCircle className="h-3 w-3 mr-1" />
              {correctAnswers}/{emailsAnalyzed} corrects
            </Badge>
          </div>
        </div>
        
        {/* Email content */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-lg">{currentEmail.subject}</h3>
              <div className="flex items-center mt-1 text-gray-600">
                <span className="font-medium">{currentEmail.sender}</span>
                <span className="mx-1">&#60;</span>
                <span className="text-gray-500">{currentEmail.senderEmail}</span>
                <span>&#62;</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">{currentEmail.date}</div>
          </div>
          
          <div className="email-body mt-6 border-t border-gray-100 pt-6" dangerouslySetInnerHTML={{ __html: currentEmail.body }} />
        </div>
        
        {/* User actions */}
        <div className="px-6 py-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 sm:mb-0">
            <AlertCircle className="h-4 w-4 inline-block mr-1" />
            <span>Analysez l'email ci-dessus. Est-ce une tentative de phishing ?</span>
          </div>
          
          {!showFeedback ? (
            <div className="flex space-x-3">
              <Button 
                variant="destructive" 
                className="flex items-center" 
                onClick={() => handleEmailSelection(true)}
              >
                <ThumbsDown className="mr-2 h-4 w-4" />
                <span>Phishing</span>
              </Button>
              <Button 
                variant="default" 
                className="bg-green-600 hover:bg-green-700 flex items-center" 
                onClick={() => handleEmailSelection(false)}
              >
                <ThumbsUp className="mr-2 h-4 w-4" />
                <span>Légitime</span>
              </Button>
            </div>
          ) : (
            <Button 
              onClick={handleNextEmail} 
              className="bg-phishguard-purple hover:bg-phishguard-dark-purple"
            >
              {currentEmailIndex < emails.length - 1 ? "Email suivant" : "Voir les résultats"}
            </Button>
          )}
        </div>
        
        {/* Feedback section */}
        {showFeedback && (
          <div className={`px-6 py-4 ${currentEmail.isPhishing ? 'bg-red-50' : 'bg-green-50'}`}>
            <div className="flex items-start">
              {currentEmail.isPhishing ? (
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
              ) : (
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              )}
              
              <div>
                <h4 className={`font-semibold ${currentEmail.isPhishing ? 'text-red-700' : 'text-green-700'}`}>
                  {currentEmail.isPhishing ? 'Attention : Email frauduleux !' : 'Email légitime'}
                </h4>
                <p className="mt-1 text-sm">{currentEmail.explanation}</p>
                
                {currentEmail.isPhishing && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700">Indices de phishing :</p>
                    <ul className="mt-2 text-sm text-gray-700 space-y-1 pl-5 list-disc">
                      {currentEmail.clues.map((clue, index) => (
                        <li key={index}>{clue}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-8">
        <Card>
          <CardHeader className="pb-3 flex items-center space-x-2">
            <Info className="h-5 w-5 text-blue-500" />
            <h3 className="font-medium text-blue-900">Conseils pour identifier le phishing</h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2">🔍</span>
                <span>Vérifiez l'adresse email de l'expéditeur (domaine officiel ?)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">⚠️</span>
                <span>Méfiez-vous des messages créant un sentiment d'urgence</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔗</span>
                <span>Ne cliquez pas sur les liens suspects, survolez-les pour vérifier leur URL</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔒</span>
                <span>Ne partagez jamais vos informations personnelles ou bancaires par email</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">❓</span>
                <span>En cas de doute, contactez directement l'organisation par un canal officiel</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
