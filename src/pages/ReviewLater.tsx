import React from 'react';
import { useReviewMarkers } from '../hooks/useLocalStorage';
import { Link } from 'react-router-dom';
import { Bookmark, ArrowRight, Trash2, CheckCircle2 } from 'lucide-react';
import { MODULES_META } from '../data/modules';

export const ReviewLater: React.FC = () => {
  const { markedQuestionIds, removeMark } = useReviewMarkers();

  // Parse questions from ID (format: m{moduleNum}-q{qNum})
  const bookmarkedList = markedQuestionIds.map(id => {
    const match = id.match(/m(\d+)-q(\d+)/);
    const moduleNum = match ? parseInt(match[1]) : 1;
    const modMeta = MODULES_META.find(m => m.number === moduleNum);
    return {
      id,
      moduleNum,
      moduleTitle: modMeta ? modMeta.title : `Module ${moduleNum}`,
      moduleId: modMeta ? modMeta.id : `module-${moduleNum}`
    };
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
          <Bookmark className="w-4 h-4 fill-amber-500" />
          <span>Bookmarked Questions ({markedQuestionIds.length})</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Questions Marked for Final Review
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
          All questions you bookmarked while revising are gathered here. Revisit their solutions and rationale before stepping into the exam hall.
        </p>
      </div>

      {/* Empty State */}
      {bookmarkedList.length === 0 ? (
        <div className="text-center py-16 px-4 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            No questions bookmarked yet
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            While practising the Check My Understanding quizzes in any module, click the "Review Later" button on any tricky questions to collect them here.
          </p>
          <Link
            to="/module/module-1"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition mt-2"
          >
            <span>Explore Module 1</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookmarkedList.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                    Module {item.moduleNum}
                  </span>
                  <button
                    onClick={() => removeMark(item.id)}
                    className="p-1 rounded text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-slate-800 transition"
                    title="Remove bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                  Question ID: {item.id.toUpperCase()}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                  From: {item.moduleTitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
                <Link
                  to={`/module/${item.moduleId}#${item.id}`}
                  className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1"
                >
                  <span>Revisit in Module {item.moduleNum}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => removeMark(item.id)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-[11px]"
                >
                  Dismiss
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
