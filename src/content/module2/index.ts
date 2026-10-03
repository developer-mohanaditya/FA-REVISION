import { ModuleContent } from '../../types';

export const module2Data: ModuleContent = {
  id: 'module-2',
  number: 2,
  title: 'Financial Statements & Accounting Principles',
  subtitle: 'The 4 mandatory annual reporting documents and the ground rules of French PCG accounting.',
  sourceBadge: 'Based on Session 1 slides (pp. 29–43)',
  estimatedMinutes: 35,
  objectives: [
    'Understand the purpose and components of the 4 financial statements: Balance Sheet, Income Statement, Cash Flow Statement, and Notes (Annex).',
    'Structure the French standard Balance Sheet: Active (Fixed + Current) vs Passive (Equity + Provisions + Debts).',
    'Structure the French standard Income Statement: Operating, Financial, and Exceptional results.',
    'Master the 8 core accounting principles: Entity, Periodicity, Independence of Fiscal Years, Going Concern, Monetary Quantification, Prudence/Caution, Historical Cost, and Consistency (Permanence of Methods).',
    'Trace how Net Income (Profit/Loss) forms in the Income Statement and flows directly into Balance Sheet Equity.'
  ],
  youWillUseThisWhen: 'You need to read an annual report, calculate operating profit vs financial profit, distinguish exceptional items from recurring business, and ensure revenue and expense cut-offs respect the Independence of Fiscal Years.',
  whyItMatters: {
    economicPurpose: 'Financial statements translate millions of daily economic operations into a structured, audit-ready summary of financial position, economic performance, and cash flows for investors, tax inspectors, and banks.',
    statementImpacts: [
      {
        statement: 'Balance Sheet (Bilan)',
        impact: 'A cumulative wealth snapshot at closing date (usually 31/12). Shows what the business owns (Assets) and what it owes (Equity + Liabilities).'
      },
      {
        statement: 'Income Statement (Compte de résultat)',
        impact: 'A flow film over the 12-month period. Calculates economic creation (Revenues) minus consumption (Expenses) = Net Income.'
      },
      {
        statement: 'The Annex (Notes)',
        impact: 'Mandatory explanatory notes detailing valuation methods, depreciation schedules, component breakdowns, and off-balance sheet commitments.'
      }
    ]
  },
  howItWorks: [
    {
      id: 'm2-s1',
      title: 'The French Balance Sheet: Active vs Passive',
      explanation: `Under French PCG standards, the Balance Sheet presents two balanced sides:
• ACTIVE (Left): 
  - Fixed Assets (Actif Immobilisé): Intangible (patents, software), Tangible (land, buildings, equipment), Financial (shares, loans).
  - Current Assets (Actif Circulant): Inventories, Trade Receivables, Marketable Securities, Bank & Cash.
• PASSIVE (Right):
  - Equity (Capitaux Propres): Share capital, Reserves, Retained Earnings, Net Result of the year.
  - Provisions (Provisions pour risques et charges): Uncertain future liabilities.
  - Debts (Dettes): Financial borrowings (bank loans), Operating debts (Suppliers, VAT payable, Social security).`,
      bulletPoints: [
        'Active accounts are sorted by increasing liquidity (from illiquid fixed assets down to immediate cash).',
        'Passive accounts are sorted by increasing exigibility (from permanent shareholder equity down to short-term debts).'
      ],
      eli10: {
        id: 'eli10-m2-bs',
        title: 'The Freeze-Frame Photo',
        concept: 'The Balance Sheet as a Snapshot',
        analogy: 'Imagine freezing time on New Year’s Eve at midnight and dumping everything in your room on the floor. On the left side, you put your laptop, bicycle, and piggy bank. On the right side, you write down whose money paid for them.',
        explanation: 'The Balance Sheet does not care how busy your year was. It only shows what exists at that exact frozen moment. If you look at it the next day, the numbers might change.',
        keyDistinction: 'The Balance Sheet is a snapshot at a single point in time, unlike the Income Statement which measures an entire year.',
        reconnect: 'In financial statements, the Balance Sheet always states "As of December 31, Year N".'
      }
    },
    {
      id: 'm2-s2',
      title: 'The 3 Tiers of the French Income Statement',
      explanation: `Under French GAAP, the Income Statement categorizes operations into 3 distinct economic levels:
1. Operating Result (Résultat d’exploitation):
   Operating Revenues (Sales, Subsidies) – Operating Expenses (Purchases, External services, Taxes, Salaries, Depreciation)
   = Core business operational profitability!
2. Financial Result (Résultat financier):
   Financial Revenues (Interest received, Dividends) – Financial Expenses (Interest on loans, Discounts granted)
3. Exceptional Result (Résultat exceptionnel):
   Exceptional Revenues (Proceeds from selling PP&E) – Exceptional Expenses (Net book value of scrapped assets, Fines)

Net Profit Before Tax = Operating Result + Financial Result + Exceptional Result.
Net Profit = Net Profit Before Tax – Corporate Income Tax (25%).`,
      bulletPoints: [
        'Operating Profit shows whether the core enterprise model makes money before interest and tax.',
        'Financial Profit reflects the debt structure and financing costs.',
        'Exceptional Profit isolates non-recurring events so analysts can see underlying performance.'
      ],
      eli10: {
        id: 'eli10-m2-is',
        title: 'The Full-Length Movie',
        concept: 'The Income Statement as a Video',
        analogy: 'If the Balance Sheet is a still photograph, the Income Statement is a movie of everything you earned and spent between January 1 and December 31.',
        explanation: 'It adds up all your lemonade sales over the summer, subtracts the lemons, sugar, cups, and helper pay, and tells you: "This year, your stand generated €250 of profit."',
        keyDistinction: 'Expenses in the Income Statement represent wealth consumed during the year, not just cash paid.',
        reconnect: 'At year-end, the final profit figure moves into the Balance Sheet under Equity.'
      }
    },
    {
      id: 'm2-s3',
      title: 'The 8 Fundamental Accounting Principles',
      explanation: `French accounting rests on a rigid conceptual framework to guarantee a "True and Fair View" (Image fidèle):
1. Entity Principle: The company is legally separate from its owners. Personal owner expenses are never recorded in company books.
2. Periodicity & Independence of Fiscal Years: Economic life is divided into 12-month periods. Revenues and expenses must be assigned strictly to the year in which they were earned or incurred, regardless of payment date.
3. Going Concern (Continuité d'exploitation): Accounts assume the business will operate indefinitely. Assets are valued at historical cost, not liquidation sale value.
4. Prudence / Caution: Gains are only recognized when realized, but potential losses or risks must be anticipated and recorded immediately as provisions/impairments!
5. Historical Cost (Nominalism): Transactions are entered at their original acquisition price and never revalued upward for inflation.
6. Consistency / Permanence of Methods: Depreciation and valuation methods must remain identical across years to enable fair comparison.
7. Non-Compensation: Assets cannot be netted against liabilities, nor revenues against expenses. Everything must be shown gross.
8. Good Information (Importance relative): Notes must disclose all material facts necessary to understand the numbers.`,
      bulletPoints: [
        'Prudence is asymmetric: bad news is anticipated; good news is waited for.',
        'Independence of fiscal years requires year-end cut-off adjusting entries.'
      ]
    }
  ],
  workedExamples: [
    {
      id: 'ex-m2-1',
      title: 'Classifying Financial Statement Items & Computing Multi-Tier Profit',
      facts: `For fiscal year 2026, tech startup "Alpha SAS" presents the following balances (in € thousands):
• Sales of consulting: 500
• Purchases of consumables: 80
• Subcontracting & external rentals: 70
• Staff wages & employer charges: 220
• Annual depreciation expense: 30
• Interest on bank loan: 10
• Capital gain on disposal of old server: 20
• Corporate income tax (25% on pre-tax profit): To be calculated.`,
      question: 'Calculate the Operating Result, Financial Result, Exceptional Result, Pre-Tax Profit, Income Tax, and Net Income for Alpha SAS.',
      concept: 'French multi-tier income statement structure.',
      method: 'Group revenues and expenses by tier: Operating, Financial, Exceptional, and Tax.',
      steps: [
        'Step 1 - Operating Revenues: Sales = 500.',
        'Step 2 - Operating Expenses: Purchases (80) + Rentals (70) + Salaries (220) + Depreciation (30) = 400.',
        'Step 3 - Operating Result = 500 – 400 = +100.',
        'Step 4 - Financial Result: Financial Revenues (0) – Interest Expense (10) = -10.',
        'Step 5 - Exceptional Result: Capital gain on disposal = +20.',
        'Step 6 - Profit Before Tax (Pre-tax) = Operating (+100) + Financial (-10) + Exceptional (+20) = +110.',
        'Step 7 - Corporate Income Tax (25%) = 110 × 25% = 27.5.',
        'Step 8 - Net Income (Profit) = 110 – 27.5 = +82.5.'
      ],
      profitEffect: 'Net Income = +€82,500. This amount is integrated into Balance Sheet Equity as "Result for the year".',
      positionEffect: 'Tax payable liability increases by €27,500; Equity increases by €82,500.',
      conclusion: 'Operating profit is strong (+100k), demonstrating operational viability. Pre-tax profit of 110k leads to 27.5k tax and 82.5k net profit.',
      commonWrongTurn: 'Subtracting interest expense inside Operating Result. Interest is a financial expense, NOT an operating expense!'
    }
  ],
  whatMustIRemember: {
    keyTerms: [
      {
        term: 'Balance Sheet (Bilan)',
        definition: 'Summary statement describing assets and liabilities at closing date, showing separately equity capital.',
        category: 'concept'
      },
      {
        term: 'Income Statement (Compte de résultat)',
        definition: 'Summary statement showing economic activity during the year: Expenses (wealth consumption) and Revenues (wealth creation).',
        category: 'concept'
      },
      {
        term: 'Operating Profit (Résultat d’exploitation)',
        definition: 'Operating revenues minus operating expenses; core indicator of industrial and commercial health.',
        category: 'concept'
      },
      {
        term: 'Prudence Principle',
        definition: 'Accounting caution: anticipate possible losses immediately via provisions/impairment, but never record unrealized gains.',
        category: 'rule'
      }
    ],
    formulas: [
      {
        name: 'Operating Result',
        formula: 'Operating Result = Operating Revenues – Operating Expenses',
        note: 'Excludes financial interest and exceptional disposal gains.'
      },
      {
        name: 'Net Income of the Year',
        formula: 'Net Income = Pre-Tax Profit – Corporate Income Tax',
        note: 'Flows into Balance Sheet Equity line 12.'
      }
    ],
    doNotConfuse: [
      {
        termA: 'Balance Sheet',
        termB: 'Income Statement',
        keyDifference: 'Balance sheet is cumulative wealth at a single point in time; Income statement is activity over a 12-month period.',
        example: 'Balance Sheet: Cash on 31/12 = €5,000. Income Statement: Sales during Year N = €120,000.'
      },
      {
        termA: 'Operating Expense',
        termB: 'Financial Expense',
        keyDifference: 'Operating expense relates to daily business (rent, salaries); Financial expense relates to funding (interest on loans).',
        example: 'Wages = Operating expense; Loan interest = Financial expense.'
      }
    ],
    commonTraps: [
      'Putting Net Income only in the Income Statement. (Net Income MUST appear in both the Income Statement and the Balance Sheet under Equity!)',
      'Nesting loan interest into operating expenses.',
      'Assuming the Annex is an optional appendix. (The Annex is legally mandatory and has equal legal standing with the Balance Sheet).'
    ],
    memoriseThis: 'Net Income = Revenues – Expenses. It connects the two primary statements: it is the bottom line of the Income Statement and belongs to Equity on the Balance Sheet!'
  },
  moduleLevelEli10: {
    id: 'eli10-m2-module',
    title: 'The Photo Album and the Movie Reel',
    concept: 'Module 2 Synthesis: The 4 Financial Statements',
    analogy: 'The Balance Sheet is a snapshot of your room right now. The Income Statement is the movie of everything you earned and spent this year. The Cash Flow Statement is the security camera watching money go in and out of your wallet. And the Annex is the sticky-note notebook on the side explaining where you bought your stuff and why you valued it that way.',
    explanation: 'Together, these four documents tell the complete truth about a company. The rules like "Prudence" mean you must never brag about money you haven’t earned yet, but you must warn everyone if you think you might lose money.',
    keyDistinction: 'Net profit appears in both the photo (Equity) and the movie (Bottom line).',
    reconnect: 'This dual appearance is why accounting is fully integrated and double-checked.'
  },
  quiz: [
    {
      id: 'm2-q1',
      moduleId: 'module-2',
      sourceTopic: 'Financial Statement Definition',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'Which financial statement summarizes the economic activity of the company over a 12-month financial year to calculate wealth creation?',
      options: [
        'The Balance Sheet (Bilan)',
        'The Income Statement (Compte de résultat)',
        'The Cash Flow Statement (Tableau des flux)',
        'The Statement of Changes in Equity'
      ],
      correctAnswer: '1',
      rationale: 'The Income Statement presents revenues (production of wealth) and expenses (consumption of wealth) over the fiscal year to determine economic performance (Profit or Loss).',
      misconceptionTargeted: 'Confusing the Balance Sheet with the Income Statement.',
      revisitSection: '3.2 The 3 Tiers of the French Income Statement'
    },
    {
      id: 'm2-q2',
      moduleId: 'module-2',
      sourceTopic: 'Profit in Financial Statements',
      type: 'true-false',
      difficulty: 'foundation',
      question: 'The company’s profit or loss appears simultaneously in the balance sheet (before profit allocation) and in the income statement.',
      options: ['Agree / True', 'Disagree / False', 'Don’t know'],
      correctAnswer: '0',
      rationale: 'True. Profit is calculated in the Income Statement (Revenues – Expenses) and also appears on the Passive side of the Balance Sheet in Shareholders’ Equity (line 12 / Résultat de l’exercice) before AGM allocation.',
      misconceptionTargeted: 'Thinking profit only belongs to the Income Statement.',
      revisitSection: '2. Why It Matters'
    },
    {
      id: 'm2-q3',
      moduleId: 'module-2',
      sourceTopic: 'Accounting Principles',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'Which accounting principle dictates that potential losses and risks must be recognized immediately as soon as they are probable, while potential gains may not be recognized until realized?',
      options: [
        'Going Concern principle (Continuité d’exploitation)',
        'Historical Cost principle (Coût historique)',
        'Prudence / Caution principle (Prudence)',
        'Permanence of methods (Permanence des méthodes)'
      ],
      correctAnswer: '2',
      rationale: 'The Prudence/Caution principle enforces asymmetric valuation: anticipate all probable losses via impairment/provisions, but never record unrealized capital gains.',
      misconceptionTargeted: 'Confusing prudence with historical cost.',
      revisitSection: '3.3 The 8 Fundamental Accounting Principles'
    },
    {
      id: 'm2-q4',
      moduleId: 'module-2',
      sourceTopic: 'Normal Balances',
      type: 'mcq',
      difficulty: 'application',
      question: 'What is the normal balance (Debit or Credit) for Purchases of Merchandise and Accumulated Depreciation?',
      options: [
        'Purchases: Debit; Accumulated Depreciation: Credit',
        'Purchases: Credit; Accumulated Depreciation: Debit',
        'Purchases: Debit; Accumulated Depreciation: Debit',
        'Purchases: Credit; Accumulated Depreciation: Credit'
      ],
      correctAnswer: '0',
      rationale: 'Purchases of merchandise is an Expense account (normal balance = Debit). Accumulated Depreciation is a contra-asset account credited to reduce asset value (normal balance = Credit).',
      misconceptionTargeted: 'Assuming all asset-related accounts have debit balances.',
      revisitSection: '3.1 The French Balance Sheet'
    },
    {
      id: 'm2-q5',
      moduleId: 'module-2',
      sourceTopic: 'Quotes and Obligations',
      type: 'mcq',
      difficulty: 'exam-style',
      question: 'During Year N, a company receives a quotation from a contractor for the refurbishment of a workshop for €50,000 ex-VAT. The quote is valid for 3 months. No contract has been signed yet. What amount is recorded as an expense in Year N?',
      options: [
        '€ 50,000',
        '€ 45,000',
        '€ 0 (Zero)',
        'A provision of €50,000'
      ],
      correctAnswer: '2',
      rationale: '€0. A quotation is merely an offer. No economic event has taken place, no contract is signed, and no present obligation exists to a third party. Under PCG principles, quotes are never recorded in accounting.',
      misconceptionTargeted: 'Recording commercial quotes as accounting commitments.',
      revisitSection: '3.3 The 8 Fundamental Accounting Principles'
    },
    {
      id: 'm2-q6',
      moduleId: 'module-2',
      sourceTopic: 'The Annex',
      type: 'true-false',
      difficulty: 'foundation',
      question: 'The Annex (Notes to the financial statements) is an optional summary that companies only prepare if requested by a bank.',
      options: ['True', 'False', 'Don’t know'],
      correctAnswer: '1',
      rationale: 'False. The Annex is a legally mandatory document forming an integral part of the annual financial statements alongside the Balance Sheet and Income Statement.',
      misconceptionTargeted: 'Believing the Annex is an optional appendix.',
      revisitSection: '1. The Big Idea'
    },
    {
      id: 'm2-q7',
      moduleId: 'module-2',
      sourceTopic: 'Operating vs Financial',
      type: 'mcq',
      difficulty: 'application',
      question: 'Which of the following items is classified as a FINANCIAL expense in the French Income Statement?',
      options: [
        'Depreciation of factory equipment',
        'Salaries paid to marketing staff',
        'Interest expense on a bank loan',
        'Purchases of raw materials'
      ],
      correctAnswer: '2',
      rationale: 'Interest on bank loans is a Financial expense (Charges financières). Depreciation, salaries, and purchases are Operating expenses (Charges d’exploitation).',
      misconceptionTargeted: 'Grouping interest expense with operating expenses.',
      revisitSection: '3.2 The 3 Tiers of the French Income Statement'
    },
    {
      id: 'm2-q8',
      moduleId: 'module-2',
      sourceTopic: 'Pre-tax vs Net Income',
      type: 'true-false',
      difficulty: 'foundation',
      question: 'A company’s net income is always equal to its pre-tax profit.',
      options: ['True', 'False', 'Don’t know'],
      correctAnswer: '1',
      rationale: 'False. Net Income = Pre-Tax Profit – Corporate Income Tax. In France, corporations are subject to 25% corporate income tax on taxable profits.',
      misconceptionTargeted: 'Forgetting corporate income tax deduction.',
      revisitSection: '3.2 The 3 Tiers of the French Income Statement'
    },
    {
      id: 'm2-q9',
      moduleId: 'module-2',
      sourceTopic: 'Balance Sheet Balance',
      type: 'calculation',
      difficulty: 'exam-style',
      question: 'Given the following balance sheet items: Fixed Assets = €80,000; Inventories = €15,000; Receivables = €25,000; Bank = €10,000; Debts = €50,000; Provisions = €5,000. Calculate Total Assets and Total Shareholders’ Equity.',
      correctAnswer: 'Total Assets = €130,000; Total Equity = €75,000.',
      markingGuide: 'Assets = 80k + 15k + 25k + 10k = 130,000. Liabilities = 50k + 5k = 55,000. Equity = 130,000 – 55,000 = 75,000.',
      rationale: 'Total Assets = 80,000 + 15,000 + 25,000 + 10,000 = €130,000. Total Liabilities = Debts (50,000) + Provisions (5,000) = €55,000. Equity = Total Assets (130,000) – Total Liabilities (55,000) = €75,000.',
      misconceptionTargeted: 'Omitting provisions from liabilities or failing to balance equity.',
      revisitSection: '3.1 The French Balance Sheet'
    },
    {
      id: 'm2-q10',
      moduleId: 'module-2',
      sourceTopic: 'Spot the Error',
      type: 'spot-the-error',
      difficulty: 'exam-style',
      question: 'A student claims: "Our company has €40,000 in customer receivables and €30,000 in supplier debts. We can simply record €10,000 of net receivables on the balance sheet to save space." What accounting principle does this violate?',
      correctAnswer: 'This violates the Non-Compensation Principle (Principe de non-compensation).',
      markingGuide: 'Identify the Non-Compensation principle and state that assets cannot be offset against debts.',
      rationale: 'Under the Non-Compensation Principle (PCG), assets and liabilities must be evaluated and presented separately. You must show €40,000 under Assets (Trade Receivables) and €30,000 under Liabilities (Trade Payables). Offsetting hides credit risk from external readers.',
      misconceptionTargeted: 'Believing netting assets and liabilities is permitted.',
      revisitSection: '3.3 The 8 Fundamental Accounting Principles'
    },
    {
      id: 'm2-q11',
      moduleId: 'module-2',
      sourceTopic: 'Periodicity Principle',
      type: 'mcq',
      difficulty: 'application',
      question: 'On December 28, Year N, electricity is consumed by a factory. The electricity company will only send the invoice on January 25, Year N+1. According to the Independence of Fiscal Years principle:',
      options: [
        'The expense must only be recorded in Year N+1 when the invoice arrives',
        'An accrued expense must be recorded in Year N because the electricity was consumed in Year N',
        'No entry is required at all until the bill is paid in February N+1',
        'The expense is ignored because electricity is a utility'
      ],
      correctAnswer: '1',
      rationale: 'Under the Independence of Fiscal Years principle, expenses must be linked to the fiscal year in which wealth was consumed, regardless of when the invoice is issued or paid. An accrued expense (charge à payer) is recorded as of 31/12/N.',
      misconceptionTargeted: 'Delaying expense recognition until the invoice is received.',
      revisitSection: '3.3 The 8 Fundamental Accounting Principles'
    },
    {
      id: 'm2-q12',
      moduleId: 'module-2',
      sourceTopic: 'Users and Standards',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'In France, which accounting standard applies to individual company corporate accounts (comptes sociaux)?',
      options: [
        'US GAAP',
        'Plan Comptable Général (PCG)',
        'Mandatory IFRS for all companies',
        'Internal company management guidelines'
      ],
      correctAnswer: '1',
      rationale: 'According to course slide 20, the French Plan Comptable Général (PCG) is mandatory for corporate accounts of all companies registered in France. IFRS is only mandatory for listed groups in consolidated accounts.',
      misconceptionTargeted: 'Confusing IFRS with local French PCG statutory rules.',
      revisitSection: '3.3 The 8 Fundamental Accounting Principles'
    }
  ],
  worksheetBridge: {
    exerciseTitle: 'Verdi Case (Part 2) — Financial Statements Preparation',
    exerciseFiles: [
      'Exercises/2 Verdi - Case handout.pdf',
      'Exercises/2 Verdi - Students worksheet.xlsx'
    ],
    context: 'Following Part 1, Verdi Part 2 requires carrying forward account balances, establishing the Trial Balance, and preparing the definitive Balance Sheet and Income Statement.',
    finderGuidance: 'Open Exercises/2 Verdi - Students worksheet.xlsx in Finder. The "Statements" tab provides blank French GAAP balance sheet and P&L templates.',
    stepChecklist: [
      'Check account balances in the Trial Balance (Debit balances vs Credit balances).',
      'Transfer Class 6 (Expenses) and Class 7 (Revenues) to the Income Statement.',
      'Compute Operating Result, Financial Result, and Net Profit for the period.',
      'Transfer Class 1-5 accounts to the Balance Sheet (Active: Classes 2-5; Passive: Classes 1 & 4).',
      'Insert the Net Profit calculated in the Income Statement into Shareholders’ Equity (line 12).',
      'Verify that Total Active = Total Passive.',
      'Check that bank ending balance matches the cash balance on the Cash Flow Statement.',
      'Draft explanatory notes for the Annex.'
    ],
    templateHeaders: {
      given: 'Trial balance ending balances.',
      issue: 'Structuring the Balance Sheet and Income Statement.',
      rule: 'Assets = Equity + Liabilities; Net Income = Revenues – Expenses.',
      calculation: 'Sum of Active items vs Passive items.',
      journalEntry: 'Closing entries transferring revenues/expenses to Net Result.',
      profitEffect: 'Detailed operating, financial, and net result.',
      positionEffect: 'Ending equity and debt breakdown.',
      conclusion: 'Reconciliation of statements.'
    }
  },
  recap: {
    takeaways: [
      'The 4 financial statements form an inseparable package: Balance Sheet, Income Statement, Cash Flow Statement, and Annex.',
      'The Balance Sheet is an instantaneous photograph; the Income Statement is a 12-month film.',
      'The Income Statement is split into Operating, Financial, and Exceptional results.',
      'Net Profit belongs to both statements: it is the bottom line of the P&L and sits in Equity on the Balance Sheet.',
      'Prudence requires recording expected losses immediately, but never unearned gains.'
    ],
    recallPrompts: [
      '“Balance sheet is a snapshot; income statement is a movie of the year.”',
      '“Net profit appears in both the income statement and balance sheet equity.”',
      '“Prudence: anticipate losses; never anticipate gains.”'
    ],
    coreRule: 'Operating profit measures core business health before interest and tax; Net profit flows directly into Balance Sheet Equity!'
  }
};
