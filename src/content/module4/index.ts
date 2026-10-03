import { ModuleContent } from '../../types';

export const module4Data: ModuleContent = {
  id: 'module-4',
  number: 4,
  title: 'Daily Operations: VAT & Payroll',
  subtitle: 'Mastering Value Added Tax mechanics (20%), sales/purchase invoices, and the 2-step payroll recording cycle.',
  sourceBadge: 'Based on Session 2+3 slides (pp. 23–44)',
  estimatedMinutes: 45,
  objectives: [
    'Understand why Value Added Tax (VAT / TVA) is an economic pass-through tax that is strictly neutral to enterprise profitability.',
    'Record sales invoices: Sales Revenue (ex-VAT) + VAT Collected (44571) = Trade Receivables (incl. VAT).',
    'Record purchase invoices: Purchases/Services (ex-VAT) + Deductible VAT (44566) = Trade Payables (incl. VAT).',
    'Calculate and record monthly VAT settlements: VAT Payable vs VAT Credit carried forward.',
    'Deconstruct the French payroll structure: Gross Salary, Employee Deductions, Employer Social Charges, and Net Salary.',
    'Master the two-step payroll journal entries: (1) Recognizing total personnel expenses and liabilities, and (2) Paying net wages and social security bodies.'
  ],
  youWillUseThisWhen: 'You need to record day-to-day sales and purchase invoices with French 20% VAT, compute monthly tax payments to the State, and process December payroll entries on the exam (tested heavily in the Rex case).',
  whyItMatters: {
    economicPurpose: 'Every business transaction in France involves VAT and labor costs. VAT represents ~40% of the French state budget; the enterprise merely acts as an unpaid tax collector for the government. Payroll represents the company’s single largest operating cost, split between employee wages and state social protection.',
    statementImpacts: [
      {
        statement: 'Balance Sheet (Bilan)',
        impact: 'VAT collected and VAT deductible sit in Class 4 third-party debt/asset accounts until settled. Payroll liabilities (Wages payable 421, Social bodies 431) remain on the balance sheet until bank payments clear.'
      },
      {
        statement: 'Income Statement (Compte de résultat)',
        impact: 'VAT has ZERO impact on the P&L (sales and purchases are booked strictly ex-VAT!). Payroll expenses appear in Class 64 (Gross wages 641 + Employer social contributions 645).'
      },
      {
        statement: 'Cash Flow Statement',
        impact: 'Cash collected from clients includes VAT; cash paid to suppliers and state includes VAT. Salary payments reduce operating cash flows.'
      }
    ]
  },
  howItWorks: [
    {
      id: 'm4-s1',
      title: 'VAT Mechanics: A Neutral Pass-Through Tax',
      explanation: `Invented in France in 1954 by Maurice Lauré, Value Added Tax is a general consumption tax borne solely by the final consumer.
For the enterprise:
• On SALES: The company charges VAT to its customers. This is VAT COLLECTED (TVA collectée - Account 44571). It is NOT revenue; it is a debt owed to the French State!
• On PURCHASES: The company pays VAT to its suppliers. This is DEDUCTIBLE VAT (TVA déductible - Account 44566). It is NOT an expense; it is a receivable claim against the French State!

Monthly Settlement Formula:
VAT to be paid = VAT Collected – Deductible VAT
• If positive (>0): VAT Payable (TVA à décaisser - Account 44551) paid in Month M+1.
• If negative (<0): VAT Credit (Crédit de TVA - Account 44567) carried forward to offset future months.

French Standard Rate: 20% (used across all course exercises). Reduced rates exist (10%, 5.5%, 2.1%).`,
      bulletPoints: [
        'Sales and purchases are ALWAYS recorded in P&L at amounts EXCLUDING VAT (Hors Taxes / HT).',
        'Receivables from customers and debts to suppliers are ALWAYS recorded INCLUDING VAT (TTC).',
        'TTC = HT × (1 + VAT rate). For 20% VAT: TTC = HT × 1.20, and HT = TTC / 1.20.'
      ],
      eli10: {
        id: 'eli10-m4-vat',
        title: 'The School Baker’s Tax Envelope',
        concept: 'Value Added Tax (VAT) as an Envelope for the State',
        analogy: 'Imagine you bake cupcakes for school. The principal says: "For every €5 cupcake you sell, collect an extra €1 coin for the school fund." When someone gives you €6, only €5 is your cupcake money. The €1 coin goes into a special sealed envelope for the principal.',
        explanation: 'When you buy flour and sugar for €2.40 (including 40 cents of tax), you take 40 cents out of the principal’s envelope to pay yourself back. At the end of the month, you hand whatever is left in the envelope (60 cents) to the principal.',
        keyDistinction: 'The money in the envelope was never yours. You never became richer when customers gave it to you, and you did not become poorer when you handed it to the principal.',
        reconnect: 'In accounting, VAT Collected is a Liability debt to the State; Deductible VAT is an Asset claim. It never touches the Income Statement.'
      }
    },
    {
      id: 'm4-s2',
      title: 'Sales & Purchase Invoices: Journal Recording',
      explanation: `1. Recording a SALES Invoice (Ex: Sales HT = €100, VAT 20% = €20, Total TTC = €120):
• Debit 411 Trade Receivables (Asset +): €120 (TTC)
• Credit 707 Sales of Goods / 706 Services (Revenue +): €100 (HT)
• Credit 44571 VAT Collected (Liability / Debt +): €20 (VAT)

2. Recording a PURCHASE Invoice (Ex: Purchases HT = €60, VAT 20% = €12, Total TTC = €72):
• Debit 607 Purchases of Merchandise / 601 Raw Materials (Expense +): €60 (HT)
• Debit 44566 Deductible VAT (Asset claim +): €12 (VAT)
• Credit 401 Trade Payables (Liability / Debt +): €72 (TTC)

3. Monthly VAT Settlement (VAT Collected 20 – Deductible VAT 12 = VAT to Pay 8):
• Debit 44571 VAT Collected: €20 (clearing liability)
• Credit 44566 Deductible VAT: €12 (clearing asset)
• Credit 44551 VAT Payable: €8 (recognizing net debt to State)

4. Payment to Tax Office:
• Debit 44551 VAT Payable: €8
• Credit 512 Bank: €8`,
      diagramType: 'journal',
      diagramData: [
        { category: 'Asset', accountNumber: '411', accountName: 'Trade Receivables (Customers)', debit: 120 },
        { category: 'Revenue', accountNumber: '707', accountName: 'Sales of Merchandise (HT)', credit: 100 },
        { category: 'Liability', accountNumber: '44571', accountName: 'VAT Collected', credit: 20 }
      ],
      bulletPoints: [
        'Debit 411 / Credit 70x + Credit 44571.',
        'Debit 60x + Debit 44566 / Credit 401.'
      ]
    },
    {
      id: 'm4-s3',
      title: 'Personnel Expenses & the 2-Step Payroll Cycle',
      explanation: `In France, social security is co-financed by employers and employees, but the company manages both transfers.
The Payroll Formula:
• Gross Salaries (Salaire brut)
- Employee Social Contributions (Cotisations salariales, approx 20-25%)
= Net Salary Payable to Employee (Salaire net)

In addition:
+ Employer Social Contributions (Cotisations patronales, approx 40%)

TOTAL PERSONNEL EXPENSE FOR THE COMPANY = Gross Salaries + Employer Social Contributions!

The 2-Step Journal Entry Sequence:
STEP 1: Recognizing Payroll (at end of month, e.g., 31/12):
• Debit 641 Wages and Salaries Expense: [Gross Salary]
• Debit 645 Social Security and Pension Expenses: [Employer Share]
• Credit 421 Personnel – Remuneration Payable: [Net Salary]
• Credit 431 Social Security Bodies: [Employee Share + Employer Share]

STEP 2: Paying Salaries and Social Security Bodies (via bank check or transfer):
• Debit 421 Personnel – Remuneration Payable: [Net Salary]
• Credit 512 Bank: [Net Salary]
• Debit 431 Social Security Bodies: [Total Contributions]
• Credit 512 Bank: [Total Contributions]`,
      diagramType: 't-account',
      diagramData: {
        accountNumber: '421',
        accountName: 'Personnel – Remuneration Payable',
        type: 'liability',
        debits: [{ desc: 'Bank salary transfer', amount: 80 }],
        credits: [{ desc: 'Net wages due', amount: 80 }],
        closingBalance: { side: 'credit', amount: 0 }
      },
      bulletPoints: [
        'Total Company Expense (Class 64) = Gross Salary + Employer Share.',
        'Total Debt to Social Security Bodies (URSSAF, etc.) = Employee Share + Employer Share.'
      ],
      eli10: {
        id: 'eli10-m4-payroll',
        title: 'Paying the Helper at Your Stand',
        concept: 'Gross Salary, Net Pay, and Social Protection',
        analogy: 'Imagine you hire a classmate to help at your lemonade stand for €100 (Gross pay). But the school rules say €20 must go into the class healthcare piggy bank (Employee share). So you hand your helper €80 in cash (Net pay).',
        explanation: 'On top of that, the school requires you as the boss to pay another €40 of your own money into the class fund (Employer share). Your helper takes home €80, the class fund gets €60, and your total business cost is €140.',
        keyDistinction: 'Net pay is what the worker takes home. The total cost to the business includes gross pay plus employer contributions.',
        reconnect: 'In the Income Statement, the enterprise records both 641 Gross Wages and 645 Employer Contributions as operating expenses.'
      }
    }
  ],
  workedExamples: [
    {
      id: 'ex-m4-1',
      title: 'Full Payroll & VAT Cycle (Exam Style - Rex / Training format)',
      facts: `In December 2026, enterprise "Rex Tech" has the following transactions:
1. Receives an invoice for professional consulting services of €10,000 ex-VAT (subject to 20% VAT). Rex pays by check immediately.
2. Invoices clients for €30,000 ex-VAT of software services (20% VAT). Client pays 50% by bank transfer immediately; balance due in 30 days.
3. Monthly payroll report:
   - Gross salaries: €20,000
   - Employee social security deductions (20%): €4,000
   - Employer social security contributions (40%): €8,000
   Net salaries are paid by bank transfer on December 31; social contributions will be paid in January.`,
      question: 'Prepare the journal entries for the consulting invoice, the sales invoice, the payroll recognition, and the net salary payment.',
      concept: 'Daily operations: VAT on services and the 2-step payroll recording.',
      method: 'Calculate VAT amounts (20%), compute net salaries and total social debts, and write the entries with PCG numbers.',
      steps: [
        'Step 1 - Consulting Invoice (Purchase):\nEx-tax = 10,000; Deductible VAT (20%) = 2,000; Total TTC = 12,000.\nDebit 622 Professional Fees €10,000\nDebit 44566 Deductible VAT €2,000\nCredit 512 Bank €12,000',
        'Step 2 - Sales Invoice:\nEx-tax = 30,000; VAT Collected (20%) = 6,000; Total TTC = 36,000.\n50% collected immediately = 18,000; 50% on credit = 18,000.\nDebit 512 Bank €18,000\nDebit 411 Trade Receivables €18,000\nCredit 706 Services Revenue €30,000\nCredit 44571 VAT Collected €6,000',
        'Step 3 - Payroll Recognition:\nGross Salary = 20,000; Employer Share = 8,000.\nNet Salary = 20,000 – 4,000 = 16,000.\nTotal Social Security Payable = 4,000 + 8,000 = 12,000.\nDebit 641 Wages and Salaries Expense €20,000\nDebit 645 Social Security Expenses €8,000\nCredit 421 Personnel – Remuneration Payable €16,000\nCredit 431 Social Security Bodies €12,000',
        'Step 4 - Salary Payment:\nDebit 421 Personnel – Remuneration Payable €16,000\nCredit 512 Bank €16,000'
      ],
      journalEntries: [
        { date: '15/12/2026', category: 'Expense', accountNumber: '622', accountName: 'Professional Fees (Consulting HT)', debit: 10000 },
        { date: '15/12/2026', category: 'Asset', accountNumber: '44566', accountName: 'Deductible VAT on other goods & services', debit: 2000 },
        { date: '15/12/2026', category: 'Asset', accountNumber: '512', accountName: 'Bank', credit: 12000 },
        { date: '20/12/2026', category: 'Asset', accountNumber: '512', accountName: 'Bank (50% immediate payment)', debit: 18000 },
        { date: '20/12/2026', category: 'Asset', accountNumber: '411', accountName: 'Trade Receivables (50% balance due)', debit: 18000 },
        { date: '20/12/2026', category: 'Revenue', accountNumber: '706', accountName: 'Services Revenue (HT)', credit: 30000 },
        { date: '20/12/2026', category: 'Liability', accountNumber: '44571', accountName: 'VAT Collected', credit: 6000 },
        { date: '31/12/2026', category: 'Expense', accountNumber: '641', accountName: 'Wages and Salaries Expense (Gross)', debit: 20000 },
        { date: '31/12/2026', category: 'Expense', accountNumber: '645', accountName: 'Social Security and Pension Expenses (Employer)', debit: 8000 },
        { date: '31/12/2026', category: 'Liability', accountNumber: '421', accountName: 'Personnel – Remuneration Payable (Net)', credit: 16000 },
        { date: '31/12/2026', category: 'Liability', accountNumber: '431', accountName: 'Social Security Bodies (4k + 8k)', credit: 12000 },
        { date: '31/12/2026', category: 'Liability', accountNumber: '421', accountName: 'Personnel – Remuneration Payable', debit: 16000 },
        { date: '31/12/2026', category: 'Asset', accountNumber: '512', accountName: 'Bank', credit: 16000 }
      ],
      profitEffect: 'Revenue (+30,000) – Consulting expense (-10,000) – Personnel expenses (-20,000 gross - 8,000 employer) = Net Impact -€8,000.',
      positionEffect: 'Trade Receivables +18,000; VAT debt +4,000 net; Social debts +12,000; Bank net decrease = -12,000 + 18,000 - 16,000 = -10,000.',
      conclusion: 'All entries balance. VAT is held in third-party accounts 44571 and 44566 without affecting profit. Total personnel cost to Rex is €28,000.',
      commonWrongTurn: 'Crediting 512 Bank directly in the payroll recognition entry without passing through Account 421, or forgetting that the employer share is an expense.'
    }
  ],
  whatMustIRemember: {
    keyTerms: [
      {
        term: 'VAT Collected (44571)',
        definition: 'Tax collected on customer sales; represents a liability owed to the French State.',
        category: 'liability'
      },
      {
        term: 'Deductible VAT (44566)',
        definition: 'Tax paid on business purchases; represents an asset claim to be deducted from tax remittances.',
        category: 'asset'
      },
      {
        term: 'VAT to be Paid (44551)',
        definition: 'Net monthly liability when VAT Collected exceeds Deductible VAT.',
        category: 'liability'
      },
      {
        term: 'Gross Salary (Salaire brut)',
        definition: 'Total contractual compensation before social deductions; booked in Account 641.',
        category: 'expense'
      },
      {
        term: 'Net Salary (Salaire net)',
        definition: 'Amount actually transferred to the employee bank account (Gross minus employee contributions).',
        category: 'liability'
      }
    ],
    formulas: [
      {
        name: 'TTC to HT Conversion',
        formula: 'Amount HT = Amount TTC / (1 + Rate)   [For 20%: HT = TTC / 1.20]',
        note: 'Always use HT for Income Statement accounts 60x and 70x.'
      },
      {
        name: 'VAT Payable Formula',
        formula: 'VAT to be Paid = VAT Collected – Deductible VAT',
        note: 'Calculated monthly. If negative, it is a VAT credit carried forward.'
      },
      {
        name: 'Total Personnel Cost',
        formula: 'Total Cost = Gross Salary + Employer Social Contributions',
        note: 'Debited across Accounts 641 and 645.'
      }
    ],
    doNotConfuse: [
      {
        termA: 'VAT Collected',
        termB: 'Sales Revenue',
        keyDifference: 'VAT collected is a debt to the State; Sales revenue is company wealth.',
        example: 'Invoice €120 TTC: €100 is Revenue (Account 70); €20 is Debt (Account 44571).'
      },
      {
        termA: 'Employee Social Charges',
        termB: 'Employer Social Charges',
        keyDifference: 'Employee charges are deducted from gross pay (not an extra expense); Employer charges are an additional expense for the firm.',
        example: 'Gross 100 with 20% employee share = 80 net pay. 40% employer share = 40 extra expense (total cost 140).'
      }
    ],
    commonTraps: [
      'Recording sales or purchases including VAT in the Income Statement. (Revenues and expenses are strictly ex-VAT!).',
      'Thinking VAT payment reduces profit. (Paying VAT reduces debt 44551 and cash 512; profit is untouched).',
      'Forgetting that social bodies are owed BOTH the employee share AND the employer share.'
    ],
    memoriseThis: 'Sales & Purchases = strictly EX-VAT in P&L! VAT Collected is a DEBT; Deductible VAT is an ASSET. Total Personnel Expense = Gross Salary + Employer Charges!'
  },
  moduleLevelEli10: {
    id: 'eli10-m4-module',
    title: 'The Two Money Bags of Daily Business',
    concept: 'Module 4 Synthesis: VAT and Payroll',
    analogy: 'Running a business is like carrying two separate money bags. Bag 1 belongs to the tax office: every time you sell something, you put 20% into Bag 1. When you buy business supplies, you take that tax back out. At the end of the month, whatever is left in Bag 1 goes to the government.',
    explanation: 'Bag 2 is for your workers. You promise a worker €100. But the government makes you put €20 into the health fund for them, so you hand the worker €80. Then you must add €40 of your own money into the health fund. You spent €140, the worker got €80, and the health fund got €60.',
    keyDistinction: 'Neither the tax bag nor the health deductions belong to your profit.',
    reconnect: 'This is why VAT and payroll liabilities are tracked in third-party accounts (Class 4) and cleared through the bank.'
  },
  quiz: [
    {
      id: 'm4-q1',
      moduleId: 'module-4',
      sourceTopic: 'VAT Collected Account',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'Under French accounting rules, the "VAT collected" account (Compte 44571 TVA collectée) is used to record:',
      options: [
        'A purchase invoice received from a supplier',
        'A sales invoice issued to a customer',
        'A customer’s cash payment',
        'A payment of VAT to the tax administration'
      ],
      correctAnswer: '1',
      rationale: 'VAT collected is recorded upon issuing a sales invoice to a customer, representing the tax collected by the enterprise on behalf of the French State.',
      misconceptionTargeted: 'Confusing VAT collected with VAT deductible or cash receipts.',
      revisitSection: '3.1 VAT Mechanics'
    },
    {
      id: 'm4-q2',
      moduleId: 'module-4',
      sourceTopic: 'VAT Return Effects',
      type: 'mcq',
      difficulty: 'application',
      question: 'What are the exact effects on net income and cash of recording and paying the monthly VAT return?',
      options: [
        'Decrease in net income and decrease in cash',
        'No impact on net income, but a decrease in cash',
        'No impact on net income or on cash',
        'Increase in net income and decrease in cash'
      ],
      correctAnswer: '1',
      rationale: 'VAT is neutral to company economic performance (P&L); therefore, recording and paying VAT has NO impact on net income. However, settling the VAT liability requires a disbursement from the bank account, causing a decrease in cash.',
      misconceptionTargeted: 'Believing monthly VAT payment is a tax expense in the income statement.',
      revisitSection: '3.1 VAT Mechanics'
    },
    {
      id: 'm4-q3',
      moduleId: 'module-4',
      sourceTopic: 'TTC to HT Conversion',
      type: 'calculation',
      difficulty: 'foundation',
      question: 'An invoice for office supplies totals €7,200 including VAT (TTC) at the standard rate of 20%. What is the amount recorded in the purchases expense account (HT)?',
      correctAnswer: '€ 6,000',
      markingGuide: 'Award full marks for €6,000 calculated as €7,200 / 1.20.',
      rationale: 'Amount HT = Amount TTC / 1.20 = 7,200 / 1.20 = €6,000. Deductible VAT is €1,200 (6,000 × 20%). The expense is booked at €6,000 ex-tax.',
      misconceptionTargeted: 'Calculating 20% directly on the TTC figure instead of dividing by 1.20.',
      revisitSection: '3.2 Sales & Purchase Invoices'
    },
    {
      id: 'm4-q4',
      moduleId: 'module-4',
      sourceTopic: 'Payroll Breakdown',
      type: 'calculation',
      difficulty: 'exam-style',
      question: 'A company reports gross salaries of €10,000 for September. Employee social security contributions are €2,400 (employee share). Employer social contributions are €4,000 (employer share). Calculate: (1) Net salary payable to employees, and (2) Total personnel expense for the company.',
      correctAnswer: 'Net salary = €7,600; Total personnel expense = €14,000.',
      markingGuide: 'Net salary = 10,000 – 2,400 = 7,600. Total expense = 10,000 (gross) + 4,000 (employer) = 14,000.',
      rationale: 'Net salary = Gross (€10,000) – Employee share (€2,400) = €7,600. Total company personnel expense = Gross salaries (€10,000) + Employer contributions (€4,000) = €14,000.',
      misconceptionTargeted: 'Subtracting employer contributions from gross salary or ignoring employer cost.',
      revisitSection: '3.3 Personnel Expenses'
    },
    {
      id: 'm4-q5',
      moduleId: 'module-4',
      sourceTopic: 'Payroll Journal Entry',
      type: 'journal-entry',
      difficulty: 'exam-style',
      question: 'Record the September 30 journal entry to recognize the payroll described in Q4 (Gross 10,000, Employee share 2,400, Employer share 4,000).',
      correctAnswer: 'Debit 641 Wages €10,000; Debit 645 Social charges €4,000; Credit 421 Personnel payable €7,600; Credit 431 Social bodies €6,400.',
      markingGuide: 'Debits: 641 for 10,000 and 645 for 4,000. Credits: 421 for 7,600 and 431 for 6,400 (2,400 + 4,000).',
      rationale: 'Debits: Account 641 (Gross wages) = 10,000; Account 645 (Employer contributions) = 4,000. Credits: Account 421 (Net pay) = 7,600; Account 431 (Total contributions: 2,400 employee + 4,000 employer) = 6,400.',
      misconceptionTargeted: 'Crediting 431 only for the employer share.',
      revisitSection: '3.3 Personnel Expenses',
      journalEntries: [
        { category: 'Expense', accountNumber: '641', accountName: 'Wages and Salaries Expense (Gross)', debit: 10000 },
        { category: 'Expense', accountNumber: '645', accountName: 'Social Security Expenses (Employer)', debit: 4000 },
        { category: 'Liability', accountNumber: '421', accountName: 'Personnel – Remuneration Payable (Net)', credit: 7600 },
        { category: 'Liability', accountNumber: '431', accountName: 'Social Security Bodies (2.4k + 4k)', credit: 6400 }
      ]
    },
    {
      id: 'm4-q6',
      moduleId: 'module-4',
      sourceTopic: 'Cash Discount on Payment',
      type: 'mcq',
      difficulty: 'exam-style',
      question: 'A consulting invoice for €10,000 ex-VAT (+ 20% VAT = €12,000 TTC) offers a 2% discount for immediate payment. The company settles €11,760 TTC by check. The 2% cash discount (€200 ex-tax) is recorded as:',
      options: [
        'An Operating Revenue',
        'A Financial Income (Account 765 Escomptes obtenus)',
        'A reduction of VAT collected',
        'An Exceptional Income'
      ],
      correctAnswer: '1',
      rationale: 'Discounts granted for prompt payment (escomptes de règlement) are financial transactions. For the buyer, it represents Financial Income (Account 765 Cash discounts received).',
      misconceptionTargeted: 'Confusing prompt-payment cash discounts with trade commercial rebates (rabais/remises).',
      revisitSection: '4. How to Solve an Exam-Style Problem'
    },
    {
      id: 'm4-q7',
      moduleId: 'module-4',
      sourceTopic: 'VAT Credit Meaning',
      type: 'true-false',
      difficulty: 'foundation',
      question: 'When a company has Deductible VAT exceeding VAT Collected during a month, it has a VAT Credit that represents an asset claim against the State.',
      options: ['True', 'False', 'Don’t know'],
      correctAnswer: '0',
      rationale: 'True. When Deductible VAT > VAT Collected (e.g. after major capital investments), the company has a VAT credit (Crédit de TVA, Account 44567) which is an asset carried forward to reduce future VAT obligations.',
      misconceptionTargeted: 'Believing excess deductible VAT is lost or treated as revenue.',
      revisitSection: '3.1 VAT Mechanics'
    },
    {
      id: 'm4-q8',
      moduleId: 'module-4',
      sourceTopic: 'Multiple Payment Revenue',
      type: 'journal-entry',
      difficulty: 'application',
      question: 'Revenue generated in September totals €8,400 including 20% VAT: €3,600 is paid immediately in cash, €1,800 is paid by check, and €3,000 will be paid later on credit. Record the sales entry.',
      correctAnswer: 'Debit 53 Cash €3,600; Debit 51 Bank €1,800; Debit 411 Receivables €3,000; Credit 707 Sales €7,000; Credit 44571 VAT Collected €1,400.',
      markingGuide: 'Ex-tax sales = 8,400 / 1.20 = 7,000. VAT = 1,400. Debits must equal 3,600 (Cash) + 1,800 (Bank) + 3,000 (Customers) = 8,400.',
      rationale: 'Sales ex-VAT = 8,400 / 1.20 = €7,000. VAT Collected = €1,400. Payment breakdown on the debit side: Account 53 (Cash) €3,600; Account 51 (Bank) €1,800; Account 411 (Customers) €3,000. Total Debits (€8,400) = Total Credits (€7,000 + €1,400).',
      misconceptionTargeted: 'Forgetting to split multi-channel collections across Cash, Bank, and Receivables.',
      revisitSection: '4. How to Solve an Exam-Style Problem',
      journalEntries: [
        { category: 'Asset', accountNumber: '53', accountName: 'Cash on hand', debit: 3600 },
        { category: 'Asset', accountNumber: '51', accountName: 'Bank', debit: 1800 },
        { category: 'Asset', accountNumber: '411', accountName: 'Trade Receivables (Customers)', debit: 3000 },
        { category: 'Revenue', accountNumber: '707', accountName: 'Sales of Merchandise (HT)', credit: 7000 },
        { category: 'Liability', accountNumber: '44571', accountName: 'VAT Collected (20%)', credit: 1400 }
      ]
    },
    {
      id: 'm4-q9',
      moduleId: 'module-4',
      sourceTopic: 'Spot the Error',
      type: 'spot-the-error',
      difficulty: 'exam-style',
      question: 'An intern recorded this sales invoice of €10,000 ex-VAT (+ 20% VAT = €12,000 TTC):\nDebit 411 Trade Receivables €12,000\nCredit 707 Sales of Merchandise €12,000\nWhat is the error and what are its consequences?',
      correctAnswer: 'Sales revenue was recorded at €12,000 TTC instead of €10,000 HT, and VAT Collected (Account 44571, €2,000) was completely omitted! This illegally overstates sales profit by €2,000 and conceals a tax liability to the French State.',
      markingGuide: 'Identify that Sales was credited for TTC instead of HT and VAT Collected was omitted.',
      rationale: 'Revenues must strictly be recorded ex-VAT (€10,000). The €2,000 VAT does not belong to the enterprise; it must be credited to Account 44571 VAT Collected as a liability to the State.',
      misconceptionTargeted: 'Booking revenues including VAT.',
      revisitSection: '3.2 Sales & Purchase Invoices'
    },
    {
      id: 'm4-q10',
      moduleId: 'module-4',
      sourceTopic: 'Normal Balance of Deductible VAT',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'What is the normal balance of the account 44566 Deductible VAT?',
      options: [
        'Debit balance (Asset claim on the State)',
        'Credit balance (Liability debt to the State)',
        'It is an expense account with no balance',
        'It depends on whether the company is profitable'
      ],
      correctAnswer: '0',
      rationale: 'Deductible VAT is an Asset (claim on the tax administration) and therefore normally has a DEBIT balance.',
      misconceptionTargeted: 'Thinking all tax accounts are credit liabilities.',
      revisitSection: '3.1 VAT Mechanics'
    },
    {
      id: 'm4-q11',
      moduleId: 'module-4',
      sourceTopic: 'VAT Rates in France',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'According to the course slides, what is the standard VAT rate in France applied to all non-exempt goods and services?',
      options: ['10%', '19.6%', '20%', '25%'],
      correctAnswer: '2',
      rationale: 'The standard rate in France is 20%. Reduced rates are 10%, 5.5%, and 2.1%. (25% is the Corporate Income Tax rate).',
      misconceptionTargeted: 'Confusing the 20% VAT rate with the 25% corporate tax rate.',
      revisitSection: '3.1 VAT Mechanics'
    },
    {
      id: 'm4-q12',
      moduleId: 'module-4',
      sourceTopic: 'Wetsuits in Windsurf S3',
      type: 'mcq',
      difficulty: 'application',
      question: 'In Windsurf S3, wetsuits purchased for €77,000 are lent to course participants and replaced every year. Are they capitalized as PP&E or recorded as an expense?',
      options: [
        'Capitalized as Tangible Assets (PP&E) because they cost over €500',
        'Recorded as an Operating Expense because their useful life is only one year and they are replaced annually',
        'Recorded as a financial investment',
        'Capitalized and depreciated over 10 years'
      ],
      correctAnswer: '1',
      rationale: 'To be capitalized as a fixed asset (PP&E), an item must provide economic benefits beyond the 12-month fiscal period. Because the wetsuits are replaced annually, they are consumed within the operating cycle and must be expensed in Class 6.',
      misconceptionTargeted: 'Believing high monetary value automatically forces capitalization regardless of useful life.',
      revisitSection: '3.2 Sales & Purchase Invoices'
    },
    {
      id: 'm4-q13',
      moduleId: 'module-4',
      sourceTopic: 'Supplies Purchase on Partial Credit',
      type: 'journal-entry',
      difficulty: 'application',
      question: 'Invoice for office supplies: €4,800 including 20% VAT. €3,600 TTC is paid immediately by check; the remaining €1,200 TTC will be paid to the supplier next month. Record the entry.',
      correctAnswer: 'Debit 606 Supplies €4,000; Debit 44566 Deductible VAT €800; Credit 512 Bank €3,600; Credit 401 Suppliers €1,200.',
      markingGuide: 'Ex-tax supplies = 4,800 / 1.20 = 4,000. Deductible VAT = 800. Credits: Bank 3,600 and Suppliers 1,200.',
      rationale: 'Total TTC = 4,800. Ex-VAT = 4,800 / 1.20 = €4,000 (Debit 606). Deductible VAT = €800 (Debit 44566). Immediate payment = €3,600 (Credit 512). Remaining debt = €1,200 (Credit 401). Total Dr (€4,800) = Total Cr (€4,800).',
      misconceptionTargeted: 'Crediting bank for the full TTC amount when part is unpaid.',
      revisitSection: '4. How to Solve an Exam-Style Problem',
      journalEntries: [
        { category: 'Expense', accountNumber: '606', accountName: 'Purchases of Office Supplies (HT)', debit: 4000 },
        { category: 'Asset', accountNumber: '44566', accountName: 'Deductible VAT (20%)', debit: 800 },
        { category: 'Asset', accountNumber: '512', accountName: 'Bank (Immediate check payment)', credit: 3600 },
        { category: 'Liability', accountNumber: '401', accountName: 'Trade Payables (Balance owed to supplier)', credit: 1200 }
      ]
    }
  ],
  worksheetBridge: {
    exerciseTitle: 'Windsurf Case (Part 1 / Session 3) — Operating Transactions',
    exerciseFiles: [
      'Exercises/S3 - Windsurf  - Case handout.pdf'
    ],
    context: 'Windsurf is a kitesurfing school in Brittany. Session 3 covers 12 operational transactions: inventory purchases, credit card course receipts, paying prior year VAT liabilities, equipment vs expense decisions (wetsuits), annual payroll, and loan instalments.',
    finderGuidance: 'Open Exercises/S3 - Windsurf - Case handout.pdf in Finder. Look at transactions 2 to 12.',
    stepChecklist: [
      'Extract HT and VAT amounts from TTC figures using / 1.20 and × 0.20.',
      'Check whether expenditures meet asset criteria (useful life > 1 year) or are operating expenses.',
      'Record sales with Credit 70x (HT) and Credit 44571 (VAT).',
      'Record purchases with Debit 60x (HT) and Debit 44566 (VAT).',
      'For payroll, calculate Net Salary = Gross – Employee Deductions.',
      'Compute Total Social Debt = Employee Share + Employer Share.',
      'Post entries to T-accounts in the General Ledger.',
      'Determine the ending bank balance and verify the trial balance.'
    ],
    templateHeaders: {
      given: 'Invoice TTC amounts, payroll breakdown, loan terms.',
      issue: 'VAT split and payroll expense vs liability recognition.',
      rule: 'HT = TTC / 1.20; Total Personnel Expense = Gross + Employer share.',
      calculation: 'TTC to HT decomposition and social contribution sums.',
      journalEntry: 'Complete PCG entry with 445x and 64x accounts.',
      profitEffect: 'Ex-VAT sales minus ex-VAT expenses and personnel costs.',
      positionEffect: 'Ending bank, receivables, and payables.',
      conclusion: 'Operational ledger balance statement.'
    }
  },
  recap: {
    takeaways: [
      'VAT is economically neutral: sales and purchases in the P&L are strictly EXCLUDING VAT.',
      'VAT Collected is a liability owed to the State; Deductible VAT is an asset claim.',
      'Total company payroll expense = Gross Salary + Employer Social Contributions.',
      'Net pay is what employees receive; Social security bodies receive both employee and employer shares.',
      'Cash discounts for prompt payment are Financial Income/Expense, not commercial discounts.'
    ],
    recallPrompts: [
      '“Revenues and expenses in the income statement are ALWAYS ex-VAT.”',
      '“VAT Collected is a debt; Deductible VAT is an asset claim.”',
      '“Company labor cost = Gross wages PLUS employer contributions.”'
    ],
    coreRule: 'HT = TTC / 1.20. VAT never affects profit! Total Personnel Cost = Account 641 (Gross) + Account 645 (Employer Charges).'
  }
};
