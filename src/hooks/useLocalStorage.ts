import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export function useTheme(): { isDark: boolean; toggleTheme: () => void } {
  const [isDark, setIsDark] = useLocalStorage<boolean>('fa_theme_dark', false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return { isDark, toggleTheme };
}

export function useReviewMarkers() {
  const [markedQuestionIds, setMarkedQuestionIds] = useLocalStorage<string[]>('fa_review_markers', []);

  const isMarked = (questionId: string) => markedQuestionIds.includes(questionId);

  const toggleMark = (questionId: string) => {
    setMarkedQuestionIds(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const removeMark = (questionId: string) => {
    setMarkedQuestionIds(prev => prev.filter(id => id !== questionId));
  };

  return {
    markedQuestionIds,
    isMarked,
    toggleMark,
    removeMark,
    count: markedQuestionIds.length
  };
}
