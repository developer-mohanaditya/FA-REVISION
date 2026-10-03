import React from 'react';
import { Link } from 'react-router-dom';
import { MODULES_META } from '../data/modules';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  FileSpreadsheet, 
  Sparkles, 
  Layers, 
  Clock, 
  ShieldAlert,
  HelpCircle
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Hero Welcome Banner */}
      <div className="p-6 md:p-10 rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold tracking-wider text-blue-200 border border-white/20">
            <GraduationCap className="w-4 h-4 text-amber-300" />
            <span>Built for Complete Beginners with Engineering Backgrounds</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Financial Accounting Crash Course
          </h1>

          <p className="text-sm md:text-base text-blue-100 font-medium leading-relaxed">
            A visual, first-principles revision companion directly mapped to your course slides, Verdi and Windsurf exercise cases, and past examination papers. Master double-entry bookkeeping, statement connections, and cut-off adjustments with zero financial jargon.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to="/module/module-1"
              className="px-5 py-2.5 rounded-xl bg-white text-blue-900 font-bold text-xs sm:text-sm hover:bg-blue-50 transition shadow-md flex items-center space-x-2"
            >
              <span>Start Module 1: The Accounting Equation</span>
              <ArrowRight className="w-4 h-4 text-blue-700" />
            </Link>

            <Link
              to="/exam-mode"
              className="px-5 py-2.5 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white font-semibold text-xs sm:text-sm transition border border-purple-400/30 flex items-center space-x-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Final Revision & Exam Hub</span>
            </Link>
          </div>
        </div>

        {/* Decorative background circle */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      </div>

      {/* Recommended 5-Step Revision Workflow */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center space-x-2">
          <Compass className="w-4 h-4" />
          <span>How to Revise Tomorrow (5-Step Strategy)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-2">1</div>
            <div className="font-bold text-slate-800 dark:text-slate-200 mb-1">Study Concepts</div>
            <div className="text-slate-500 dark:text-slate-400">Read the Big Idea and visual diagrams from first principles.</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-2">2</div>
            <div className="font-bold text-slate-800 dark:text-slate-200 mb-1">Inspect Worked Example</div>
            <div className="text-slate-500 dark:text-slate-400">Observe how the 8-step exam answer structure applies to clean facts.</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-2">3</div>
            <div className="font-bold text-slate-800 dark:text-slate-200 mb-1">Take Module Quiz</div>
            <div className="text-slate-500 dark:text-slate-400">Attempt 10–15 questions; reveal explanations and marking guides.</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-2">4</div>
            <div className="font-bold text-slate-800 dark:text-slate-200 mb-1">Worksheet Bridge</div>
            <div className="text-slate-500 dark:text-slate-400">Open the original Excel case in Finder and apply the blank template.</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
            <div className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center mb-2">5</div>
            <div className="font-bold text-slate-800 dark:text-slate-200 mb-1">Final Exam Mode</div>
            <div className="text-slate-500 dark:text-slate-400">Consolidate formulas, rules, and bookmarked questions.</div>
          </div>
        </div>
      </div>

      {/* Course Map: 8 Modules Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-2">
            <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>The 8 Revision Modules</span>
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">Complete curriculum coverage</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MODULES_META.map((mod) => (
            <Link
              key={mod.id}
              to={`/module/${mod.id}`}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600/70 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center">
                    M{mod.number}
                  </span>
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400 dark:text-slate-500">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{mod.estimatedMinutes} min</span>
                    </span>
                    <span>•</span>
                    <span className="truncate max-w-[140px]">{mod.sourceBadge}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {mod.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                <span>Start revision</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Exam Structure Breakdown */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-sm space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-2">
          <ShieldAlert className="w-4 h-4" />
          <span>Real Exam Structure (2h 30m / 30 provisional points)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="font-bold text-amber-300 text-sm mb-1">Part 1: Questions (15 min)</div>
            <div className="text-slate-400 mb-2">5 points • Single correct choice / T-account reads</div>
            <p className="text-slate-300">
              Covers fundamental concepts: net income drivers, normal debit/credit balances, VAT returns, non-cash items, and inventory changes.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="font-bold text-blue-300 text-sm mb-1">Part 2: Rex Case (60 min)</div>
            <div className="text-slate-400 mb-2">10 points • Year-end Journal Entries</div>
            <p className="text-slate-300">
              End-of-period entries: prepaid insurance, detailed payroll calculation, cash discounts, asset purchases, and loan repayments with interest.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="font-bold text-purple-300 text-sm mb-1">Part 3: Beethoven Case (60 min)</div>
            <div className="text-slate-400 mb-2">15 points • Forecast Statements (BS + P&L + CFS)</div>
            <p className="text-slate-300">
              Full cycle double-entry: starting from opening balance sheet, processing 15 transactions, calculating CIT at 25%, and verifying consistency across all 3 statements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
