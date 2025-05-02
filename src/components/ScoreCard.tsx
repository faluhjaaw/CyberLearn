
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Check, AlertCircle } from 'lucide-react';

interface ScoreCardProps {
  title: string;
  score: number;
  completed: boolean;
  recommendations: string[];
  icon: React.ReactNode;
}

export default function ScoreCard({ title, score, completed, recommendations, icon }: ScoreCardProps) {
  const getScoreColor = () => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-red-600';
  };
  
  const getScoreBgColor = () => {
    if (score >= 80) return 'bg-green-100 border-green-200';
    if (score >= 60) return 'bg-amber-100 border-amber-200';
    return 'bg-red-100 border-red-200';
  };
  
  const getProgressColor = () => {
    if (score >= 80) return 'bg-green-600';
    if (score >= 60) return 'bg-amber-500';
    return 'bg-red-500';
  };
  
  return (
    <Card className="overflow-hidden transition-transform hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription>
            {completed ? 'Module terminé' : 'Module non terminé'}
          </CardDescription>
        </div>
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {completed ? (
            <>
              <div className={`p-4 rounded-lg ${getScoreBgColor()}`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Votre score</span>
                  <span className={`text-lg font-bold ${getScoreColor()}`}>{score}%</span>
                </div>
                <Progress 
                  value={score} 
                  className={`h-2 ${getProgressColor()}`}
                />
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gray-700">Recommandations</h4>
                <ul className="space-y-1 pl-1">
                  {recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="flex items-center px-4 py-6 border border-dashed border-gray-300 rounded-lg">
              <AlertCircle className="h-5 w-5 text-amber-500 mr-3" />
              <p className="text-gray-600">Module non complété. Terminez ce module pour voir vos résultats.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
