import React, { useState } from 'react';
import { WorksheetBridge } from '../../types';
import { FileSpreadsheet, Copy, Check, FolderOpen } from 'lucide-react';

interface Props {
  bridge: WorksheetBridge;
}

export const WorksheetBridgeCard: React.FC<Props> = ({ bridge }) => {
  const [copied, setCopied] = useState(false);

  const templateText = `STRUCTURED WORK TEMPLATE
Exercise: ${bridge.exerciseTitle}
---------------------------------------------
Given: 
Accounting issue: 
Relevant rule / concept: 
Method / Steps: 
Calculation / Journal Entry: 
Effect on profit (I/S): 
Effect on financial position (B/S): 
Final answer: 
---------------------------------------------`;

  const handleCopy = () => {
    navigator.clipboard.writeText(templateText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-emerald-50/50 dark:bg-emerald-950/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Worksheet Bridge & Case Connection
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              {bridge.exerciseTitle}
            </h3>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-6">
        {/* Context and File Locations */}
        <div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
            {bridge.context}
          </p>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
            <div className="font-bold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
              <FolderOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Original Course Files (Read-Only):</span>
            </div>
            <div className="space-y-1 pl-5 font-mono text-[11px] text-slate-600 dark:text-slate-300">
              {bridge.exerciseFiles.map((f, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 italic">
              ℹ️ {bridge.finderGuidance}
            </div>
          </div>
        </div>

        {/* 8-Step Problem Solving Checklist */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Exam Protocol: 8-Step Checklist for this Exercise
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            {bridge.stepChecklist.map((step, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-start space-x-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reusable Structured Work Template */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Reusable Answer-Writing Template (Copy & Fill)
            </h4>
            <button
              onClick={handleCopy}
              className="flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Template!' : 'Copy Template'}</span>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto space-y-1">
            <div><span className="text-slate-400">Given:</span> <span>[State transaction amounts, dates, and terms]</span></div>
            <div><span className="text-slate-400">Accounting issue:</span> <span>[Classification, timing, or valuation question]</span></div>
            <div><span className="text-slate-400">Relevant rule:</span> <span>[PCG rule, formula, or standard criteria]</span></div>
            <div><span className="text-slate-400">Method:</span> <span>[Order of calculation / recognition steps]</span></div>
            <div><span className="text-slate-400">Journal entry:</span> <span>[Dr Account # / Cr Account # with amounts]</span></div>
            <div><span className="text-slate-400">Effect on profit:</span> <span>[Revenue / Expense impact in P&L]</span></div>
            <div><span className="text-slate-400">Effect on financial position:</span> <span>[Asset / Liability / Equity impact on B/S]</span></div>
            <div><span className="text-slate-400">Final answer:</span> <span>[Clear concluding summary sentence]</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};
