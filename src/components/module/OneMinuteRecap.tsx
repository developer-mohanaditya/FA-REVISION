import React from 'react';
import { OneMinuteRecap as RecapType } from '../../types';
import { Clock, CheckCircle, Volume2, KeyRound } from 'lucide-react';

interface Props {
  recap: RecapType;
}

export const OneMinuteRecapSection: React.FC<Props> = ({ recap }) => {
  return (
    <div className="my-8 p-6 rounded-2xl bg-slate-900 text-white shadow-lg space-y-6">
      {/* Title */}
      <div className="flex items-center space-x-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
        <Clock className="w-4 h-4" />
        <span>One-Minute Rapid Recap</span>
      </div>

      {/* 5 Key Takeaways */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Five Essential Takeaways
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          {recap.takeaways.map((point, idx) => (
            <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-200 leading-relaxed font-medium">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 "Say This Aloud" Prompts */}
      <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-2">
          <Volume2 className="w-4 h-4" />
          <span>Active Recall: Say These 3 Principles Aloud</span>
        </h4>
        <div className="space-y-1.5 pl-6 text-xs sm:text-sm text-slate-300 italic">
          {recap.recallPrompts.map((prompt, idx) => (
            <div key={idx} className="relative before:content-['“'] before:text-amber-400 after:content-['”'] after:text-amber-400">
              {prompt}
            </div>
          ))}
        </div>
      </div>

      {/* If You Remember Only One Thing */}
      <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-500/40 flex items-start space-x-3">
        <KeyRound className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm">
          <span className="font-bold text-blue-300 block mb-0.5">If You Remember Only One Thing:</span>
          <span className="text-blue-100 font-semibold">{recap.coreRule}</span>
        </div>
      </div>
    </div>
  );
};
