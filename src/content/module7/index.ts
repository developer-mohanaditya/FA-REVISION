import { ModuleContent } from '../../types';

export const module7Data: ModuleContent = {
  id: 'module-7',
  number: 7,
  title: 'Income Tax & Profit Distribution',
  subtitle: 'Calculating Corporate Income Tax at 25%, timing of tax payments, Distributable Profit, Reserves vs Treasury, and the AGM dividend vote.',
  sourceBadge: 'Based on Session 6 Part 2 slides',
  estimatedMinutes: 35,
  objectives: [
    'Distinguish between Accounting Profit (Résultat comptable) and Taxable Income (Résultat fiscal).',
    'Calculate Corporate Income Tax (Impôt sur les sociétés / IS) at the French standard rate of 25%.',
    'Record the Corporate Income Tax entry: Expense in Year N (Account 695) and debt payable to the State (Account 444).',
    'Compute Distributable Profit (Bénéfice distribuable) available for shareholder allocation.',
    'Understand why Reserves (Réserves) are part of Shareholders’ Equity and NOT cash in the bank (Treasury).',
    'Record the profit allocation decided at the General Meeting in Year N+1: Transfer to Retained Earnings (110) vs Dividends Payable (457), followed by cash dividend distribution.'
  ],
  youWillUseThisWhen: 'You need to calculate income tax on accounting profit, finalize the bottom line of the Income Statement, and record transaction 1 in the Beethoven case (distributing prior year profits to dividends and reserves).',
  whyItMatters: {
    economicPurpose: 'Corporations do not keep 100% of the profits they generate. The State levies Corporate Income Tax (25% in France), which must be recognized in the year the profit was generated even though it is paid in cash months later. The remaining net profit belongs to shareholders, who vote at the Annual General Meeting (AGM) to either reinvest profits into reserves or withdraw them as dividends.',
    statementImpacts: [
      {
        statement: 'Balance Sheet (Bilan)',
        impact: 'Year N Income Tax Payable (444) sits under tax liabilities. At the AGM in Year N+1, Net Income (120) is emptied out and split between Equity (Retained Earnings 110) and Debts (Dividends Payable 457).'
      },
      {
        statement: 'Income Statement (Compte de résultat)',
        impact: 'Income Tax Expense (Account 695) is deducted from Pre-Tax Profit to arrive at the final Net Income of the year. Profit distribution has ZERO impact on the Income Statement!'
      },
      {
        statement: 'Cash Flow Statement',
        impact: 'Income tax paid in Year N relating to Year N-1 is an operating cash outflow. Dividends paid to shareholders are a FINANCING cash outflow.'
      }
    ]
  },
  howItWorks: [
    {
      id: 'm7-s1',
      title: 'Corporate Income Tax (CIT / Impôt sur les sociétés)',
      explanation: `Corporations pay Corporate Income Tax (IS) on their profit:
Standard French CIT Rate = 25%.

CRITICAL DISTINCTION:
Taxable Income (Résultat fiscal) ≠ Accounting Profit (Résultat comptable)!
Taxable Income = Accounting Profit Before Tax 
                 + Non-deductible expenses (penalties, administrative fines, excess vehicle depreciation, luxury expenses)
                 – Tax-exempt revenues (qualified dividend exemptions).

CIT Formula & Booking:
• Corporate Income Tax = Taxable Income × 25%.
• Net Profit (Résultat net) = Accounting Profit Before Tax – Corporate Income Tax.

Booking in Year N (31/12/N):
• Debit 695 Corporate Income Tax Expense (Operating/Corporate tax expense in P&L)
• Credit 444 State – Corporate Income Tax Payable (Debt to tax authorities)

Timing: CIT is recorded as an expense in Year N, but is settled in cash with the State during Year N+1.`,
      bulletPoints: [
        'CIT rate in France = 25%.',
        'Booked in Year N (Debit 695 / Credit 444); paid in Year N+1.'
      ],
      eli10: {
        id: 'eli10-m7-tax',
        title: 'The Mayor’s Share of Your Lemonade Stand',
        concept: 'Corporate Income Tax (CIT) at 25%',
        analogy: 'At the end of the summer, your lemonade stand made €400 in profit before tax. The city mayor says: "Every business must contribute 25% of its earnings to fix the town roads." So you owe €100 in corporate tax.',
        explanation: 'Your final take-home profit is €300. You write down the €100 tax bill on your year-end financial statement right now, even though the mayor won’t send the payment collector until next spring.',
        keyDistinction: 'The tax expense belongs to this year’s profits, even if the cash payment happens next year.',
        reconnect: 'In the Income Statement, Account 695 is deducted to compute Net Income; in the Balance Sheet, Account 444 holds the tax debt.'
      }
    },
    {
      id: 'm7-s2',
      title: 'Profit Allocation: The General Meeting Vote in Year N+1',
      explanation: `Who decides what happens to Net Profit?
The General Meeting of Shareholders (Assemblée Générale Ordinaire / AGO), held within 6 months of the closing date (typically May or June of Year N+1).

Shareholders vote to allocate Year N profit to two destinations:
1. RESERVES / RETAINED EARNINGS (Réserves / Report à nouveau - Account 110): Kept inside the company to finance growth and strengthen equity.
2. DIVIDENDS (Dividendes - Account 457): Distributed to shareholders as return on capital.

Distributable Profit Formula:
Distributable Profit = Net Result of the fiscal year
                     + Retained earnings brought forward
                     – Allocations required for legal/statutory reserves
                     – Prior accumulated losses.
Dividends can ONLY be distributed if Distributable Profit > 0!

CRITICAL WARNING: RESERVES ≠ TREASURY (CASH)!
Reserves belong to shareholders as equity on the Passive side of the balance sheet. They are NOT cash in the bank! You cannot write a check against "Reserves" to buy equipment or pay suppliers. Cash is on the Active side; Reserves are on the Passive side.`,
      bulletPoints: [
        'Reserves are Equity, not cash liquidity.',
        'Allocation decision is voted in Year N+1 by the shareholders at the AGM.'
      ],
      eli10: {
        id: 'eli10-m7-reserves',
        title: 'The Scorecard vs The Piggy Bank',
        concept: 'Reserves are Equity, NOT Cash Treasury',
        analogy: 'Imagine playing a video game where you have a "High Score" of 10,000 points (Reserves) and a "Gold Pouch" with 50 gold coins (Bank cash). You cannot buy a magical sword by showing the shopkeeper your high score points! You can only buy the sword with coins from your pouch.',
        explanation: 'Reserves are just a historical scorecard showing how much profit your company kept over past years instead of giving it away. Cash is actual money in the bank. A company can have €1,000,000 in reserves and still be completely out of cash!',
        keyDistinction: 'Reserves are a source of equity; they cannot be spent directly.',
        reconnect: 'Reserves sit in Account 110 under Equity; Cash sits in Account 512 under Assets.'
      }
    },
    {
      id: 'm7-s3',
      title: 'Accounting Entries for Profit Distribution',
      explanation: `The allocation entry is booked in Year N+1 following the AGM vote:
STEP 1: Recording the Appropriation of Year N Result (May N+1):
• Debit 120 Net Income for Year N: [Full Profit Amount] (clearing prior year profit line)
• Credit 110 Retained Earnings / Reserves: [Share retained in equity]
• Credit 457 Shareholders – Dividends Payable: [Share allocated to dividends]

STEP 2: Payment of Dividends to Shareholders (Bank transfer):
• Debit 457 Shareholders – Dividends Payable: [Dividend amount]
• Credit 512 Bank: [Dividend amount]

Financial Statement Impact of Dividend Payment:
• Balance Sheet: Bank asset decreases; Dividends Payable liability decreases.
• Income Statement: ZERO impact! (Dividends are never an expense; they are a distribution of past profit).
• Cash Flow Statement: Financing cash outflow (Disbursement in financing activities).`,
      diagramType: 'journal',
      diagramData: [
        { category: 'Equity', accountNumber: '120', accountName: 'Net Income for Year N (Cleared)', debit: 200000 },
        { category: 'Equity', accountNumber: '110', accountName: 'Retained Earnings / Reserves (60%)', credit: 120000 },
        { category: 'Liability', accountNumber: '457', accountName: 'Shareholders – Dividends Payable (40%)', credit: 80000 },
        { category: 'Liability', accountNumber: '457', accountName: 'Shareholders – Dividends Payable', debit: 80000 },
        { category: 'Asset', accountNumber: '512', accountName: 'Bank (Dividend disbursement)', credit: 80000 }
      ],
      bulletPoints: [
        'Dividends never appear in the Income Statement.',
        'In the Cash Flow Statement, dividend payments are classified under Financing Activities.'
      ]
    }
  ],
  workedExamples: [
    {
      id: 'ex-m7-1',
      title: 'CIT Calculation & Subsequent AGM Profit Distribution (Rex / Beethoven format)',
      facts: `For fiscal year N, company "Gamma SA" achieved an accounting profit before tax of €380,000.
1. Tax adjustments: During the year, Gamma paid €20,000 in non-deductible fines and administrative penalties. Tax rate is 25%.
2. Net profit after tax is computed.
3. In May of Year N+1, the Annual General Meeting resolves:
   - 60% of Year N net profit transferred to Retained Earnings (Reserves).
   - 40% of Year N net profit distributed as cash dividends.
   - Opening balance in Reserves on 01/01/N+1 was €10,000.
4. On June 15, Year N+1, dividends are paid to shareholders by bank transfer.`,
      question: 'Calculate taxable income, Corporate Income Tax, net income for Year N, and record the entries for tax in Year N and profit distribution in Year N+1.',
      concept: 'Taxable vs accounting profit, 25% CIT, and the 2-step dividend distribution.',
      method: 'Add non-deductible expenses to pre-tax profit, apply 25% CIT rate, and split net profit into reserves and dividends.',
      steps: [
        'Step 1 - Taxable Income & CIT Calculation:\nAccounting Profit Before Tax = €380,000.\nNon-deductible penalties added back = +€20,000.\nTaxable Income = 380,000 + 20,000 = €400,000.\nCorporate Income Tax (25%) = 400,000 × 25% = €100,000.\nNet Income for Year N = Accounting Profit (380,000) – CIT (100,000) = €280,000.',
        'Step 2 - Entry on 31/12/N for Corporate Income Tax:\nDebit 695 Corporate Income Tax Expense €100,000\nCredit 444 Income Tax Payable €100,000',
        'Step 3 - Profit Allocation Calculation (May N+1):\nNet Income to distribute = €280,000.\n• Retained Earnings (60%) = 280,000 × 60% = €168,000.\n• Dividends (40%) = 280,000 × 40% = €112,000.',
        'Step 4 - Entry for Profit Allocation (May N+1):\nDebit 120 Net Income for Year N €280,000\nCredit 110 Retained Earnings €168,000\nCredit 457 Dividends Payable €112,000',
        'Step 5 - Entry for Dividend Payment (June 15, N+1):\nDebit 457 Dividends Payable €112,000\nCredit 512 Bank €112,000',
        'Check ending Reserves balance = Opening (10,000) + Addition (168,000) = €178,000.'
      ],
      journalEntries: [
        { date: '31/12/N', category: 'Expense', accountNumber: '695', accountName: 'Corporate Income Tax Expense', debit: 100000 },
        { category: 'Liability', accountNumber: '444', accountName: 'State – Income Tax Payable', credit: 100000 },
        { date: '15/05/N+1', category: 'Equity', accountNumber: '120', accountName: 'Net Income for Year N (Cleared)', debit: 280000 },
        { category: 'Equity', accountNumber: '110', accountName: 'Retained Earnings / Reserves (+60%)', credit: 168000 },
        { category: 'Liability', accountNumber: '457', accountName: 'Shareholders – Dividends Payable (+40%)', credit: 112000 },
        { date: '15/06/N+1', category: 'Liability', accountNumber: '457', accountName: 'Shareholders – Dividends Payable', debit: 112000 },
        { category: 'Asset', accountNumber: '512', accountName: 'Bank (Dividend transfer to shareholders)', credit: 112000 }
      ],
      profitEffect: 'In Year N, CIT expense reduces net profit by €100,000 to €280,000. In Year N+1, profit distribution has ZERO impact on P&L!',
      positionEffect: 'In Year N+1, Equity increases by 168,000 (reserves); Bank decreases by 112,000 (dividends). Total B/S shrinks by 112,000.',
      conclusion: 'The net profit of Year N is completely cleared from Account 120. Shareholders receive €112,000 in cash, and the company retains €168,000 to finance future operations.',
      commonWrongTurn: 'Calculating 25% CIT directly on accounting profit (€380,000) without adding back the non-deductible penalties, or recording dividend payments as expenses in the Income Statement.'
    }
  ],
  whatMustIRemember: {
    keyTerms: [
      {
        term: 'Corporate Income Tax (IS)',
        definition: '25% tax levied by the State on corporate taxable profits; booked in Account 695 / Account 444.',
        category: 'expense'
      },
      {
        term: 'Taxable Income (Résultat fiscal)',
        definition: 'Tax base calculated as Accounting Profit plus non-deductible expenses minus tax exemptions.',
        category: 'concept'
      },
      {
        term: 'Distributable Profit',
        definition: 'Maximum legal pool available for dividends: Net Result + Retained Earnings – Legal Reserves.',
        category: 'concept'
      },
      {
        term: 'Dividends Payable (457)',
        definition: 'Temporary liability account holding dividend obligations voted at the AGM until paid in cash.',
        category: 'liability'
      }
    ],
    formulas: [
      {
        name: 'Corporate Income Tax',
        formula: 'CIT = Taxable Income × 25%',
        note: 'French statutory corporate tax rate.'
      },
      {
        name: 'Net Profit of the Year',
        formula: 'Net Income = Pre-Tax Profit – Corporate Income Tax',
        note: 'The bottom line of the Income Statement.'
      },
      {
        name: 'Distributable Profit',
        formula: 'Distributable = Net Result + Prior Retained Earnings – Legal/Statutory Reserves',
        note: 'Condition: Distributable Profit must be > 0 for dividends.'
      }
    ],
    doNotConfuse: [
      {
        termA: 'Reserves (110)',
        termB: 'Bank Cash (512)',
        keyDifference: 'Reserves are equity (retained past profit); Bank is spendable liquid money.',
        example: 'A company can have €2M in reserves and €0 in the bank.'
      },
      {
        termA: 'Corporate Income Tax (IS)',
        termB: 'Value Added Tax (VAT)',
        keyDifference: 'CIT is a real expense on company profits; VAT is a neutral pass-through tax on consumer spending.',
        example: 'CIT (25%) reduces Net Profit in P&L; VAT (20%) never touches P&L.'
      }
    ],
    commonTraps: [
      'Recording dividend distributions as operating expenses in the Income Statement. (Dividends are an appropriation of Equity, NEVER an expense!).',
      'Paying income tax in Year N. (Income tax on Year N profit is accrued on 31/12/N and paid in Year N+1!).',
      'Confusing Distributable Profit with Bank balance.'
    ],
    memoriseThis: 'CIT = Taxable Income × 25% (Account 695/444). Net Income = Pre-Tax Profit – CIT. Dividends are voted in Year N+1 and NEVER touch the Income Statement!'
  },
  moduleLevelEli10: {
    id: 'eli10-m7-module',
    title: 'Sharing the Lemonade Stand Treasure',
    concept: 'Module 7 Synthesis: Taxes and Profit Sharing',
    analogy: 'At the end of the year, your lemonade stand has €1,000 of profit. First, the town government takes its 25% tax cut (€250), leaving €750 of pure net profit. Now you and your business partner hold a meeting to decide what to do with the €750.',
    explanation: 'You decide to leave €450 inside the business to buy a second blender next spring (Reserves). You take the remaining €300 out in cash to spend on ice cream for yourselves (Dividends). You didn’t incur an expense by eating ice cream; you simply enjoyed the fruits of your successful business!',
    keyDistinction: 'Dividends are not a cost of doing business; they are the prize for winning the game.',
    reconnect: 'This is why dividends reduce equity and cash, but never touch the Income Statement.'
  },
  quiz: [
    {
      id: 'm7-q1',
      moduleId: 'module-7',
      sourceTopic: 'Corporate Income Tax Rate',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'According to the course slides, what is the standard Corporate Income Tax (IS) rate applied to corporate profits in France?',
      options: ['15%', '20%', '25%', '33.33%'],
      correctAnswer: '2',
      rationale: 'The standard French Corporate Income Tax (Impôt sur les sociétés) rate taught throughout the course slides is 25%. (20% is the standard VAT rate).',
      misconceptionTargeted: 'Confusing the 25% CIT rate with the 20% VAT rate.',
      revisitSection: '3.1 Corporate Income Tax'
    },
    {
      id: 'm7-q2',
      moduleId: 'module-7',
      sourceTopic: 'Reserves Usage',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'In the final exam questions, entities may use their "Reserves" (Réserves) to:',
      options: [
        'Cover a bank overdraft',
        'Pay for the acquisition of PP&E',
        'Make financial investments',
        'None of the above'
      ],
      correctAnswer: '3',
      rationale: 'None of the above. Reserves represent past accumulated profits belonging to Shareholders’ Equity on the balance sheet. They are NOT cash or treasury! You cannot use reserves to pay for fixed assets, make investments, or cover an overdraft; payments require liquid cash in Account 512 Bank.',
      misconceptionTargeted: 'Believing reserves are liquid funds that can be spent on purchases.',
      revisitSection: '3.2 Profit Allocation'
    },
    {
      id: 'm7-q3',
      moduleId: 'module-7',
      sourceTopic: 'Timing of Dividend Approval',
      type: 'true-false',
      difficulty: 'foundation',
      question: 'Dividends are paid during the financial year in which they were approved by the General Meeting of Shareholders.',
      options: ['Agree / True', 'Disagree / False', 'I don’t know'],
      correctAnswer: '0',
      rationale: 'Agree / True. Net profit generated in Year N is approved and allocated at the AGM during Year N+1. Dividends are paid during Year N+1 (the year in which the shareholders voted the distribution).',
      misconceptionTargeted: 'Believing dividends are distributed in Year N before the accounts are even approved.',
      revisitSection: '3.2 Profit Allocation'
    },
    {
      id: 'm7-q4',
      moduleId: 'module-7',
      sourceTopic: 'Taxable Income vs Accounting Profit',
      type: 'mcq',
      difficulty: 'application',
      question: 'A corporation achieved an accounting profit before tax of €380,000 in Year N. It incurred €20,000 of administrative traffic fines that are non-deductible for tax purposes. What is the Corporate Income Tax owed (at 25%)?',
      options: [
        '€ 95,000 (25% of €380,000)',
        '€ 100,000 (25% of €400,000 taxable income)',
        '€ 90,000',
        '€ 85,000'
      ],
      correctAnswer: '1',
      rationale: 'Taxable Income = Accounting Profit (€380,000) + Non-deductible penalties (€20,000) = €400,000. Corporate Income Tax = €400,000 × 25% = €100,000.',
      misconceptionTargeted: 'Failing to add back non-deductible expenses before computing income tax.',
      revisitSection: '3.1 Corporate Income Tax'
    },
    {
      id: 'm7-q5',
      moduleId: 'module-7',
      sourceTopic: 'CIT Booking Account',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'Which Income Statement account is debited to record the Corporate Income Tax expense for the fiscal year?',
      options: [
        'Account 63 Taxes and similar levies',
        'Account 69 Corporate income tax expense (Impôts sur les bénéfices)',
        'Account 44 State – Income tax payable',
        'Account 12 Profit or loss for the year'
      ],
      correctAnswer: '1',
      rationale: 'Under PCG, Corporate Income Tax is recorded in Account 69 (Impôts sur les bénéfices). Account 63 is for other local operating taxes (taxe d’apprentissage, etc.). Account 44 is the balance sheet liability.',
      misconceptionTargeted: 'Confusing Account 69 (corporate profit tax) with Account 63 (operating taxes).',
      revisitSection: '3.1 Corporate Income Tax'
    },
    {
      id: 'm7-q6',
      moduleId: 'module-7',
      sourceTopic: 'Impact of Dividend Distribution on P&L',
      type: 'true-false',
      difficulty: 'foundation',
      question: 'Distributing dividends to shareholders increases the company’s operating expenses and reduces its net income for the year.',
      options: ['True', 'False', 'Don’t know'],
      correctAnswer: '1',
      rationale: 'False. Dividends are NOT an expense! They represent an appropriation of already-earned net profit. Distributing dividends has ZERO impact on the Income Statement and net income.',
      misconceptionTargeted: 'Treating dividend payments as financial or operating expenses.',
      revisitSection: '3.3 Accounting Entries for Profit Distribution'
    },
    {
      id: 'm7-q7',
      moduleId: 'module-7',
      sourceTopic: 'Distributable Profit Formula',
      type: 'mcq',
      difficulty: 'application',
      question: 'A company reports Year N Net Profit of €50,000, prior Retained Earnings of €10,000, and must allocate €5,000 to the mandatory legal reserve. What is the maximum Distributable Profit?',
      options: [
        '€ 50,000',
        '€ 55,000 (€50k + €10k – €5k)',
        '€ 65,000',
        '€ 45,000'
      ],
      correctAnswer: '1',
      rationale: 'Distributable Profit = Net Result (€50,000) + Prior Retained Earnings (€10,000) – Legal Reserve allocation (€5,000) = €55,000.',
      misconceptionTargeted: 'Ignoring prior retained earnings or forgetting legal reserve deductions.',
      revisitSection: '3.2 Profit Allocation'
    },
    {
      id: 'm7-q8',
      moduleId: 'module-7',
      sourceTopic: 'Beethoven Case Transaction 1',
      type: 'journal-entry',
      difficulty: 'exam-style',
      question: 'In Beethoven Case, Net Income for 2025 was €26. At the 2026 AGM, shareholders resolve: €4 is paid as dividends, and the remainder (€22) is transferred to reserves. Record the appropriation entry.',
      correctAnswer: 'Debit 120 Net Income for Year 2025 €26; Credit 110 Reserves €22; Credit 457 Dividends Payable €4.',
      markingGuide: 'Debit Account 120 for 26; Credit Account 110 for 22; Credit Account 457 for 4.',
      rationale: 'Account 120 (Net Income for 2025) is cleared by debiting €26. Reserves (Account 110) increase by €22 (credit). Dividends Payable (Account 457) increase by €4 (credit).',
      misconceptionTargeted: 'Failing to clear Account 120 or crediting bank directly at the AGM vote.',
      revisitSection: '3.3 Accounting Entries for Profit Distribution',
      journalEntries: [
        { category: 'Equity', accountNumber: '120', accountName: 'Net Income for Year 2025 (Cleared)', debit: 26 },
        { category: 'Equity', accountNumber: '110', accountName: 'Reserves / Retained Earnings', credit: 22 },
        { category: 'Liability', accountNumber: '457', accountName: 'Shareholders – Dividends Payable', credit: 4 }
      ]
    },
    {
      id: 'm7-q9',
      moduleId: 'module-7',
      sourceTopic: 'Payment Timing of Corporate Tax',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'When is the Corporate Income Tax calculated for Year N actually paid in cash to the tax administration?',
      options: [
        'On December 31 of Year N',
        'During the following financial year (Year N+1)',
        'Two years later after the statutory audit',
        'It is never paid if the company reinvests profits'
      ],
      correctAnswer: '1',
      rationale: 'Corporate Income Tax is recognized as an accrued expense in Year N on the closing date (31/12/N), and the cash settlement is paid to the tax administration in Year N+1.',
      misconceptionTargeted: 'Assuming income tax is settled before the fiscal year ends.',
      revisitSection: '3.1 Corporate Income Tax'
    },
    {
      id: 'm7-q10',
      moduleId: 'module-7',
      sourceTopic: 'Spot the Error',
      type: 'spot-the-error',
      difficulty: 'exam-style',
      question: 'An accountant records the payment of €10,000 in dividends to shareholders as:\nDebit 658 Other Operating Expenses €10,000\nCredit 512 Bank €10,000\nWhat is the conceptual error and what does it distort?',
      correctAnswer: 'Dividends are an appropriation of Equity, NEVER an operating expense! Debiting Account 658 illegally reduces Net Income on the Income Statement. The debit must go to Account 457 Dividends Payable (or Account 120), leaving the Income Statement completely untouched.',
      markingGuide: 'Identify that dividends are not an expense and that debiting Class 6 illegally distorts the Income Statement.',
      rationale: 'Dividends are paid from after-tax net profit. Recording dividends in Class 6 reduces operating profit and causes double-counting of costs. Dividends must debit Account 457 Dividends Payable, having zero impact on P&L.',
      misconceptionTargeted: 'Treating dividends as operating or financial expenses.',
      revisitSection: '3.3 Accounting Entries for Profit Distribution'
    },
    {
      id: 'm7-q11',
      moduleId: 'module-7',
      sourceTopic: 'Net Income Consistency Check',
      type: 'calculation',
      difficulty: 'application',
      question: 'Before tax, a company reports Operating Profit of +€50,000 and Financial Loss of -€10,000. There are no exceptional items. If taxable income equals pre-tax profit and CIT rate is 25%, what is Net Income for the year?',
      correctAnswer: '€ 30,000',
      markingGuide: 'Pre-tax profit = 50,000 – 10,000 = 40,000. CIT = 40,000 × 25% = 10,000. Net Income = 40,000 – 10,000 = 30,000.',
      rationale: 'Profit Before Tax = Operating (+50k) – Financial (10k) = €40,000. CIT = €40,000 × 25% = €10,000. Net Income = €40,000 – €10,000 = €30,000.',
      misconceptionTargeted: 'Forgetting to deduct financial expenses before calculating tax.',
      revisitSection: '3.1 Corporate Income Tax'
    },
    {
      id: 'm7-q12',
      moduleId: 'module-7',
      sourceTopic: 'CFS Section for Dividends',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'In the Cash Flow Statement, which section contains the payment of dividends to shareholders?',
      options: [
        'Operating Cash Flow',
        'Investing Cash Flow',
        'Financing Cash Flow (Flux de financement)',
        'It is excluded from the cash flow statement because it is non-cash'
      ],
      correctAnswer: '2',
      rationale: 'Dividend payments represent remuneration to providers of equity capital, which belongs strictly to Financing Activities (Flux de financement) in the Cash Flow Statement.',
      misconceptionTargeted: 'Classifying dividend payments as operating cash flows.',
      revisitSection: '2. Why It Matters'
    }
  ],
  worksheetBridge: {
    exerciseTitle: 'Windsurf Case S6 & S7 — CIT & Profit Allocation',
    exerciseFiles: [
      'Exercises/S6 - Windsurf 6 (Part 4) - Cas handout.pdf',
      'Exercises/S7 - Windsurf (Part 5) - Case handout.pdf'
    ],
    context: 'In Windsurf S6 (Part 4), taxable income of €40,000 at 25% produces €10,000 of income tax expense. In Windsurf S7 (Part 5), Transaction 1 requires appropriating 20X3 net income of 26: 5 distributed as dividends, 21 transferred to reserves.',
    finderGuidance: 'Open Exercises/S6 - Windsurf 6 (Part 4) - Cas handout.pdf and S7 - Windsurf (Part 5) - Case handout.pdf in Finder.',
    stepChecklist: [
      'Calculate accounting profit before tax from Operating + Financial + Exceptional.',
      'Adjust for tax non-deductible expenses to determine Taxable Income.',
      'Apply the 25% corporate tax rate: CIT = Taxable Income × 25%.',
      'Book CIT: Debit 695 / Credit 444.',
      'Compute final Net Income = Profit before tax – CIT.',
      'For Year N+1 AGM: clear Account 120 into Account 110 (Reserves) and Account 457 (Dividends).',
      'Record dividend cash payment: Debit 457 / Credit 512.',
      'Check consistency: Equity contains new reserves; bank decreases by cash dividends.'
    ],
    templateHeaders: {
      given: 'Profit before tax, tax rate (25%), AGM allocation percentages.',
      issue: 'CIT expense booking and AGM profit distribution.',
      rule: 'CIT = Taxable Income × 25%; Net Income = Pre-Tax – CIT; AGM splits Account 120.',
      calculation: 'Tax liability and dividend split.',
      journalEntry: 'Accounts 695/444 for CIT; Accounts 120/110/457 for AGM distribution.',
      profitEffect: 'CIT reduces net profit; dividend distribution has 0 profit effect.',
      positionEffect: 'Ending reserves, tax debt, and dividend payable.',
      conclusion: 'Verified profit allocation and balance sheet reconciliation.'
    }
  },
  recap: {
    takeaways: [
      'Corporate Income Tax is 25% in France, booked in Account 695 / Account 444.',
      'CIT is an expense in Year N, but is settled in cash with the State in Year N+1.',
      'Taxable income differs from accounting profit due to non-deductible expenses (e.g. fines).',
      'Reserves are part of Shareholders’ Equity; they are NOT cash in the bank (Treasury).',
      'Dividends are voted at the AGM in Year N+1 and NEVER appear in the Income Statement.'
    ],
    recallPrompts: [
      '“Corporate Income Tax is 25% of taxable profit.”',
      '“Reserves are equity, not cash in the bank.”',
      '“Dividends are an appropriation of profit, NEVER an expense in the P&L.”'
    ],
    coreRule: 'CIT = Taxable Income × 25%. Net Profit = Pre-Tax – CIT. Dividends are voted in Year N+1, reducing Equity and Cash, with ZERO impact on the Income Statement!'
  }
};
