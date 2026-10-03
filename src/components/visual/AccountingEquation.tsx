import React from 'react';
import { ArrowRight, Equal } from 'lucide-react';

interface EquationProps {
  assets: number | string;
  equity: number | string;
  liabilities: number | string;
  assetsBreakdown?: { name: string; amount: string | number }[];
  equityBreakdown?: { name: string; amount: string | number }[];
  liabBreakdown?: { name: string; amount: string | number }[];
  caption?: string;
}

export const AccountingEquation: React.FC<EquationProps> = ({
  assets,
  equity,
  liabilities,
  assetsBreakdown,
  equityBreakdown,
  liabBreakdown,
  caption
}) => {
  return (
    <div className="my-6 p-5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="text-center font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
        Fundamental Accounting Equation
      </div>

      <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center text-center">
        {/* ASSETS */}
        <div className="md:col-span-5 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border-2 border-blue-200 dark:border-blue-800/80">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">Assets (Active)</span>
            <span className="text-xs px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold">What is owned & controlled</span>
          </div>
          <div className="text-2xl font-black text-blue-700 dark:text-blue-300 my-2">
            {typeof assets === 'number' ? `€ ${assets.toLocaleString()}` : assets}
          </div>
          {assetsBreakdown && assetsBreakdown.length > 0 && (
            <div className="mt-2 pt-2 border-t border-blue-200 dark:border-blue-900/50 space-y-1 text-left text-xs text-blue-900 dark:text-blue-200">
              {assetsBreakdown.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="font-semibold">{item.amount}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* EQUAL SIGN */}
        <div className="md:col-span-1 flex justify-center py-2 md:py-0">
          <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300 shadow-sm">
            <Equal className="w-5 h-5" />
          </div>
        </div>

        {/* LIABILITIES + EQUITY */}
        <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* EQUITY */}
          <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border-2 border-purple-200 dark:border-purple-800/80">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 mb-1">
              Equity (Capitaux Propres)
            </div>
            <div className="text-xl font-bold text-purple-700 dark:text-purple-300 my-1">
              {typeof equity === 'number' ? `€ ${equity.toLocaleString()}` : equity}
            </div>
            <div className="text-[11px] text-purple-600 dark:text-purple-300">Capital + Retained Profits</div>
            {equityBreakdown && (
              <div className="mt-2 pt-2 border-t border-purple-200 dark:border-purple-900/50 space-y-1 text-left text-xs text-purple-900 dark:text-purple-200">
                {equityBreakdown.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.amount}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* LIABILITIES / DEBTS */}
          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-200 dark:border-amber-800/80">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 mb-1">
              Liabilities & Debts (Dettes)
            </div>
            <div className="text-xl font-bold text-amber-700 dark:text-amber-300 my-1">
              {typeof liabilities === 'number' ? `€ ${liabilities.toLocaleString()}` : liabilities}
            </div>
            <div className="text-[11px] text-amber-600 dark:text-amber-300">Owed to third parties</div>
            {liabBreakdown && (
              <div className="mt-2 pt-2 border-t border-amber-200 dark:border-amber-900/50 space-y-1 text-left text-xs text-amber-900 dark:text-amber-200">
                {liabBreakdown.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.amount}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {caption && (
        <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400 italic">
          {caption}
        </p>
      )}
    </div>
  );
};
