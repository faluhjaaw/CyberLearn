
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Score = {
  quiz: number;
  phishing: number;
  scenarios: number;
  total: number;
  quizCompleted: boolean;
  phishingCompleted: boolean;
  scenariosCompleted: boolean;
};

type ProgressContextType = {
  score: Score;
  updateQuizScore: (points: number) => void;
  updatePhishingScore: (points: number) => void;
  updateScenariosScore: (points: number) => void;
  resetAllScores: () => void;
  completedSections: string[];
  markSectionCompleted: (section: string) => void;
};

const defaultScore: Score = {
  quiz: 0,
  phishing: 0,
  scenarios: 0,
  total: 0,
  quizCompleted: false,
  phishingCompleted: false,
  scenariosCompleted: false,
};

// Export the context so it can be imported in useProgress.tsx
export const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState<Score>(() => {
    const savedScore = localStorage.getItem('phishguard_score');
    return savedScore ? JSON.parse(savedScore) : defaultScore;
  });
  
  const [completedSections, setCompletedSections] = useState<string[]>(() => {
    const saved = localStorage.getItem('phishguard_completed');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('phishguard_score', JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    localStorage.setItem('phishguard_completed', JSON.stringify(completedSections));
  }, [completedSections]);

  const updateQuizScore = (points: number) => {
    setScore(prev => {
      const newScore = {
        ...prev,
        quiz: points,
        quizCompleted: true,
        total: prev.phishing + prev.scenarios + points
      };
      return newScore;
    });
  };

  const updatePhishingScore = (points: number) => {
    setScore(prev => {
      const newScore = {
        ...prev,
        phishing: points,
        phishingCompleted: true,
        total: prev.quiz + prev.scenarios + points
      };
      return newScore;
    });
  };

  const updateScenariosScore = (points: number) => {
    setScore(prev => {
      const newScore = {
        ...prev,
        scenarios: points,
        scenariosCompleted: true,
        total: prev.quiz + prev.phishing + points
      };
      return newScore;
    });
  };

  const resetAllScores = () => {
    setScore(defaultScore);
    setCompletedSections([]);
  };

  const markSectionCompleted = (section: string) => {
    if (!completedSections.includes(section)) {
      setCompletedSections(prev => [...prev, section]);
    }
  };

  return (
    <ProgressContext.Provider
      value={{
        score,
        updateQuizScore,
        updatePhishingScore,
        updateScenariosScore,
        resetAllScores,
        completedSections,
        markSectionCompleted
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

// Remove the useProgress hook from here as it's defined in useProgress.tsx
