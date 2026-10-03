import React, { useState } from 'react';
import { QuizQuestion } from '../../types';
import { useReviewMarkers, useLocalStorage } from '../../hooks/useLocalStorage';
import { JournalEntryTable } from '../visual/JournalEntry';
import { 
  Bookmark, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Eye, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';
import { Badge } from '../ui/Badge';

interface QuizEngineProps {
  questions: QuizQuestion[];
  moduleId: string;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({ questions, moduleId }) => {
  const { isMarked, toggleMark } = useReviewMarkers();
  
  // Store user answers in localStorage per module
  const [selectedAnswers, setSelectedAnswers] = useLocalStorage<Record<string, string>>(`fa_quiz_ans_${moduleId}`, {});
  const [revealedQuestions, setRevealedQuestions] = useLocalStorage<Record<string, boolean>>(`fa_quiz_rev_${moduleId}`, {});
  const [textAnswers, setTextAnswers] = useLocalStorage<Record<string, string>>(`fa_quiz_txt_${moduleId}`, {});

  const handleSelectOption = (qId: string, optIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [qId]: String(optIndex)
    }));
  };

  const handleToggleReveal = (qId: string) => {
    setRevealedQuestions(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const handleResetModuleQuiz = () => {
    setSelectedAnswers({});
    setRevealedQuestions({});
    setTextAnswers({});
  };

  // Compute Auto-Grade Metrics
  let autoGradableCount = 0;
  let correctCount = 0;

  questions.forEach(q => {
    if (q.type === 'mcq' || q.type === 'true-false') {
      autoGradableCount++;
      const userAns = selectedAnswers[q.id];
      if (userAns !== undefined && userAns === String(q.correctAnswer)) {
        correctCount++;
      }
    }
  });

  const attemptedCount = Object.keys(selectedAnswers).length + Object.keys(textAnswers).filter(k => textAnswers[k]?.trim()).length;

  return (
    <div className="my-8 space-y-6">
      {/* Quiz Progress & Score Header */}
      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center space-x-4">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase font-bold">Auto-Graded Score</span>
            <span className="font-bold text-base text-blue-600 dark:text-blue-400">
              {correctCount} / {autoGradableCount} correct
            </span>
          </div>
          <div className="h-8 w-px bg-slate-300 dark:bg-slate-700" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase font-bold">Total Questions</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {questions.length} questions ({attemptedCount} attempted)
            </span>
          </div>
        </div>

        <button
          onClick={handleResetModuleQuiz}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 text-xs text-slate-600 dark:text-slate-300 font-medium transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Quiz Answers</span>
        </button>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const isRevealed = !!revealedQuestions[q.id];
          const bookmarked = isMarked(q.id);
          const userChoice = selectedAnswers[q.id];
          const isAutoGradable = q.type === 'mcq' || q.type === 'true-false';
          const isCorrect = isAutoGradable && userChoice !== undefined && userChoice === String(q.correctAnswer);
          const isWrong = isAutoGradable && userChoice !== undefined && userChoice !== String(q.correctAnswer);

          return (
            <div
              key={q.id}
              id={q.id}
              className={`p-5 rounded-2xl border transition bg-white dark:bg-slate-900 shadow-sm ${
                bookmarked ? 'border-amber-300 dark:border-amber-600/60 ring-1 ring-amber-400/20' : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center">
                    Q{idx + 1}
                  </span>
                  <Badge type="concept" size="sm">
                    {q.sourceTopic}
                  </Badge>
                  <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {q.type.replace('-', ' ')}
                  </span>
                  <span className={`text-[11px] font-semibold uppercase px-2 py-0.5 rounded ${
                    q.difficulty === 'exam-style' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300' :
                    q.difficulty === 'application' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' :
                    'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}>
                    {q.difficulty}
                  </span>
                </div>

                <button
                  onClick={() => toggleMark(q.id)}
                  className={`flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-semibold transition ${
                    bookmarked
                      ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700'
                      : 'text-slate-400 hover:text-amber-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  title={bookmarked ? 'Remove bookmark' : 'Bookmark for later review'}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-amber-500' : ''}`} />
                  <span>{bookmarked ? 'Review Marked' : 'Review Later'}</span>
                </button>
              </div>

              {/* Question Prompt */}
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4 whitespace-pre-line leading-relaxed">
                {q.question}
              </div>

              {/* Options for MCQ / True-False */}
              {isAutoGradable && q.options && (
                <div className="space-y-2 mb-4">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = userChoice === String(optIdx);
                    const isCorrectOption = String(optIdx) === String(q.correctAnswer);

                    let optStyle = 'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-900';
                    if (isSelected) {
                      optStyle = isRevealed
                        ? isCorrect
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200'
                          : 'border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200'
                        : 'border-blue-600 bg-blue-50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200';
                    } else if (isRevealed && isCorrectOption) {
                      optStyle = 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-medium flex items-center justify-between transition-all ${optStyle}`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold border ${
                            isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 dark:border-slate-700 text-slate-500'
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isRevealed && isCorrectOption && (
                          <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        )}
                        {isRevealed && isSelected && !isCorrectOption && (
                          <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Free Text Scratchpad for Short Answer / Calc / Journal Entry */}
              {!isAutoGradable && (
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    Your Working / Proposed Answer:
                  </label>
                  <textarea
                    rows={3}
                    value={textAnswers[q.id] || ''}
                    onChange={(e) => setTextAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                    placeholder="Type your notes, calculation, or debit/credit accounts here before revealing the answer..."
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-200"
                  />
                </div>
              )}

              {/* Action Buttons: Reveal solution / Compare answer */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                <button
                  onClick={() => handleToggleReveal(q.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                    isRevealed
                      ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>
                    {isRevealed 
                      ? 'Hide Solution & Rationale' 
                      : (!isAutoGradable ? 'Compare with Expected Answer' : 'Reveal Explanation & Solution')}
                  </span>
                </button>

                {isAutoGradable && userChoice !== undefined && (
                  <span className={`text-xs font-bold ${isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                    {isCorrect ? '✓ Correct Choice' : '✗ Incorrect Selection'}
                  </span>
                )}
              </div>

              {/* Revealed Solution Box */}
              {isRevealed && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  {/* Correct Answer Display */}
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">Expected Solution: </span>
                    {isAutoGradable && q.options 
                      ? q.options[Number(q.correctAnswer)] 
                      : q.correctAnswer}
                  </div>

                  {/* Journal Entry Solution if present */}
                  {q.journalEntries && q.journalEntries.length > 0 && (
                    <div className="mt-2">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                        Expected Journal Entries:
                      </span>
                      <JournalEntryTable entries={q.journalEntries} />
                    </div>
                  )}

                  {/* Marking Guide (for open ended) */}
                  {q.markingGuide && (
                    <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/50 text-xs text-indigo-950 dark:text-indigo-200">
                      <span className="font-bold text-indigo-700 dark:text-indigo-300">Marking Checklist: </span>
                      {q.markingGuide}
                    </div>
                  )}

                  {/* Full Rationale */}
                  <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">Detailed Accounting Rationale:</span>
                    {q.rationale}
                  </div>

                  {/* Misconception Targeted */}
                  <div className="text-xs text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/30 p-2.5 rounded-lg border border-amber-200 dark:border-amber-800/60 flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Common Misconception Targeted: </span>
                      {q.misconceptionTargeted}
                    </div>
                  </div>

                  {/* Concept to Revisit */}
                  <div className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                    📖 <strong>If you struggled:</strong> Revisit section{' '}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">"{q.revisitSection}"</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
