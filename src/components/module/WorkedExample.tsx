import React from 'react';
import { WorkedExample } from '../../types';
import { JournalEntryTable } from '../visual/JournalEntry';
import { CheckCircle2, AlertTriangle, HelpCircle, ArrowRight } from 'lucide-react';

interface Props {
  example: WorkedExample;
}

export const WorkedExampleCard: React.FC<Props> = ({ example }) => {
  return (
    <div className="my-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Exam-Style Worked Micro-Example
          </span>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5">
            {example.title}
          </h3>
        </div>
        <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">
          Step-by-Step Method
        </span>
      </div>

      <div className="p-5 space-y-5">
        {/* Facts Given */}
        <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1 flex items-center space-x-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
            <span>Facts Given:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line">
            {example.facts}
          </p>
        </div>

        {/* Question & Concept */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="font-bold text-slate-500 dark:text-slate-400 uppercase text-[11px] mb-1">
              What is requested:
            </div>
            <div className="font-medium text-slate-800 dark:text-slate-200">{example.question}</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="font-bold text-slate-500 dark:text-slate-400 uppercase text-[11px] mb-1">
              Underlying concept / rule:
            </div>
            <div className="font-medium text-blue-600 dark:text-blue-400">{example.concept}</div>
          </div>
        </div>

        {/* Repeatable Method */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Repeatable Method:
          </h4>
          <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 font-medium">
            {example.method}
          </div>
        </div>

        {/* Numbered Reasoning Steps */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Detailed Accounting Reasoning & Steps:
          </h4>
          <ol className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {example.steps.map((step, idx) => (
              <li key={idx} className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed flex-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Journal Entries (if applicable) */}
        {example.journalEntries && example.journalEntries.length > 0 && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Journal Entry:
            </h4>
            <JournalEntryTable entries={example.journalEntries} />
          </div>
        )}

        {/* Statement Impacts */}
        {(example.profitEffect || example.positionEffect) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {example.profitEffect && (
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
                <span className="font-bold text-emerald-800 dark:text-emerald-300 block mb-0.5">Impact on Profit (I/S):</span>
                <span className="text-emerald-900 dark:text-emerald-200">{example.profitEffect}</span>
              </div>
            )}
            {example.positionEffect && (
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60">
                <span className="font-bold text-blue-800 dark:text-blue-300 block mb-0.5">Impact on Balance Sheet:</span>
                <span className="text-blue-900 dark:text-blue-200">{example.positionEffect}</span>
              </div>
            )}
          </div>
        )}

        {/* Final Conclusion */}
        <div className="p-3.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white flex items-start space-x-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-bold text-emerald-300 block mb-0.5">Final Conclusion:</span>
            <span>{example.conclusion}</span>
          </div>
        </div>

        {/* Common Wrong Turn Callout */}
        <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-950 dark:text-amber-200 flex items-start space-x-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-800 dark:text-amber-300">Common Exam Trap / Wrong Turn: </span>
            <span>{example.commonWrongTurn}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
