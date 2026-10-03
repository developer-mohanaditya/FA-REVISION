import React from 'react';
import { MemoryCard as MemoryCardType } from '../../types';
import { Bookmark, ShieldAlert, Sparkles, Scale, BookOpen } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { JournalEntryTable } from '../visual/JournalEntry';

interface Props {
  memory: MemoryCardType;
}

export const MemoryCardSection: React.FC<Props> = ({ memory }) => {
  return (
    <div className="my-8 space-y-6">
      {/* High-Yield Terms */}
      <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center space-x-2">
          <BookOpen className="w-4 h-4 text-blue-500" />
          <span>Key Accounting Terms & Precise Meanings</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {memory.keyTerms.map((term, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">{term.term}</span>
                {term.category && <Badge type={term.category as any} size="sm">{term.category}</Badge>}
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{term.definition}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Essential Formulas & Calculation Rules */}
      {memory.formulas && memory.formulas.length > 0 && (
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center space-x-2">
            <Scale className="w-4 h-4 text-indigo-500" />
            <span>Essential Course Formulas</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {memory.formulas.map((f, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/60 text-xs">
                <div className="font-bold text-indigo-900 dark:text-indigo-200 mb-1">{f.name}</div>
                <div className="font-mono font-bold text-sm text-indigo-700 dark:text-indigo-300 p-2 rounded bg-white/80 dark:bg-slate-900/80 border border-indigo-100 dark:border-indigo-900">
                  {f.formula}
                </div>
                {f.note && <div className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 italic">{f.note}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Master "Do Not Confuse" Table */}
      {memory.doNotConfuse && memory.doNotConfuse.length > 0 && (
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 text-amber-500" />
            <span>Do Not Confuse: Critical Distinctions</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300">
                  <th className="py-2.5 px-3">Concept A</th>
                  <th className="py-2.5 px-3">Concept B</th>
                  <th className="py-2.5 px-3">Fundamental Difference</th>
                  <th className="py-2.5 px-3">Concrete Practical Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {memory.doNotConfuse.map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="py-2.5 px-3 font-bold text-blue-600 dark:text-blue-400">{item.termA}</td>
                    <td className="py-2.5 px-3 font-bold text-purple-600 dark:text-purple-400">{item.termB}</td>
                    <td className="py-2.5 px-3 font-medium text-slate-800 dark:text-slate-200">{item.keyDifference}</td>
                    <td className="py-2.5 px-3 text-slate-600 dark:text-slate-400 italic">{item.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Common Exam Traps */}
      {memory.commonTraps && memory.commonTraps.length > 0 && (
        <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-800/60 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-3 flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Frequent Exam Traps to Dodge</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-amber-950 dark:text-amber-200 font-medium">
            {memory.commonTraps.map((trap, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
                <span>{trap}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* High-Priority "Memorise This" Box */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md flex items-start space-x-4">
        <Sparkles className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block mb-1">
            Golden Exam Rule — Memorise This
          </span>
          <p className="text-sm font-semibold leading-relaxed">
            {memory.memoriseThis}
          </p>
        </div>
      </div>
    </div>
  );
};
