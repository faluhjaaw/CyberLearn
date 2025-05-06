
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Check, X, BookOpen, AlertCircle } from 'lucide-react';
import { Scenario as ScenarioType, ScenarioStep } from '@/data/scenarioData';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface ScenarioProps {
  scenario: ScenarioType;
  onComplete: (score: number) => void;
}

export default function Scenario({ scenario, onComplete }: ScenarioProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  
  const currentStep = scenario.steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / scenario.steps.length) * 100;
  const hasOptions = currentStep.options && currentStep.options.length > 0;
  
  const handleOptionSelect = (index: number) => {
    if (!answerSubmitted) {
      setSelectedOption(index);
    }
  };
  
  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    
    const option = currentStep.options?.[selectedOption];
    if (option) {
      setIsCorrect(option.correct);
      if (option.correct) {
        setScore(score + 1);
      }
    }
    
    setAnswerSubmitted(true);
  };
  
  const handleNextStep = () => {
    if (currentStepIndex < scenario.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      setSelectedOption(null);
      setAnswerSubmitted(false);
    } else {
      // Calculate final score as percentage
      const totalQuestions = scenario.steps.filter(step => step.options && step.options.length > 0).length;
      const finalScore = Math.round((score / totalQuestions) * 100);
      onComplete(finalScore);
      setCompleted(true);
    }
  };
  
  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-6">
      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="bg-gradient-to-r from-phishguard-deep-blue to-phishguard-purple text-white">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl md:text-2xl">{scenario.title}</CardTitle>
            <Badge variant="secondary" className="bg-white text-phishguard-deep-blue">
              Étape {currentStepIndex + 1}/{scenario.steps.length}
            </Badge>
          </div>
          <Progress value={progress} className="h-2 bg-white/30" />
        </CardHeader>
        
        <CardContent className="p-0">
          {/* Image section */}
          {currentStep.image && (
            <div className="w-full h-64 overflow-hidden">
              <img 
                src={currentStep.image} 
                alt={currentStep.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">{currentStep.title}</h3>
            <p className="text-gray-700 mb-6">{currentStep.content}</p>
            
            {/* Interactive quiz section */}
            {hasOptions && (
              <div className="my-6">
                <h4 className="font-medium text-lg mb-4">Que feriez-vous dans cette situation ?</h4>
                <RadioGroup value={selectedOption?.toString()} className="space-y-3">
                  {currentStep.options?.map((option, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-2 p-4 rounded-lg border ${
                        answerSubmitted
                          ? option.correct
                            ? 'border-green-500 bg-green-50'
                            : selectedOption === index
                              ? 'border-red-500 bg-red-50'
                              : 'border-gray-200'
                          : selectedOption === index
                            ? 'border-phishguard-purple bg-phishguard-light-gray'
                            : 'border-gray-200 hover:border-phishguard-purple hover:bg-gray-50'
                      }`}
                      onClick={() => handleOptionSelect(index)}
                    >
                      <RadioGroupItem 
                        value={index.toString()} 
                        id={`option-${index}`}
                        disabled={answerSubmitted}
                      />
                      <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                        {option.text}
                      </Label>
                      {answerSubmitted && option.correct && (
                        <Check className="h-5 w-5 text-green-500" />
                      )}
                      {answerSubmitted && !option.correct && selectedOption === index && (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  ))}
                </RadioGroup>
                
                {answerSubmitted && (
                  <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <div className="flex items-start">
                      {isCorrect ? (
                        <Check className="h-5 w-5 text-green-500 mt-1 mr-2" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500 mt-1 mr-2" />
                      )}
                      <div>
                        <p className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                          {isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse'}
                        </p>
                        <p className="text-sm mt-1">
                          {currentStep.options?.[selectedOption as number]?.feedback}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="bg-gray-50 border-t border-gray-100 flex justify-between p-4">
          <Button
            variant="outline"
            className="flex items-center"
            onClick={handlePreviousStep}
            disabled={currentStepIndex === 0}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Précédent
          </Button>
          
          {hasOptions && !answerSubmitted ? (
            <Button
              className="bg-phishguard-purple hover:bg-phishguard-dark-purple"
              onClick={handleCheckAnswer}
              disabled={selectedOption === null}
            >
              Vérifier ma réponse
            </Button>
          ) : (
            <Button
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm
                             text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-400
                             hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 
                             focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
              onClick={handleNextStep}
            >
              {currentStepIndex < scenario.steps.length - 1 ? 'Suivant' : 'Terminer'}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
      
      {/* Scenario tips */}
      <div className="mt-8">
        <div className="bg-phishguard-soft-blue rounded-lg p-5">
          <div className="flex items-center mb-4">
            <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="font-semibold text-lg text-blue-800">Conseils de sécurité</h3>
          </div>
          <ul className="space-y-2">
            {scenario.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-white text-xs mr-2 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-blue-900">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
