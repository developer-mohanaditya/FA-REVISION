import React from 'react';
import { AccountType } from '../../types';

interface TAccountEntry {
  desc?: string;
  amount: number | string;
}

interface TAccountProps {
  accountNumber?: string;
  accountName: string;
  type?: AccountType;
  debits: TAccountEntry[];
  credits: TAccountEntry[];
  closingBalance?: {
    side: 'debit' | 'credit';
    amount: number | string;
  };
}

export const TAccount: React.FC<TAccountProps> = ({
  accountNumber,
  accountName,
  type = 'asset',
  debits,
  credits,
  closingBalance
}) => {
  const headerColors: Record<string, string> = {
    asset: 'bg-blue-600 text-white',
    liability: 'bg-amber-600 text-white',
    equity: 'bg-purple-600 text-white',
    revenue: 'bg-emerald-600 text-white',
    expense: 'bg-rose-600 text-white'
  };

  return (
    <div className="my-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm max-w-md mx-auto">
      {/* Account Title */}
      <div className={`px-4 py-2 text-center font-bold text-sm flex items-center justify-center space-x-2 ${headerColors[type] || 'bg-slate-700 text-white'}`}>
        {accountNumber && <span className="text-xs opacity-80 font-mono">[{accountNumber}]</span>}
        <span>{accountName}</span>
      </div>

      {/* T-Chart Columns */}
      <div className="grid grid-cols-2 divide-x divide-slate-300 dark:divide-slate-700 text-xs">
        {/* Debit Column (Left) */}
        <div className="p-2.5 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 pb-1 border-b border-slate-200 dark:border-slate-800 flex justify-between">
            <span>Debit (Left)</span>
            <span className="text-[10px] text-slate-400">+{type === 'asset' || type === 'expense' ? ' (Inc)' : ' (Dec)'}</span>
          </div>
          <div className="space-y-1.5 min-h-[70px]">
            {debits.map((d, i) => (
              <div key={i} className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span className="text-slate-500 dark:text-slate-400 text-[11px]">{d.desc || '—'}</span>
                <span className="font-mono font-medium">{typeof d.amount === 'number' ? `€ ${d.amount.toLocaleString()}` : d.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Credit Column (Right) */}
        <div className="p-2.5 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 pb-1 border-b border-slate-200 dark:border-slate-800 flex justify-between">
            <span>Credit (Right)</span>
            <span className="text-[10px] text-slate-400">+{type === 'liability' || type === 'equity' || type === 'revenue' ? ' (Inc)' : ' (Dec)'}</span>
          </div>
          <div className="space-y-1.5 min-h-[70px]">
            {credits.map((c, i) => (
              <div key={i} className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span className="text-slate-500 dark:text-slate-400 text-[11px]">{c.desc || '—'}</span>
                <span className="font-mono font-medium">{typeof c.amount === 'number' ? `€ ${c.amount.toLocaleString()}` : c.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Balance (Solde) */}
      {closingBalance && (
        <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-800/50 flex justify-between text-xs font-semibold">
          <span className="text-slate-600 dark:text-slate-400">Ending Balance (CB / Solde):</span>
          <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">
            {closingBalance.side === 'debit' ? 'Debit Solde: ' : 'Credit Solde: '}
            {typeof closingBalance.amount === 'number' ? `€ ${closingBalance.amount.toLocaleString()}` : closingBalance.amount}
          </span>
        </div>
      )}
    </div>
  );
};
