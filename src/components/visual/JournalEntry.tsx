import React from 'react';
import { JournalEntryLine } from '../../types';
import { Badge } from '../ui/Badge';

interface JournalEntryProps {
  date?: string;
  wording?: string;
  entries: JournalEntryLine[];
  explanation?: string;
}

export const JournalEntryTable: React.FC<JournalEntryProps> = ({
  date,
  wording,
  entries,
  explanation
}) => {
  const totalDebit = entries.reduce((acc, curr) => {
    const val = typeof curr.debit === 'number' ? curr.debit : parseFloat(String(curr.debit || '0').replace(/[^0-9.-]+/g, '')) || 0;
    return acc + val;
  }, 0);

  const totalCredit = entries.reduce((acc, curr) => {
    const val = typeof curr.credit === 'number' ? curr.credit : parseFloat(String(curr.credit || '0').replace(/[^0-9.-]+/g, '')) || 0;
    return acc + val;
  }, 0);

  const isBalanced = Math.abs(totalDebit - totalCredit) < 0.01 && totalDebit > 0;

  return (
    <div className="my-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
      {(wording || date) && (
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex flex-wrap justify-between items-center text-xs gap-2">
          <span className="font-semibold text-slate-800 dark:text-slate-200">{wording || 'Journal Entry'}</span>
          {date && <span className="text-slate-500 dark:text-slate-400 font-mono">{date}</span>}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="bg-slate-100/70 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-800">
              <th className="py-2 px-3 w-16">Class</th>
              <th className="py-2 px-3 w-20">Account #</th>
              <th className="py-2 px-3">Account Title / Wording</th>
              <th className="py-2 px-3 text-right w-24">Debit (€)</th>
              <th className="py-2 px-3 text-right w-24">Credit (€)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono">
            {entries.map((item, idx) => {
              const isCredit = !!item.credit && !item.debit;
              return (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="py-2.5 px-3">
                    {item.category && (
                      <Badge
                        type={item.category.toLowerCase() as any}
                        size="sm"
                        className="font-sans"
                      >
                        {item.category.slice(0, 3)}
                      </Badge>
                    )}
                  </td>
                  <td className="py-2.5 px-3 text-slate-500 font-semibold">{item.accountNumber || '—'}</td>
                  <td className={`py-2.5 px-3 font-sans ${isCredit ? 'pl-8 text-slate-700 dark:text-slate-300' : 'font-medium text-slate-900 dark:text-slate-100'}`}>
                    {item.accountName}
                  </td>
                  <td className="py-2.5 px-3 text-right font-semibold text-blue-600 dark:text-blue-400">
                    {item.debit !== undefined && item.debit !== '' ? (typeof item.debit === 'number' ? item.debit.toLocaleString() : item.debit) : '—'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-semibold text-amber-600 dark:text-amber-400">
                    {item.credit !== undefined && item.credit !== '' ? (typeof item.credit === 'number' ? item.credit.toLocaleString() : item.credit) : '—'}
                  </td>
                </tr>
              );
            })}
          </tbody>
          {totalDebit > 0 && (
            <tfoot>
              <tr className="bg-slate-50/80 dark:bg-slate-800/60 font-bold border-t border-slate-200 dark:border-slate-800 text-xs">
                <td colSpan={3} className="py-2 px-3 text-right font-sans text-slate-600 dark:text-slate-400">
                  Total
                </td>
                <td className="py-2 px-3 text-right text-blue-600 dark:text-blue-400 font-mono">
                  {totalDebit.toLocaleString()}
                </td>
                <td className="py-2 px-3 text-right text-amber-600 dark:text-amber-400 font-mono">
                  {totalCredit.toLocaleString()}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      {explanation && (
        <div className="p-3 bg-slate-50/60 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 italic">
          💡 {explanation}
        </div>
      )}
    </div>
  );
};
