import React, { useState } from 'react';
import { useReviewMarkers } from '../hooks/useLocalStorage';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Scale, 
  FileText, 
  ShieldAlert, 
  CheckCircle2, 
  GitFork, 
  Clock, 
  RotateCcw,
  Sparkles,
  Bookmark
} from 'lucide-react';
import { MODULES_META } from '../data/modules';
import { JournalEntryTable } from '../components/visual/JournalEntry';

export const ExamMode: React.FC = () => {
  const { markedQuestionIds, removeMark } = useReviewMarkers();
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-12">
      {/* Exam Hub Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-purple-800 via-indigo-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
          <BookOpen className="w-4 h-4" />
          <span>Final Exam Revision Hub</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">
          High-Yield Exam Mode & Review Center
        </h1>
        <p className="text-sm md:text-base text-purple-200 mt-2 max-w-2xl leading-relaxed">
          The ultimate consolidation center for the 2.5-hour Financial Accounting exam. Core decision trees, master comparison tables, debit/credit cheat sheets, formulas, and rapid-recall cards.
        </p>

        {markedQuestionIds.length > 0 && (
          <div className="mt-4 inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-semibold">
            <Bookmark className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>You have {markedQuestionIds.length} bookmarked question(s) marked for final review.</span>
            <Link to="/review-later" className="underline font-bold hover:text-white ml-2">
              Review them now →
            </Link>
          </div>
        )}
      </div>

      {/* 1. HOW TO ATTACK ANY ACCOUNTING QUESTION: 9-STEP DECISION TREE */}
      <section className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <GitFork className="w-4 h-4" />
          <span>1. The Universal Exam Decision Tree: How to Attack Any Question</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          9-Step Question Solving Framework
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          Whenever you encounter a transaction in Part 2 (Rex case) or Part 3 (Beethoven case), apply these questions in strict chronological order:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
          {[
            { step: 1, title: 'What happened economically?', desc: 'Identify the underlying event: goods delivered, services performed, loan drawn, cash collected, or asset purchased.' },
            { step: 2, title: 'When did it occur?', desc: 'Check dates carefully. Is it before or after year-end close (31/12)? Does the transaction span across two fiscal years?' },
            { step: 3, title: 'Which accounts are affected?', desc: 'Every transaction affects at least 2 accounts. Name them: Bank, Receivables, Payables, Sales, Expense, etc.' },
            { step: 4, title: 'What category is each account?', desc: 'Classify into: Asset (+ Dr / - Cr), Liability (+ Cr / - Dr), Equity (+ Cr / - Dr), Expense (+ Dr / - Cr), or Revenue (+ Cr / - Dr).' },
            { step: 5, title: 'Cash vs Accrual vs Non-Cash?', desc: 'Does cash move today? Or is it a receivable/payable credit? Or a non-cash adjustment (depreciation, impairment, provision)?' },
            { step: 6, title: 'Which formula or rule applies?', desc: 'Straight-line pro-rata? 20% VAT on ex-tax base? 25% CIT? Recoverable amount vs NBV?' },
            { step: 7, title: 'Prepare the Journal Entry', desc: 'Verify that Total Debits = Total Credits. Never combine accounts without matching sums.' },
            { step: 8, title: 'Check Statement Consistency', desc: 'Did net income in P&L match change in Equity on Balance Sheet? Does cash in CFS match cash in B/S?' },
            { step: 9, title: 'State the Exam Conclusion', desc: 'Write the explicit answer on the answer sheet line with calculation details (dc line in exam papers).' }
          ].map(s => (
            <div key={s.step} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="flex items-center space-x-2 font-bold text-slate-900 dark:text-slate-100">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] flex-shrink-0">
                  {s.step}
                </span>
                <span>{s.title}</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 pl-7 text-[11px] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. THE MASTER "DO NOT CONFUSE" TABLE */}
      <section className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <ShieldAlert className="w-4 h-4" />
          <span>2. Master "Do Not Confuse" Table: 8 Core Course Distinctions</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          The 8 Traps That Cost Students Marks
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                <th className="py-2.5 px-3">Term A</th>
                <th className="py-2.5 px-3">Term B</th>
                <th className="py-2.5 px-3">The Critical Conceptual Difference</th>
                <th className="py-2.5 px-3">Concrete Course Scenario</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {[
                { a: 'Profit (Résultat)', b: 'Cash / Bank (Trésorerie)', diff: 'Profit measures net economic wealth created (Revenues – Expenses). Cash is liquidity in the bank account.', ex: 'A credit sale of €100 generates €100 of profit immediately, but zero cash until collected next month.' },
                { a: 'Expense (Charge)', b: 'Asset (Actif)', diff: 'Expenses are consumed within the fiscal period with no future benefits. Assets provide economic utility over multiple future periods.', ex: 'Buying printer paper (€50) is an expense. Buying a heavy delivery vehicle (€40,000) is an asset.' },
                { a: 'VAT Collected (44571)', b: 'Company Revenue (70)', diff: 'VAT collected on sales belongs to the French State, not the enterprise. It is a debt (liability), never revenue.', ex: 'Selling for €100 + €20 VAT = €100 sales revenue, €20 VAT payable liability.' },
                { a: 'Depreciation (Amortissement)', b: 'Cash Outflow (Décaissement)', diff: 'Depreciation is an internal non-cash accounting allocation of an asset cost over time. No money leaves the bank account.', ex: 'Annual computer depreciation of €200 reduces profit but leaves bank balance 100% untouched.' },
                { a: 'Impairment (Dépréciation)', b: 'Depreciation (Amortissement)', diff: 'Depreciation is systematic and irreversible. Impairment is unscheduled, reflects market decline, and is reversible.', ex: 'A patent is amortized systematically; if trade receivable customer goes bankrupt, we record an impairment.' },
                { a: 'Reserves (Réserves)', b: 'Treasury / Cash (Trésorerie)', diff: 'Reserves are part of shareholder equity (past undistributed profits). They cannot be spent to pay invoices.', ex: 'A company with €500,000 in reserves and €0 in the bank cannot buy supplies without a loan.' },
                { a: 'Provision (Provision)', b: 'Liability / Debt (Dette)', diff: 'A debt has fixed maturity and exact amount. A provision is an obligation where timing or amount is estimated.', ex: 'Supplier invoice = trade debt (€1,200). Pending legal lawsuit by former employee = provision (€10,000 estimated).' },
                { a: 'Taxable Income (Résultat fiscal)', b: 'Accounting Profit (Résultat comptable)', diff: 'Accounting profit follows PCG standards; Taxable income adjusts for tax-deductible caps and administrative penalties.', ex: 'Traffic fines paid (€500) are expenses in P&L, but added back to compute taxable income.' }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                  <td className="py-2.5 px-3 font-bold text-blue-600 dark:text-blue-400">{row.a}</td>
                  <td className="py-2.5 px-3 font-bold text-purple-600 dark:text-purple-400">{row.b}</td>
                  <td className="py-2.5 px-3 font-medium text-slate-800 dark:text-slate-200">{row.diff}</td>
                  <td className="py-2.5 px-3 text-slate-500 dark:text-slate-400 italic">{row.ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. ESSENTIAL EXAM FORMULAS CHEAT SHEET */}
      <section className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <Scale className="w-4 h-4" />
          <span>3. Complete Exam Formulas Reference</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Formulas Required on the 2.5-Hour Exam
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {[
            { name: 'Accounting Equation', formula: 'Assets = Equity + Liabilities', note: 'Every single journal entry must keep this equality strictly balanced.' },
            { name: 'Accounting Net Profit', formula: 'Net Income = Revenues – Expenses', note: 'P&L formation. Reconciles with Net Income line in Balance Sheet equity.' },
            { name: 'VAT Settlement', formula: 'VAT Payable = VAT Collected – Deductible VAT', note: 'If negative, it creates a VAT Credit asset carried forward to next month.' },
            { name: 'Straight-Line Depreciation', formula: 'Annual Charge = Depreciable Base / Useful Life × (Days / 360 or Months / 12)', note: 'Depreciable base = Acquisition cost – Residual value (if any).' },
            { name: 'Net Book Value (NBV)', formula: 'NBV = Gross Acquisition Cost – Accumulated Depreciation – Prior Impairment', note: 'Presented in the active side of the balance sheet as net carrying value.' },
            { name: 'Asset Disposal Gain / Loss', formula: 'Net Gain/Loss = Proceeds from Disposal – Net Book Value (NBV)', note: 'Under French GAAP, gross proceeds go to Account 775, NBV goes to Account 675.' },
            { name: 'Cost of Goods Sold (Merchandise)', formula: 'COGS = Purchases + (Beginning Inventory – Ending Inventory)', note: 'Purchased inventories: stock variation = BI – CI (expense reduction).' },
            { name: 'Corporate Income Tax (CIT)', formula: 'CIT = Taxable Income × 25%', note: 'French standard corporate tax rate of 25%. Booked in Account 69 / Account 44.' },
            { name: 'Distributable Profit', formula: 'Distributable = Net Result + Retained Earnings – Legal/Statutory Reserves', note: 'Can only distribute dividends if Distributable Profit > 0.' },
            { name: 'Cash Flow Statement Reconciliation', formula: 'Closing Cash = Opening Cash + Operating CF + Investing CF + Financing CF', note: 'CFS closing cash must exactly equal Balance Sheet cash (Bank + Petty Cash).' }
          ].map((f, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-slate-900 dark:text-slate-100">{f.name}</span>
              <div className="font-mono font-bold text-blue-600 dark:text-blue-400 p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                {f.formula}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">{f.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ESSENTIAL JOURNAL ENTRY PATTERNS CHEAT SHEET */}
      <section className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <FileText className="w-4 h-4" />
          <span>4. Master Journal Entry Patterns</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          The 6 Recurring Journal Entry Patterns in Rex & Beethoven Cases
        </h2>

        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
              A. Credit Sale with 20% VAT
            </h4>
            <JournalEntryTable
              entries={[
                { category: 'Asset', accountNumber: '411', accountName: 'Trade Receivables (Customers)', debit: 120 },
                { category: 'Revenue', accountNumber: '707', accountName: 'Sales Revenue (excl. VAT)', credit: 100 },
                { category: 'Liability', accountNumber: '44571', accountName: 'VAT Collected', credit: 20 }
              ]}
              explanation="Customers owe the gross VAT-inclusive amount; enterprise recognizes net sales revenue; VAT is owed to the State."
            />
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
              B. Payroll Recognition (Gross 100, Employee Deductions 20, Employer Share 40)
            </h4>
            <JournalEntryTable
              entries={[
                { category: 'Expense', accountNumber: '641', accountName: 'Wages & Salaries Expense (Gross)', debit: 100 },
                { category: 'Expense', accountNumber: '645', accountName: 'Social Security Expenses (Employer Share)', debit: 40 },
                { category: 'Liability', accountNumber: '421', accountName: 'Personnel – Remuneration Payable (Net)', credit: 80 },
                { category: 'Liability', accountNumber: '431', accountName: 'Social Security Bodies Payable (20 + 40)', credit: 60 }
              ]}
              explanation="Total personnel expense = 140 (100 gross + 40 employer). Net salary paid = 80. Social bodies get 60 (20 employee + 40 employer)."
            />
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
              C. Year-End Prepaid Expense (Charge constatée d'avance)
            </h4>
            <JournalEntryTable
              entries={[
                { category: 'Asset', accountNumber: '486', accountName: 'Prepaid Expenses', debit: 600 },
                { category: 'Expense', accountNumber: '616', accountName: 'Insurance / Operating Expense', credit: 600 }
              ]}
              explanation="Reduces Year N expense for the fraction covering Year N+1; recognized as a short-term asset on the balance sheet."
            />
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
              D. Depreciation Allocation (Dotation aux amortissements)
            </h4>
            <JournalEntryTable
              entries={[
                { category: 'Expense', accountNumber: '681', accountName: 'Depreciation Expense', debit: 2500 },
                { category: 'Asset', accountNumber: '281', accountName: 'Accumulated Depreciation (Contra-Asset)', credit: 2500 }
              ]}
              explanation="Non-cash operating expense reducing Year N profit; credit contra-asset reduces net book value of PP&E."
            />
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
              E. Corporate Income Tax (25% on Year N Profit)
            </h4>
            <JournalEntryTable
              entries={[
                { category: 'Expense', accountNumber: '695', accountName: 'Corporate Income Tax Expense', debit: 10000 },
                { category: 'Liability', accountNumber: '444', accountName: 'Income Tax Payable', credit: 10000 }
              ]}
              explanation="Recorded as Year N expense; settled in cash to the tax authorities in Year N+1."
            />
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">
              F. Profit Distribution in Year N+1 (May AGM)
            </h4>
            <JournalEntryTable
              entries={[
                { category: 'Equity', accountNumber: '120', accountName: 'Profit for Year N', debit: 50000 },
                { category: 'Equity', accountNumber: '110', accountName: 'Retained Earnings / Reserves', credit: 30000 },
                { category: 'Liability', accountNumber: '457', accountName: 'Dividends Payable', credit: 20000 }
              ]}
              explanation="Reclassifies Year N net profit out of Account 120 into permanent Reserves (Account 110) and Dividend debt (Account 457)."
            />
          </div>
        </div>
      </section>

      {/* 5. 3-HOUR EXAM DAY CHECKLIST */}
      <section className="p-6 md:p-8 rounded-3xl bg-slate-900 text-white shadow-sm space-y-4">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-400">
          <Clock className="w-4 h-4" />
          <span>5. Final 2h 30m Exam Protocol & Checklist</span>
        </div>
        <h2 className="text-xl font-bold text-white">
          Tactical Time Allocation & Sanity Checks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
            <div className="font-bold text-amber-300 text-sm">Phase 1: First 15 Mins</div>
            <ul className="space-y-1 text-slate-300">
              <li>• Read Part 1 MCQ carefully; answer the 10 conceptual items directly.</li>
              <li>• Detach the Appendix Chart of Accounts.</li>
              <li>• Scan the Beethoven case opening balance sheet values.</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
            <div className="font-bold text-blue-300 text-sm">Phase 2: 60 Mins (Rex Case)</div>
            <ul className="space-y-1 text-slate-300">
              <li>• Complete all journal entries in the table.</li>
              <li>• Write calculation details on the "dc" line.</li>
              <li>• Check that VAT (20%) is calculated on ex-tax amounts only.</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
            <div className="font-bold text-purple-300 text-sm">Phase 3: 60 Mins (Beethoven)</div>
            <ul className="space-y-1 text-slate-300">
              <li>• Process transactions 1–15 through double-entry.</li>
              <li>• Calculate 25% CIT on profit before tax.</li>
              <li>• Check: Total Assets = Total Equity + Liabilities.</li>
              <li>• Check: CFS closing cash = B/S closing cash.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
