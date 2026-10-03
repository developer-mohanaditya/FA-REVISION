import React from 'react';
import { ModuleContent } from '../types';
import { AccountingEquation } from '../components/visual/AccountingEquation';
import { TAccount } from '../components/visual/TAccount';
import { JournalEntryTable } from '../components/visual/JournalEntry';
import { ELI10Card } from '../components/module/ELI10Card';
import { WorkedExampleCard } from '../components/module/WorkedExample';
import { MemoryCardSection } from '../components/module/MemoryCard';
import { QuizEngine } from '../components/quiz/QuizEngine';
import { WorksheetBridgeCard } from '../components/module/WorksheetBridge';
import { OneMinuteRecapSection } from '../components/module/OneMinuteRecap';
import { 
  Clock, 
  Target, 
  Compass, 
  HelpCircle, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  module: ModuleContent;
}

export const ModulePage: React.FC<Props> = ({ module }) => {
  return (
    <div className="space-y-12">
      {/* 1. THE BIG IDEA (Header & Objectives) */}
      <section id="big-idea" className="scroll-mt-20">
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
          
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pt-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
              Module {module.number} of 8
            </span>
            <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{module.estimatedMinutes} mins revision</span>
              </span>
              <span className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                {module.sourceBadge}
              </span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            {module.title}
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 font-medium max-w-3xl mb-6">
            {module.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            {/* Learning Objectives */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center space-x-1.5">
                <Target className="w-4 h-4 text-blue-500" />
                <span>Learning Objectives:</span>
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {module.objectives.map((obj: string, i: number) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When you will use this */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1 flex items-center space-x-1.5">
                  <Compass className="w-4 h-4 text-purple-500" />
                  <span>You will use this when:</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {module.youWillUseThisWhen}
                </p>
              </div>
              <div className="mt-3 pt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                <span>Direct exam anchor: Handout questions & Final Quiz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY IT MATTERS (Business Relevance & Statements) */}
      <section id="why-it-matters" className="scroll-mt-20">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
            <TrendingUp className="w-4 h-4" />
            <span>2. Why It Matters: Business Purpose & Statement Impact</span>
          </div>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-6">
            {module.whyItMatters.economicPurpose}
          </p>

          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
            Financial Statement Relevance
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {module.whyItMatters.statementImpacts.map((stmt: { statement: string; impact: string }, idx: number) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-bold text-slate-900 dark:text-slate-100 block mb-1">
                  {stmt.statement}
                </span>
                <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {stmt.impact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (Visually Structured Explanations + Sub-section ELI10) */}
      <section id="how-it-works" className="scroll-mt-20 space-y-6">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Layers className="w-4 h-4" />
          <span>3. How It Works: The Accounting Mechanics</span>
        </div>

        {module.howItWorks.map((section: any, idx: number) => (
          <div key={section.id} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-2">
              <span className="text-blue-600 dark:text-blue-400 font-mono text-sm">3.{idx + 1}</span>
              <span>{section.title}</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {section.explanation}
            </p>

            {/* Bullets if any */}
            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <ul className="space-y-1.5 pl-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {section.bulletPoints.map((pt: string, pidx: number) => (
                  <li key={pidx} className="flex items-start space-x-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Diagrams according to type */}
            {section.diagramType === 'accounting-equation' && section.diagramData && (
              <AccountingEquation {...section.diagramData} />
            )}

            {section.diagramType === 't-account' && section.diagramData && (
              <TAccount {...section.diagramData} />
            )}

            {section.diagramType === 'journal' && section.diagramData && (
              <JournalEntryTable entries={section.diagramData} />
            )}

            {/* Subsection ELI10 Card if specified */}
            {section.eli10 && (
              <ELI10Card card={section.eli10} />
            )}
          </div>
        ))}
      </section>

      {/* 4. HOW TO SOLVE AN EXAM-STYLE PROBLEM */}
      <section id="worked-example" className="scroll-mt-20">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
          <BookOpen className="w-4 h-4" />
          <span>4. How To Solve An Exam-Style Problem</span>
        </div>
        {module.workedExamples.map((example: any) => (
          <WorkedExampleCard key={example.id} example={example} />
        ))}
      </section>

      {/* 5. WHAT MUST I REMEMBER? (High-Yield Cards) */}
      <section id="what-must-i-remember" className="scroll-mt-20">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
          <BookOpen className="w-4 h-4" />
          <span>5. What Must I Remember? (High-Yield Revision)</span>
        </div>
        <MemoryCardSection memory={module.whatMustIRemember} />
      </section>

      {/* 6. EXPLAIN IT LIKE I'M 10 (Module-Level Simplification) */}
      <section id="explain-it-like-im-10" className="scroll-mt-20">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>6. Module Summary: Explain It Like I'm 10</span>
        </div>
        <ELI10Card card={module.moduleLevelEli10} />
      </section>

      {/* 7. CHECK MY UNDERSTANDING (Interactive Quiz Engine) */}
      <section id="check-my-understanding" className="scroll-mt-20">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>7. Check My Understanding ({module.quiz.length} Questions)</span>
        </div>
        <QuizEngine questions={module.quiz} moduleId={module.id} />
      </section>

      {/* 8. WORKSHEET BRIDGE (Exercises and templates) */}
      <section id="worksheet-bridge" className="scroll-mt-20">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
          <FileSpreadsheet className="w-4 h-4" />
          <span>8. Worksheet Bridge: Original Cases & Reusable Template</span>
        </div>
        <WorksheetBridgeCard bridge={module.worksheetBridge} />
      </section>

      {/* 9. ONE-MINUTE RECAP */}
      <section id="one-minute-recap" className="scroll-mt-20">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          <Clock className="w-4 h-4" />
          <span>9. One-Minute Recap</span>
        </div>
        <OneMinuteRecapSection recap={module.recap} />

        {/* Next Module Navigation Link */}
        <div className="mt-8 flex justify-between items-center p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          {module.number > 1 ? (
            <Link
              to={`/module/module-${module.number - 1}`}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600"
            >
              ← Previous: Module {module.number - 1}
            </Link>
          ) : <div />}

          {module.number < 8 ? (
            <Link
              to={`/module/module-${module.number + 1}`}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition shadow-sm"
            >
              <span>Next: Module {module.number + 1}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/exam-mode"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm transition shadow-sm"
            >
              <span>Go to Final Revision & Exam Mode</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};
