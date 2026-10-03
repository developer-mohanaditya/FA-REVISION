import React from 'react';
import { Lightbulb, Sparkles } from 'lucide-react';
import { ELI10Card as ELI10Type } from '../../types';

interface Props {
  card: ELI10Type;
}

export const ELI10Card: React.FC<Props> = ({ card }) => {
  return (
    <div className="my-6 p-5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border-2 border-sky-200 dark:border-sky-800/80 shadow-sm transition hover:shadow-md">
      <div className="flex items-center space-x-2 text-sky-700 dark:text-sky-300 font-bold text-xs uppercase tracking-wider mb-2">
        <Sparkles className="w-4 h-4 text-sky-500 flex-shrink-0" />
        <span>Explain It Like I’m 10</span>
        <span className="text-slate-400 font-normal">|</span>
        <span className="text-slate-600 dark:text-slate-400 font-semibold lowercase tracking-normal first-letter:uppercase">{card.title}</span>
      </div>

      <div className="flex items-start space-x-3 mt-3">
        <div className="w-8 h-8 rounded-full bg-sky-200 dark:bg-sky-900 flex items-center justify-center text-sky-800 dark:text-sky-200 font-bold text-sm flex-shrink-0 mt-0.5">
          🧒
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
            "{card.explanation}"
          </p>

          <div className="mt-3 p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-sky-100 dark:border-sky-900 text-xs text-sky-900 dark:text-sky-200">
            <span className="font-bold text-amber-600 dark:text-amber-400">⚠️ Key distinction: </span>
            {card.keyDistinction}
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 italic">
            🔗 <strong>Connecting back:</strong> {card.reconnect}
          </p>
        </div>
      </div>
    </div>
  );
};
