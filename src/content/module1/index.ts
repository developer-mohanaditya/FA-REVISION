import { ModuleContent } from '../../types';

export const module1Data: ModuleContent = {
  id: 'module-1',
  number: 1,
  title: 'Introduction to Financial Accounting & The Accounting Equation',
  subtitle: 'The fundamental law of accounting: Assets = Equity + Liabilities and the crucial difference between wealth creation and cash flow.',
  sourceBadge: 'Based on Session 1 slides (pp. 1–28)',
  estimatedMinutes: 30,
  objectives: [
    'Define financial accounting and identify its internal and external user groups (PCG Art. 120-1).',
    'Understand the fundamental accounting equation: Assets = Equity + Liabilities.',
    'Classify economic transactions into their effects on Assets, Equity, and Debt.',
    'Distinguish between economic enrichment (Net Profit) and financial movements (Bank/Cash balance).',
    'Apply the principle of double entry to maintain equilibrium after every transaction.'
  ],
  youWillUseThisWhen: 'You need to analyze the initial balance sheet of a newly formed venture (like Verdi or Windsurf), evaluate whether a transaction created real profit or merely borrowed money, and verify that the balance sheet remains in equilibrium.',
  whyItMatters: {
    economicPurpose: 'Companies exist to create economic wealth. Financial accounting provides a standardized, retrospective memory and prospective decision tool that records this wealth creation. For an engineer or founder, understanding that cash in the bank does NOT equal profit is the difference between solvency and corporate failure.',
    statementImpacts: [
      {
        statement: 'Balance Sheet (Bilan)',
        impact: 'Presents the instantaneous photograph of assets owned on the left and the equity and debts financing them on the right.'
      },
      {
        statement: 'Income Statement (Compte de résultat)',
        impact: 'Explains the economic enrichment (profit) or impoverishment (loss) generated over the period: Revenues minus Expenses.'
      },
      {
        statement: 'Cash Flow Statement (Tableau des flux de trésorerie)',
        impact: 'Tracks purely the physical cash entering and leaving the bank account, explaining why bank balance changes even when no profit was made.'
      }
    ]
  },
  howItWorks: [
    {
      id: 'm1-s1',
      title: 'The Accounting Equation & Dual Funding',
      explanation: `All resources used by an enterprise to operate are called Assets (Actif). 
These assets are 100% financed by two sources:
1. Resources provided by owners/shareholders (Equity / Capitaux Propres)
2. Resources provided by external third parties that must be repaid (Liabilities & Debts / Dettes)

Hence, by mathematical definition:
ASSETS = EQUITY + LIABILITIES

Every transaction alters at least two elements of this equation to preserve equality.`,
      diagramType: 'accounting-equation',
      diagramData: {
        assets: 100000,
        equity: 60000,
        liabilities: 40000,
        assetsBreakdown: [
          { name: 'Bank account (cash)', amount: '€ 40,000' },
          { name: 'Equipment (PP&E)', amount: '€ 60,000' }
        ],
        equityBreakdown: [
          { name: 'Share capital', amount: '€ 50,000' },
          { name: 'Retained profit', amount: '€ 10,000' }
        ],
        liabBreakdown: [
          { name: 'Bank loan', amount: '€ 30,000' },
          { name: 'Trade payables', amount: '€ 10,000' }
        ],
        caption: 'Figure 1.1: Equilibrium of the fundamental accounting equation in a starting venture.'
      },
      bulletPoints: [
        'Assets: Economic resources controlled by the company that generate future economic benefits.',
        'Liabilities: Obligations toward third parties certain or likely to cause an outflow of resources without equivalent consideration.',
        'Equity: Residual interest of owners; includes share capital plus undistributed accumulated profits.'
      ],
      eli10: {
        id: 'eli10-m1-eq',
        title: 'The Toy Store Piggy Bank',
        concept: 'The Accounting Equation: Assets = Equity + Liabilities',
        analogy: 'Imagine opening a lemonade stand. You put €50 of your own allowance into the cash box (Equity). Your friend lends you €50 (Debt). You now have €100 total in the box (Assets).',
        explanation: 'Everything your lemonade stand owns (the €100 pitcher, cups, and cash) had to come from somewhere. It either came from your own pocket (Equity) or was borrowed from someone else (Liabilities). Nothing appears out of thin air.',
        keyDistinction: 'Borrowing money increases your assets (cash), but does NOT make you richer because your debts increase by the exact same amount.',
        reconnect: 'In formal accounting, obtaining a bank loan increases Assets (Bank) and increases Liabilities (Borrowings), leaving Equity completely unchanged.'
      }
    },
    {
      id: 'm1-s2',
      title: 'The 4 Fundamental Transaction Archetypes & Enrichment',
      explanation: `Session 1 analyzes how transactions affect the equation:
• Type 1: Increase in Assets & Increase in Equity (e.g., founders contribute €10,000 cash for share capital).
• Type 2: Reallocation within Assets (e.g., spending €3,000 bank cash to buy a computer: Bank decreases, Equipment increases; total assets unchanged).
• Type 3: Increase in Assets & Increase in Debt (e.g., borrowing €5,000 from the bank: Bank increases, Loan increases; no profit created).
• Type 4: Enrichment / Realization of Profit (e.g., buying goods for €40 and reselling them for €100: Assets increase by €60 net, Equity increases by €60 via Net Profit).

Crucial rule: Only Type 4 creates true economic enrichment. Transactions 1, 2, and 3 merely reshuffle financing or liquidity.`,
      diagramType: 'accounting-equation',
      diagramData: {
        assets: '€ +60 (Bank)',
        equity: '€ +60 (Profit)',
        liabilities: '€ 0 (No change)',
        caption: 'Type 4: Purchase for €40 cash, sale for €100 cash → Wealth created = +€60 (Equity +60).'
      },
      eli10: {
        id: 'eli10-m1-enrich',
        title: 'Selling Cookies vs Getting a Loan',
        concept: 'Economic Profit versus Cash Inflow',
        analogy: 'If your grandmother gives you a €20 loan to buy baking ingredients, you have €20 in your pocket, but you are not richer—you owe her €20. But if you bake cookies and sell them for €35, you have truly earned €15 of new wealth.',
        explanation: 'Cash arriving in your hand is not always profit. A loan gives you cash with a string attached (you must repay it). Profit is the reward you get when customers pay you more than the things cost to make.',
        keyDistinction: 'Bank balance measures available money; Profit measures new value created.',
        reconnect: 'In the balance sheet, cash belongs to Assets; profit belongs to Equity. They rarely move in parallel.'
      }
    }
  ],
  workedExamples: [
    {
      id: 'ex-m1-1',
      title: 'Tracking 4 Verdi-Style Transactions on the Accounting Equation',
      facts: `A graduate starts an agency called "Verdi Media" on January 1:
1. Founders deposit €50,000 in the company bank account for share capital.
2. The company takes out a 3-year bank loan of €20,000, deposited in the bank account.
3. The company buys computer equipment for €15,000 cash by check.
4. The company performs advertising services, billing €25,000: client pays €18,000 by check immediately, €7,000 will be paid in 30 days. Operating expenses incurred to deliver the service were €10,000 paid immediately by check.`,
      question: 'Determine the ending Assets, Liabilities, Equity, and Net Income, and prove that the accounting equation remains balanced.',
      concept: 'Double entry equilibrium & distinction between asset reallocation and enrichment.',
      method: 'Trace the cumulative effect of each transaction on Assets, Liabilities, and Equity in a balance matrix.',
      steps: [
        'Transaction 1: Assets (Bank) +50,000; Equity (Share Capital) +50,000. Equation: 50,000 = 50,000 + 0.',
        'Transaction 2: Assets (Bank) +20,000; Liabilities (Borrowings) +20,000. Equation: 70,000 = 50,000 + 20,000.',
        'Transaction 3: Assets (Equipment) +15,000; Assets (Bank) -15,000. Net change in Assets = 0. Equation: 70,000 = 50,000 + 20,000.',
        'Transaction 4 Revenue: Assets (Bank) +18,000; Assets (Trade Receivables) +7,000. Total Assets +25,000. Revenues = 25,000.',
        'Transaction 4 Expenses: Assets (Bank) -10,000. Expenses = 10,000.',
        'Net Profit = Revenues (25,000) - Expenses (10,000) = +15,000. This +15,000 is added to Equity.',
        'Check ending totals: Assets = Bank (50k + 20k - 15k + 18k - 10k = 63k) + Receivables (7k) + Equipment (15k) = 85,000.',
        'Equity = Share Capital (50k) + Net Profit (15k) = 65,000.',
        'Liabilities = Borrowings (20,000).',
        'Verification: Assets (85,000) = Equity (65,000) + Liabilities (20,000) = 85,000. Perfectly balanced!'
      ],
      profitEffect: 'Revenues €25,000 – Expenses €10,000 = Net Profit +€15,000.',
      positionEffect: 'Assets = €85,000; Equity = €65,000; Liabilities = €20,000.',
      conclusion: 'Only Transaction 4 modified net wealth (Equity increased by €15,000). Transactions 1, 2, and 3 adjusted financing structure and asset allocation.',
      commonWrongTurn: 'Beginners often believe Transaction 2 (getting a €20,000 loan) created €20,000 in profit. It created €0 profit because the debt obligations increased identically.'
    }
  ],
  whatMustIRemember: {
    keyTerms: [
      {
        term: 'Assets (Actif)',
        definition: 'Economic resources controlled by the entity resulting from past events, expected to generate future economic benefits.',
        category: 'asset'
      },
      {
        term: 'Liabilities (Passif externe / Dettes)',
        definition: 'Present obligations toward third parties resulting from past events that will cause a probable outflow of economic resources.',
        category: 'liability'
      },
      {
        term: 'Equity (Capitaux Propres)',
        definition: 'The residual claim on company assets after deducting all liabilities. Composed of initial capital contributions plus accumulated retained profits.',
        category: 'equity'
      },
      {
        term: 'Enrichment (Enrichissement)',
        definition: 'The generation of a positive Net Result (Revenues > Expenses) which increases shareholders equity.',
        category: 'concept'
      }
    ],
    formulas: [
      {
        name: 'The Fundamental Accounting Equation',
        formula: 'Assets = Equity + Liabilities',
        note: 'Always holds true at every microsecond of the enterprise lifecycle.'
      },
      {
        name: 'Economic Performance (Net Profit)',
        formula: 'Net Income = Revenues – Expenses',
        note: 'Calculated in the Income Statement and integrated into Balance Sheet Equity.'
      }
    ],
    doNotConfuse: [
      {
        termA: 'Profit (+€60)',
        termB: 'Bank Balance (+€700)',
        keyDifference: 'Profit is economic wealth generated over time; Bank is liquid cash present in an account at a specific instant.',
        example: 'Borrowing €1,000 adds €1,000 to the bank, but €0 to profit.'
      },
      {
        termA: 'Buying an Asset (Equipment)',
        termB: 'Incurring an Expense (Supplies)',
        keyDifference: 'An asset brings economic benefits over multiple future years; an expense is consumed immediately.',
        example: 'Buying a €1,500 laptop is an asset; buying €30 printer paper is an expense.'
      }
    ],
    commonTraps: [
      'Assuming an increase in bank cash is always revenue. (Loans and equity contributions increase cash without being revenue!)',
      'Thinking equity is a debt owed to suppliers. (Equity belongs to owners, not creditors).',
      'Forgetting that every transaction must impact at least two accounts to keep the equation balanced.'
    ],
    memoriseThis: 'Assets = Equity + Liabilities. Only operating transactions (Revenues – Expenses) change Equity through Net Profit; financing and equipment purchases only redistribute accounts!'
  },
  moduleLevelEli10: {
    id: 'eli10-m1-module',
    title: 'The Golden Balance of the Toy Shop',
    concept: 'Module 1 Synthesis: How Accounting Sees a Company',
    analogy: 'Think of a company like a backpack. The things inside the backpack (books, laptop, snacks) are the ASSETS. The tags showing who paid for them are the LIABILITIES and EQUITY. If you bought them with pocket money, that is Equity. If your friend lent you money to buy them, that is Debt.',
    explanation: 'No matter what you put in the backpack, the total value of what is inside will always match the sum of your own money plus what you borrowed. If you trade an apple for a sandwich, the total value is the same. But if you buy an apple for €1 and sell it for €3, you just added €2 of pure wealth to your pocket money tag!',
    keyDistinction: 'Exchanging assets (money for computers) does not make you richer. Only profitable sales increase your wealth tag.',
    reconnect: 'This is why Assets = Equity + Liabilities is called the Fundamental Accounting Equation.'
  },
  quiz: [
    {
      id: 'm1-q1',
      moduleId: 'module-1',
      sourceTopic: 'The Accounting Equation',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'Which of the following equations correctly expresses the fundamental accounting equation under French standards?',
      options: [
        'Assets = Equity – Liabilities',
        'Assets = Equity + Liabilities',
        'Equity = Assets + Liabilities',
        'Assets + Equity = Liabilities'
      ],
      correctAnswer: '1',
      rationale: 'Assets represent all resources owned and controlled by the firm, which are financed entirely by owners (Equity) and lenders/creditors (Liabilities). Therefore, Assets = Equity + Liabilities.',
      misconceptionTargeted: 'Confusing equity and debt placement in the equation.',
      revisitSection: '3.1 The Accounting Equation & Dual Funding'
    },
    {
      id: 'm1-q2',
      moduleId: 'module-1',
      sourceTopic: 'Users of Accounting',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'According to PCG Art. 120-1 and the course slides, who among the following is considered an INTERNAL user of financial accounting?',
      options: [
        'Tax Administration (Fiscal authorities)',
        'Lending Banks',
        'Company Management & Works Council (CSE / Employees)',
        'Suppliers and external creditors'
      ],
      correctAnswer: '2',
      rationale: 'Internal users include management, directors, employees, and staff representatives (works council/unions). Tax authorities, banks, and suppliers are external users.',
      misconceptionTargeted: 'Believing tax authorities or creditors are internal users.',
      revisitSection: '1. The Big Idea'
    },
    {
      id: 'm1-q3',
      moduleId: 'module-1',
      sourceTopic: 'Profit vs Cash',
      type: 'true-false',
      difficulty: 'foundation',
      question: 'A company whose bank account balance increased by €50,000 during the month necessarily achieved a net profit of €50,000.',
      options: ['True', 'False', 'Don’t know'],
      correctAnswer: '1',
      rationale: 'False. The bank balance can increase from obtaining a new bank loan (Debt +50k) or an equity injection (Capital +50k), neither of which constitutes revenue or economic enrichment.',
      misconceptionTargeted: 'Equating bank cash movements with economic profit formation.',
      revisitSection: '3.2 The 4 Fundamental Transaction Archetypes'
    },
    {
      id: 'm1-q4',
      moduleId: 'module-1',
      sourceTopic: 'Transaction Classification',
      type: 'mcq',
      difficulty: 'application',
      question: 'A business acquires a professional delivery van for €30,000 paid immediately by bank check. What is the effect on the fundamental accounting equation?',
      options: [
        'Assets increase by €30,000 and Liabilities increase by €30,000',
        'Assets increase by €30,000 and Equity decreases by €30,000 (expense)',
        'One Asset (Equipment) increases by €30,000 and another Asset (Bank) decreases by €30,000; total assets and equity remain unchanged',
        'Liabilities decrease by €30,000 and Equity increases by €30,000'
      ],
      correctAnswer: '2',
      rationale: 'This is a Type 2 transaction (internal asset reallocation). Equipment increases by €30,000 and Bank decreases by €30,000. Total assets remain identical; no profit or debt is generated.',
      misconceptionTargeted: 'Believing that buying long-term equipment is an immediate expense that reduces profit.',
      revisitSection: '3.2 The 4 Fundamental Transaction Archetypes'
    },
    {
      id: 'm1-q5',
      moduleId: 'module-1',
      sourceTopic: 'Enrichment',
      type: 'mcq',
      difficulty: 'application',
      question: 'Which of the following transactions creates true economic enrichment (an increase in Equity) for the company?',
      options: [
        'The founders contribute €20,000 in cash to increase the share capital',
        'The company sells services for €12,000 that cost €4,000 to deliver',
        'The company obtains a €50,000 5-year bank loan',
        'The company repays €10,000 of principal on an existing bank loan'
      ],
      correctAnswer: '1',
      rationale: 'Only the sale of services generates net revenue exceeding expenses (€12k - €4k = +€8k profit), which directly increases Equity through Net Income. Capital contributions, loan issuances, and repayments are purely financial funding operations.',
      misconceptionTargeted: 'Thinking shareholder capital contributions represent operating profit.',
      revisitSection: '3.2 The 4 Fundamental Transaction Archetypes'
    },
    {
      id: 'm1-q6',
      moduleId: 'module-1',
      sourceTopic: 'Definition of Equity',
      type: 'true-false',
      difficulty: 'foundation',
      question: 'Equity represents the total of the company’s liabilities.',
      options: ['True', 'False', 'Don’t know'],
      correctAnswer: '1',
      rationale: 'False. Equity represents the owners funds (share capital, reserves, and retained earnings). Liabilities (dettes) represent obligations owed to third parties (banks, suppliers, tax authorities). They are separate components of the balance sheet.',
      misconceptionTargeted: 'Confusing equity with external debt.',
      revisitSection: '3.1 The Accounting Equation & Dual Funding'
    },
    {
      id: 'm1-q7',
      moduleId: 'module-1',
      sourceTopic: 'Balance Sheet Components',
      type: 'short-answer',
      difficulty: 'application',
      question: 'A company has total Assets of €120,000 and total Liabilities (debts to third parties) of €45,000. What is the exact value of Shareholders’ Equity?',
      correctAnswer: '€ 75,000',
      markingGuide: 'Award full marks for €75,000 calculated as Assets (€120,000) minus Liabilities (€45,000).',
      rationale: 'Rearranging the equation: Equity = Assets – Liabilities = 120,000 – 45,000 = €75,000.',
      misconceptionTargeted: 'Inability to algebraically rearrange the fundamental equation.',
      revisitSection: '3.1 The Accounting Equation & Dual Funding'
    },
    {
      id: 'm1-q8',
      moduleId: 'module-1',
      sourceTopic: 'Loan Impact',
      type: 'calculation',
      difficulty: 'exam-style',
      question: 'On October 1, startup Nova draws a bank loan of €40,000. Show the exact immediate impact on Assets, Liabilities, and Equity.',
      correctAnswer: 'Assets +€40,000 (Bank); Liabilities +€40,000 (Borrowings); Equity €0 (no change).',
      markingGuide: 'Must mention Bank asset increases by 40,000, Borrowings liability increases by 40,000, and Equity has 0 impact.',
      rationale: 'Drawing a loan increases the bank account (+40,000 asset) and creates a debt owed to the bank (+40,000 liability). Because no goods or services were sold, profit and equity are completely untouched.',
      misconceptionTargeted: 'Thinking loans generate taxable revenue or immediate expenses.',
      revisitSection: '3.2 The 4 Fundamental Transaction Archetypes'
    },
    {
      id: 'm1-q9',
      moduleId: 'module-1',
      sourceTopic: 'Double Entry Rule',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'Under the double-entry bookkeeping convention, why must every transaction be entered with at least two equal amounts?',
      options: [
        'To calculate taxes twice for the government',
        'To maintain the mathematical equilibrium of the accounting equation (Assets = Equity + Liabilities)',
        'Because French law requires two accountants to sign each transaction',
        'To ensure that cash matches net profit'
      ],
      correctAnswer: '1',
      rationale: 'Every economic event represents both a resource (origin of funds) and an employment (use of funds). Entering two equal balancing amounts ensures the equation remains strictly equal at all times.',
      misconceptionTargeted: 'Viewing double entry as an arbitrary bureaucratic convention.',
      revisitSection: '3.1 The Accounting Equation & Dual Funding'
    },
    {
      id: 'm1-q10',
      moduleId: 'module-1',
      sourceTopic: 'Spot the Error',
      type: 'spot-the-error',
      difficulty: 'exam-style',
      question: 'A student recorded the following for a €10,000 credit sale of consulting services (customer will pay in 60 days):\n"Bank increases by €10,000; Revenue increases by €10,000."\nWhat is the error in this reasoning?',
      correctAnswer: 'Bank cash has NOT increased yet because the customer will pay in 60 days. The affected asset is Trade Receivables (Créances clients), not Bank (Banque).',
      markingGuide: 'Identify that Bank was wrongly debited instead of Trade Receivables (Accounts Receivable).',
      rationale: 'A sale on credit gives the company a legal claim against the customer (Trade Receivables, an asset), not physical money in the bank account. Bank will only increase 60 days later upon settlement.',
      misconceptionTargeted: 'Confusing credit sales with immediate cash collections.',
      revisitSection: '3.2 The 4 Fundamental Transaction Archetypes'
    },
    {
      id: 'm1-q11',
      moduleId: 'module-1',
      sourceTopic: 'Verdi Case 1 Transaction Analysis',
      type: 'mcq',
      difficulty: 'application',
      question: 'In Verdi Case 1, Verdi repays €12 of bank loan principal and pays €1 of loan interest from its bank account. What is the impact on the equation?',
      options: [
        'Assets (Bank) decrease by 13; Liabilities (Borrowings) decrease by 12; Equity decreases by 1 (Interest Expense)',
        'Assets decrease by 13; Liabilities decrease by 13; Equity is unchanged',
        'Assets decrease by 12; Liabilities decrease by 12; Equity is unchanged',
        'Equity decreases by 13; Liabilities increase by 1'
      ],
      correctAnswer: '0',
      rationale: 'Total cash spent = 13 (Assets -13). The €12 principal reduces the loan liability (Liabilities -12). The €1 interest is a financial expense consumed during the period, reducing net profit and thus reducing Equity by 1 (Equity -1). Equation check: -13 = -1 + (-12).',
      misconceptionTargeted: 'Treating loan principal repayment as an expense, or interest as a liability repayment.',
      revisitSection: '4. How to Solve an Exam-Style Problem'
    },
    {
      id: 'm1-q12',
      moduleId: 'module-1',
      sourceTopic: 'Accounting Memory',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'Which of the following is true regarding financial accounting according to the course summary?',
      options: [
        'It only records physical goods, ignoring financial services and debts',
        'It provides both a retrospective memory and a prospective decision-making tool for the entity',
        'It is strictly designed for internal managers, while management accounting is for banks',
        'It records assets at their future expected selling price'
      ],
      correctAnswer: '1',
      rationale: 'Slide 14 emphasizes: Accounting is a retrospective memory (recording past economic transactions) and a prospective decision-making tool (budgeting and strategy). Management accounting is for internal managers; financial accounting is for external and general use.',
      misconceptionTargeted: 'Believing financial accounting has no forward-looking value.',
      revisitSection: '1. The Big Idea'
    }
  ],
  worksheetBridge: {
    exerciseTitle: 'Verdi Case (Part 1) — Founding & Operating Cycle',
    exerciseFiles: [
      'Exercises/1 Verdi - Case handout.pdf',
      'Exercises/1 Cas Verdi - Student worksheet.xlsx'
    ],
    context: 'The Verdi case models the launch of an advertising design agency. You track 8 foundational transactions (capital deposit, loan, equipment purchase, credit sale, partial customer payment, staff salary, supplier credit, loan instalment).',
    finderGuidance: 'Open Exercises/1 Cas Verdi - Student worksheet.xlsx from Finder. Tab "Equation" lets you input the 8 transactions and see the equation balance in real time.',
    stepChecklist: [
      'Identify what happened economically (e.g., loan obtained vs services performed).',
      'Identify the date of the transaction and whether cash was transferred.',
      'Identify affected accounts: Bank, Share Capital, Borrowings, Equipment, Receivables, Payables.',
      'Classify each account as Asset (+/-), Liability (+/-), or Equity (+/-).',
      'Determine if the transaction created enrichment (Revenue/Expense) or was purely funding/asset swap.',
      'Compute the mathematical impact on both sides of the equation.',
      'Check: Assets = Equity + Liabilities.',
      'State ending balances for Bank, Profit, and Total Assets.'
    ],
    templateHeaders: {
      given: 'Transaction description, amount, and payment terms.',
      issue: 'Classifying the dual impact on the accounting equation.',
      rule: 'Assets = Equity + Liabilities.',
      calculation: 'Net change in Assets vs Net change in Equity + Liabilities.',
      journalEntry: 'Account names and Debit / Credit classification.',
      profitEffect: 'Revenue or Expense impact (if any).',
      positionEffect: 'Ending asset and liability balances.',
      conclusion: 'Verified balance statement.'
    }
  },
  recap: {
    takeaways: [
      'The fundamental law is absolute: Assets = Equity + Liabilities.',
      'Assets are what the company owns and controls; Equity and Liabilities show who financed them.',
      'Only sales that exceed expenses generate profit (enrichment) and increase Equity.',
      'Receiving a loan or buying equipment changes your balance sheet, but generates ZERO profit.',
      'Cash in the bank measures immediate liquidity, never cumulative business performance.'
    ],
    recallPrompts: [
      '“Assets are what we control; Equity and Debts are how we paid for them.”',
      '“Getting a bank loan increases cash and debt, but creates zero profit.”',
      '“Only revenues minus expenses create true economic enrichment.”'
    ],
    coreRule: 'Every transaction touches at least two accounts to preserve Assets = Equity + Liabilities. Profit belongs to Equity; cash belongs to Assets!'
  }
};
