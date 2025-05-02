import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useProgress } from '@/hooks/useProgress';
import { QuizQuestion } from '@/data/quizData';
interface QuizComponentProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}
export default function QuizComponent({
  questions,
  onComplete
}: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const {
    toast
  } = useToast();
  const {
    updateQuizScore
  } = useProgress();
  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex + 1) / questions.length * 100;
  const handleOptionSelect = (index: number) => {
    if (!isAnswerSubmitted) {
      setSelectedOption(index);
    }
  };
  const handleSubmitAnswer = () => {
    if (selectedOption === null) {
      toast({
        title: "Sélection requise",
        description: "Veuillez sélectionner une réponse avant de continuer.",
        variant: "destructive"
      });
      return;
    }
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      toast({
        title: "Bonne réponse !",
        description: "Continuez comme ça !",
        variant: "default"
      });
    } else {
      toast({
        title: "Réponse incorrecte",
        description: "Consultez l'explication pour mieux comprendre.",
        variant: "destructive"
      });
    }
    setIsAnswerSubmitted(true);
    setShowExplanation(true);
  };
  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setShowExplanation(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const finalScore = Math.round(correctAnswers / questions.length * 100);
      updateQuizScore(finalScore);
      onComplete(finalScore);
    }
  };
  return <Card className="w-full max-w-3xl mx-auto my-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">Question {currentQuestionIndex + 1}/{questions.length}</CardTitle>
          <div className="text-right">
            <span className="font-medium text-phishguard-purple">{correctAnswers}</span>
            <span className="text-gray-500"> correctes</span>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
        <CardDescription className="mt-4 text-lg">{currentQuestion.question}</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedOption?.toString()} className="space-y-4">
          {currentQuestion.options.map((option, index) => <div key={index} className={`flex items-center space-x-2 p-4 rounded-lg border transition-colors ${isAnswerSubmitted ? index === currentQuestion.correctAnswer ? 'border-green-500 bg-green-50' : selectedOption === index ? 'border-red-500 bg-red-50' : 'border-gray-200' : selectedOption === index ? 'border-phishguard-purple bg-phishguard-light-gray' : 'border-gray-200 hover:border-phishguard-purple hover:bg-gray-50'}`} onClick={() => handleOptionSelect(index)}>
              <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={isAnswerSubmitted} />
              <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                {option}
              </Label>
              {isAnswerSubmitted && index === currentQuestion.correctAnswer && <CheckCircle className="h-5 w-5 text-green-500" />}
              {isAnswerSubmitted && selectedOption === index && selectedOption !== currentQuestion.correctAnswer && <XCircle className="h-5 w-5 text-red-500" />}
            </div>)}
        </RadioGroup>

        {showExplanation && <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-blue-800">Explication</h4>
                <p className="mt-1 text-sm text-blue-700">{currentQuestion.explanation}</p>
              </div>
            </div>
          </div>}
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        {!isAnswerSubmitted ? <Button onClick={handleSubmitAnswer} className="bg-phishguard-purple hover:bg-phishguard-dark-purple text-slate-50 bg-blue-500 hover:bg-blue-400">
            Vérifier ma réponse
          </Button> : <Button onClick={handleNextQuestion} className="bg-phishguard-purple hover:bg-phishguard-dark-purple bg-blue-500 hover:bg-blue-400">
            {currentQuestionIndex < questions.length - 1 ? "Question suivante" : "Voir mes résultats"}
          </Button>}
      </CardFooter>
    </Card>;
}