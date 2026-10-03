import { ModuleContent } from '../../types';

export const module3Data: ModuleContent = {
  id: 'module-3',
  number: 3,
  title: 'The Double-Entry System & the Accounting Process',
  subtitle: 'The universal language: Debit and Credit mechanics, Classes 1–7 of the PCG, Journal, General Ledger, and Trial Balance.',
  sourceBadge: 'Based on Session 2+3 slides (pp. 1–22)',
  estimatedMinutes: 40,
  objectives: [
    'Master the universal debit/credit rules: why Debit means Left and Credit means Right.',
    'Classify accounts using the French PCG decimal hierarchy (Classes 1 to 5 for Balance Sheet, Classes 6 & 7 for Income Statement).',
    'Record chronological accounting operations in the Journal with strict debit-credit equality.',
    'Post journal entries to the General Ledger (T-accounts) and determine closing balances (solde débiteur vs créditeur).',
    'Prepare the Trial Balance (Balance générale) and use its double-equilibrium checks to catch bookkeeping errors.',
    'Navigate the end-to-end accounting pipeline: Source Vouchers → Journal → General Ledger → Trial Balance → Financial Statements → Statutory Audit.'
  ],
  youWillUseThisWhen: 'You need to write exam journal entries, determine whether an account balance is debit or credit on a trial balance, check that your books balance, and understand what the statutory auditor examines.',
  whyItMatters: {
    economicPurpose: 'Every economic event has two aspects: an employment (use of funds) and a resource (source of funds). The double-entry system guarantees that no matter how complex the transaction, mathematical balance is maintained.',
    statementImpacts: [
      {
        statement: 'Journal & General Ledger',
        impact: 'The raw transactional engine. The journal records events chronologically; the general ledger groups entries by thematic account number.'
      },
      {
        statement: 'Trial Balance (Balance générale)',
        impact: 'A central control document verifying that Total Debits = Total Credits across both movements and ending balances before statements are drafted.'
      },
      {
        statement: 'Financial Statements',
        impact: 'Directly synthesized from the Trial Balance balances: Classes 1-5 build the Balance Sheet, Classes 6-7 build the Income Statement.'
      }
    ]
  },
  howItWorks: [
    {
      id: 'm3-s1',
      title: 'Debit and Credit: The Universal Rules',
      explanation: `Forget every everyday misconception: "Debit" does not mean loss, and "Credit" does not mean gain!
In accounting:
• DEBIT simply means the LEFT side of an account.
• CREDIT simply means the RIGHT side of an account.

The behavior depends strictly on the category of account:
1. ASSETS & EXPENSES:
   - Debit (+) increases them
   - Credit (-) decreases them
   - Normal ending balance: DEBIT (Solde débiteur)

2. EQUITY, LIABILITIES, & REVENUES:
   - Credit (+) increases them
   - Debit (-) decreases them
   - Normal ending balance: CREDIT (Solde créditeur)

For EVERY single journal entry:
Total Amounts Debited MUST EQUAL Total Amounts Credited.`,
      diagramType: 't-account',
      diagramData: {
        accountNumber: '512',
        accountName: 'Bank Account (Asset)',
        type: 'asset',
        debits: [
          { desc: 'Capital deposit', amount: 50000 },
          { desc: 'Customer check', amount: 18000 }
        ],
        credits: [
          { desc: 'Equipment purchase', amount: 15000 },
          { desc: 'Salary check', amount: 10000 }
        ],
        closingBalance: {
          side: 'debit',
          amount: 43000
        }
      },
      bulletPoints: [
        'Asset / Expense accounts normally have DEBIT balances.',
        'Equity / Debt / Revenue accounts normally have CREDIT balances.'
      ],
      eli10: {
        id: 'eli10-m3-dc',
        title: 'Left Pocket vs Right Pocket',
        concept: 'Debit (Left) vs Credit (Right)',
        analogy: 'Imagine you have two pockets. Your left pocket is for things you possess or consume (Assets & Expenses). When you put a toy or snack in, it goes to the LEFT (Debit). Your right pocket is for who paid for it or promises you made (Equity & Debts). When someone gives you allowance or you borrow money, that goes to the RIGHT (Credit).',
        explanation: 'Every time something goes into your left pocket, you must write in your notebook where it came from in your right pocket. The two pockets must always stay in balance.',
        keyDistinction: 'Your bank statement says "Credit" when you have money because to the bank, your money is a debt they owe to you! In your own books, money in the bank is an Asset and is a DEBIT.',
        reconnect: 'In the company’s general ledger, cash and assets increase on the Debit (left) side.'
      }
    },
    {
      id: 'm3-s2',
      title: 'The French Chart of Accounts (PCG Classes 1 to 7)',
      explanation: `The French Plan Comptable Général organizes accounts into 7 numbered classes:
• BALANCE SHEET CLASSES (1 to 5):
  - Class 1: Equity, Provisions, and Financial Debts (Capitaux, Emprunts)
  - Class 2: Fixed Assets (Immobilisations - Intangible, Tangible, Financial)
  - Class 3: Inventories and Work-in-Progress (Stocks)
  - Class 4: Third-Party Accounts (Comptes de tiers - Suppliers, Customers, State, Personnel)
  - Class 5: Financial Accounts (Comptes financiers - Bank, Cash, Marketable Securities)

• INCOME STATEMENT / MANAGEMENT CLASSES (6 & 7):
  - Class 6: Expenses (Charges - Purchases, External services, Wages, Taxes, Depreciation)
  - Class 7: Revenues (Produits - Sales of goods, Services, Subsidies, Interest received)

Mnemonic: Classes 1-5 belong on the Balance Sheet; Classes 6-7 belong on the Income Statement!`,
      bulletPoints: [
        'Class 2, 3, 5 are mostly Assets.',
        'Class 1 is Equity and Long-term Debt.',
        'Class 4 contains both Assets (Receivables) and Liabilities (Payables).'
      ]
    },
    {
      id: 'm3-s3',
      title: 'The Full Accounting Process Pipeline',
      explanation: `The accounting department follows a mandatory chronological and methodical workflow:
1. Source Documents: Invoices, bank statements, pay slips, contracts.
2. The Journal: Daily chronological recording with account numbers, titles, and debit/credit amounts.
3. The General Ledger (Grand Livre): Posting entries to individual T-accounts to compute cumulative movements and ending balances.
4. The Trial Balance (Balance générale): Tabular summary listing all accounts with total debits, total credits, and net balances. Two checks must hold:
   - Total Debits movements = Total Credits movements
   - Total Debit balances = Total Credit balances
5. Year-End Closing Entries: Adjustments, depreciation, stock variation, provisions.
6. Final Statements: Balance Sheet, Income Statement, Cash Flow Statement, and Annex.
7. Statutory Audit (Commissaire aux comptes): Independent legal verification for sincerity and regular compliance.`,
      diagramType: 'process-flow',
      bulletPoints: [
        'A transaction must never be entered directly into financial statements.',
        'If the Trial Balance does not balance, an arithmetic or posting error exists.'
      ]
    }
  ],
  workedExamples: [
    {
      id: 'ex-m3-1',
      title: 'Full Pipeline: Journal Entry → T-Account → Trial Balance',
      facts: `On August 1, 2026, founders form "Beta Consulting SAS":
1. Founders contribute €200,000 cash deposited into the company bank account.
2. On August 15, Beta buys office equipment for €50,000 paid immediately by bank transfer.
3. On August 20, Beta delivers consulting services billing €80,000 on credit (customer will pay next month).`,
      question: 'Record the journal entries, post to T-accounts, determine ending balances, and verify the Trial Balance.',
      concept: 'The full recording pipeline under PCG standards.',
      method: 'Write journal entries with account numbers, update T-accounts, and compile the trial balance table.',
      steps: [
        'Step 1 - Journal Entry 1 (Capital contribution):\nDebit 512 Bank €200,000\nCredit 101 Share Capital €200,000',
        'Step 2 - Journal Entry 2 (Equipment purchase):\nDebit 218 Office Equipment €50,000\nCredit 512 Bank €50,000',
        'Step 3 - Journal Entry 3 (Credit sale):\nDebit 411 Trade Receivables €80,000\nCredit 706 Services Revenue €80,000',
        'Step 4 - General Ledger Balances:\n• 101 Capital: Credit balance €200,000\n• 218 Equipment: Debit balance €50,000\n• 411 Receivables: Debit balance €80,000\n• 512 Bank: Debits 200k – Credits 50k = Debit balance €150,000\n• 706 Revenue: Credit balance €80,000',
        'Step 5 - Trial Balance Checks:\nTotal Debit Balances = 50k + 80k + 150k = €280,000.\nTotal Credit Balances = 200k + 80k = €280,000.\nEquilibrium confirmed!'
      ],
      journalEntries: [
        { date: '01/08/2026', category: 'Asset', accountNumber: '512', accountName: 'Bank', debit: 200000 },
        { date: '01/08/2026', category: 'Equity', accountNumber: '101', accountName: 'Share Capital', credit: 200000 },
        { date: '15/08/2026', category: 'Asset', accountNumber: '218', accountName: 'Office Equipment', debit: 50000 },
        { date: '15/08/2026', category: 'Asset', accountNumber: '512', accountName: 'Bank', credit: 50000 },
        { date: '20/08/2026', category: 'Asset', accountNumber: '411', accountName: 'Trade Receivables (Customers)', debit: 80000 },
        { date: '20/08/2026', category: 'Revenue', accountNumber: '706', accountName: 'Consulting Services Revenue', credit: 80000 }
      ],
      profitEffect: 'Revenue +€80,000; Expenses €0; Net Income = +€80,000.',
      positionEffect: 'Assets = €280,000 (Bank 150k + Receivables 80k + Equipment 50k); Equity = €280,000 (Capital 200k + Profit 80k); Debt = 0.',
      conclusion: 'The Trial Balance balances at €280,000 on both sides. The accounting equation Assets (€280,000) = Equity (€280,000) holds perfectly.',
      commonWrongTurn: 'Recording the credit sale in the Bank account before cash is received. Always use Account 411 (Customers) for credit sales!'
    }
  ],
  whatMustIRemember: {
    keyTerms: [
      {
        term: 'Debit (Débit)',
        definition: 'Left side of an account. Increases Assets and Expenses; decreases Liabilities, Equity, and Revenues.',
        category: 'concept'
      },
      {
        term: 'Credit (Crédit)',
        definition: 'Right side of an account. Increases Liabilities, Equity, and Revenues; decreases Assets and Expenses.',
        category: 'concept'
      },
      {
        term: 'Journal (Livre-Journal)',
        definition: 'Mandatory accounting book recording all economic operations chronologically day by day.',
        category: 'concept'
      },
      {
        term: 'General Ledger (Grand Livre)',
        definition: 'Collection of all individual T-accounts grouping entries by account number to track balances.',
        category: 'concept'
      },
      {
        term: 'Trial Balance (Balance générale)',
        definition: 'Summary sheet listing all accounts, total debit and credit movements, and debit or credit closing balances.',
        category: 'concept'
      }
    ],
    formulas: [
      {
        name: 'The Double Entry Equilibrium',
        formula: 'Total Debits = Total Credits',
        note: 'Must hold for every entry, the entire journal, and the trial balance.'
      },
      {
        name: 'Account Closing Balance (Solde)',
        formula: 'Solde = Total Debits – Total Credits',
        note: 'If positive: Debit balance. If negative: Credit balance.'
      }
    ],
    doNotConfuse: [
      {
        termA: 'Journal',
        termB: 'General Ledger',
        keyDifference: 'Journal is ordered by DATE (chronological); General Ledger is ordered by ACCOUNT NUMBER (thematic).',
        example: 'Journal lists all entries of Oct 1st; Ledger opens Account 512 Bank and shows its full history.'
      },
      {
        termA: 'Asset vs Expense',
        termB: 'Capitalize vs Expense',
        keyDifference: 'An asset provides economic benefits across several years (depreciated); an expense is consumed immediately.',
        example: 'Buying a €2,000 computer = Asset (Class 2). Buying €50 coffee for staff = Expense (Class 6).'
      }
    ],
    commonTraps: [
      'Assuming Debit always means an increase. (Debiting a Liability or Revenue DECREASES it!)',
      'Forgetting that Accumulated Depreciation is credited (contra-asset).',
      'Confusing the bank statement view (where your deposit is their credit) with the company books view (where deposit is your debit).'
    ],
    memoriseThis: 'Assets & Expenses: UP on Debit (+), DOWN on Credit (-). Liabilities, Equity & Revenues: UP on Credit (+), DOWN on Debit (-). Total Debits must always equal Total Credits!'
  },
  moduleLevelEli10: {
    id: 'eli10-m3-module',
    title: 'The Great Ledger of Left and Right',
    concept: 'Module 3 Synthesis: Double Entry and the Ledger',
    analogy: 'Imagine a seesaw. Every time you place something on the left seat (Debit), you must put an equal weight on the right seat (Credit). If you put €50 on the left (a new bicycle), you must put €50 on the right (saying "Dad lent me €50").',
    explanation: 'The seesaw never tilts. The Journal is your daily diary where you write down every time someone placed weights on the seesaw. The General Ledger has one page for your bicycle, one for your piggy bank, and one for your debt to Dad. At the end of the year, you add them all up in the Trial Balance to prove the seesaw is still perfectly level.',
    keyDistinction: 'Debit and Credit are just the left and right sides of the seesaw.',
    reconnect: 'Because both sides are always equal, errors are immediately spotted if the totals disagree.'
  },
  quiz: [
    {
      id: 'm3-q1',
      moduleId: 'module-3',
      sourceTopic: 'Debit and Credit Rules',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'Which of the following account categories are INCREASED by a DEBIT entry?',
      options: [
        'Assets and Expenses',
        'Liabilities and Revenues',
        'Equity and Liabilities',
        'Revenues and Expenses'
      ],
      correctAnswer: '0',
      rationale: 'Assets and Expenses are increased by Debits and decreased by Credits. Conversely, Equity, Liabilities, and Revenues are increased by Credits and decreased by Debits.',
      misconceptionTargeted: 'Believing all balance sheet accounts increase on the same side.',
      revisitSection: '3.1 Debit and Credit: The Universal Rules'
    },
    {
      id: 'm3-q2',
      moduleId: 'module-3',
      sourceTopic: 'Normal Balances',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'In the French PCG, what is the normal balance of account 411 Trade Receivables and account 401 Trade Payables?',
      options: [
        'Receivables: Debit balance; Payables: Credit balance',
        'Receivables: Credit balance; Payables: Debit balance',
        'Both have Debit balances',
        'Both have Credit balances'
      ],
      correctAnswer: '0',
      rationale: 'Trade receivables is an Asset account (normal balance = Debit). Trade payables is a Liability debt account (normal balance = Credit).',
      misconceptionTargeted: 'Confusing supplier payables with customer receivables.',
      revisitSection: '3.1 Debit and Credit: The Universal Rules'
    },
    {
      id: 'm3-q3',
      moduleId: 'module-3',
      sourceTopic: 'Bank T-Account Interpretation',
      type: 'calculation',
      difficulty: 'application',
      question: 'Here are transactions in Account 512 Bank: Debit side shows 5,000; 2,000. Credit side shows 500. What is the ending balance of the Bank account?',
      correctAnswer: 'Debit balance of € 6,500',
      markingGuide: 'Award full marks for stating Debit balance of €6,500 (5,000 + 2,000 – 500).',
      rationale: 'Total Debits = 5,000 + 2,000 = 7,000. Total Credits = 500. Solde = 7,000 – 500 = +6,500 (Solde débiteur / Debit balance of €6,500).',
      misconceptionTargeted: 'Miscalculating T-account balances or attributing credit side.',
      revisitSection: '3.1 Debit and Credit: The Universal Rules'
    },
    {
      id: 'm3-q4',
      moduleId: 'module-3',
      sourceTopic: 'PCG Account Classes',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'Which classes of the French Plan Comptable Général (PCG) form the Income Statement (Compte de résultat)?',
      options: [
        'Classes 1 to 5',
        'Classes 6 and 7',
        'Classes 2 and 4',
        'Classes 4 and 5'
      ],
      correctAnswer: '1',
      rationale: 'Classes 1 to 5 are Balance Sheet accounts. Classes 6 (Expenses / Charges) and 7 (Revenues / Produits) are management accounts forming the Income Statement.',
      misconceptionTargeted: 'Mixing balance sheet classes with income statement classes.',
      revisitSection: '3.2 The French Chart of Accounts'
    },
    {
      id: 'm3-q5',
      moduleId: 'module-3',
      sourceTopic: 'Cash Withdrawal Entry',
      type: 'journal-entry',
      difficulty: 'application',
      question: 'On September 15, the manager withdraws €750 in cash from the company bank account to replenish the office cash box (Petty cash). Record the accounting entry.',
      correctAnswer: 'Debit 53 Cash on hand €750; Credit 51 Bank €750.',
      markingGuide: 'Debit Account 53 (Cash/Caisse) 750, Credit Account 51 (Bank/Banque) 750.',
      rationale: 'One asset increases (53 Cash on hand is debited for 750) and another asset decreases (51 Bank is credited for 750). This is a pure internal cash transfer with zero impact on profit.',
      misconceptionTargeted: 'Recording cash withdrawals as personal expenses or equity withdrawals.',
      revisitSection: '3.1 Debit and Credit: The Universal Rules',
      journalEntries: [
        { category: 'Asset', accountNumber: '53', accountName: 'Cash on hand (Caisse)', debit: 750 },
        { category: 'Asset', accountNumber: '51', accountName: 'Bank (Banque)', credit: 750 }
      ]
    },
    {
      id: 'm3-q6',
      moduleId: 'module-3',
      sourceTopic: 'Capital Increase Entry',
      type: 'journal-entry',
      difficulty: 'application',
      question: 'On September 1, shareholders subscribe and pay a share capital increase of €20,000 by delivering bank checks to the company. Record the entry.',
      correctAnswer: 'Debit 51 Bank €20,000; Credit 10 Capital €20,000.',
      markingGuide: 'Debit Account 51 Bank 20,000, Credit Account 10 Share Capital 20,000.',
      rationale: 'Bank asset increases by €20,000 (debit), and Share Capital equity increases by €20,000 (credit).',
      misconceptionTargeted: 'Crediting revenue for a capital contribution.',
      revisitSection: '4. How to Solve an Exam-Style Problem',
      journalEntries: [
        { category: 'Asset', accountNumber: '51', accountName: 'Bank', debit: 20000 },
        { category: 'Equity', accountNumber: '10', accountName: 'Share Capital', credit: 20000 }
      ]
    },
    {
      id: 'm3-q7',
      moduleId: 'module-3',
      sourceTopic: 'Trial Balance Purpose',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'What is the primary control function of the Trial Balance (Balance générale)?',
      options: [
        'To compute the income tax owed to the state',
        'To verify that Total Debit movements equal Total Credit movements, and Total Debit balances equal Total Credit balances',
        'To replace the Balance Sheet in public filings',
        'To list employee salaries chronologically'
      ],
      correctAnswer: '1',
      rationale: 'The Trial Balance tests the integrity of the ledger. Because of double entry, total debit movements must equal total credit movements, and total debit balances must equal total credit balances.',
      misconceptionTargeted: 'Believing the trial balance is a final financial statement.',
      revisitSection: '3.3 The Full Accounting Process Pipeline'
    },
    {
      id: 'm3-q8',
      moduleId: 'module-3',
      sourceTopic: 'Statement Impact of Loan Repayment',
      type: 'mcq',
      difficulty: 'exam-style',
      question: 'Which of the following journal entries has NO impact on net income and NO impact on total cash?',
      options: [
        'Recording a cash purchase of raw materials',
        'Recording a credit purchase of property, plant, and equipment (PP&E)',
        'Recording the repayment of a bank loan by bank transfer',
        'Recording the annual depreciation expense'
      ],
      correctAnswer: '1',
      rationale: 'A credit purchase of PP&E debits Fixed Assets (Class 2) and credits Fixed Asset Suppliers (Class 404). Neither Net Income (no expense recorded) nor Cash (no payment made yet) is impacted! Cash purchase touches cash; loan repayment touches cash; depreciation touches net income.',
      misconceptionTargeted: 'Assuming asset purchases always touch cash immediately.',
      revisitSection: '3.1 Debit and Credit: The Universal Rules'
    },
    {
      id: 'm3-q9',
      moduleId: 'module-3',
      sourceTopic: 'Statutory Audit',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'In France, what is the official role of the Statutory Auditor (Commissaire aux comptes)?',
      options: [
        'To maintain the daily accounting journal for the manager',
        'To calculate and collect value added tax on behalf of the tax office',
        'To express an independent legal opinion on the regularity and sincerity of the company’s financial statements',
        'To decide the amount of dividends distributed to shareholders'
      ],
      correctAnswer: '2',
      rationale: 'The Statutory Auditor is an independent regulated professional whose mission is to audit the accounts and certify that they provide a regular, sincere, and true and fair view.',
      misconceptionTargeted: 'Confusing statutory auditors with internal accountants or tax inspectors.',
      revisitSection: '3.3 The Full Accounting Process Pipeline'
    },
    {
      id: 'm3-q10',
      moduleId: 'module-3',
      sourceTopic: 'Spot the Error',
      type: 'spot-the-error',
      difficulty: 'exam-style',
      question: 'An intern recorded this entry for a €5,000 cash loan obtained from the bank:\nDebit: 512 Bank €5,000\nDebit: 164 Bank Loans €5,000\nWhat is the error in this entry and what will happen to the trial balance?',
      correctAnswer: 'Both accounts were debited! Bank Loans (Account 164) is a liability and MUST be CREDITED to show an increase in debt. The trial balance will be out of balance by €10,000 (debits will exceed credits by €10,000).',
      markingGuide: 'Must point out that Account 164 should be credited and that debits exceed credits.',
      rationale: 'An increase in bank borrowing is an increase in liabilities, which requires a CREDIT to Account 164. Debiting both accounts violates the core double-entry rule and breaks trial balance equilibrium.',
      misconceptionTargeted: 'Debiting liabilities when they increase.',
      revisitSection: '3.1 Debit and Credit: The Universal Rules'
    },
    {
      id: 'm3-q11',
      moduleId: 'module-3',
      sourceTopic: 'Asset vs Expense Distinction',
      type: 'mcq',
      difficulty: 'application',
      question: 'Why is an office desk costing €600 capitalized as a Fixed Asset (Class 2), whereas office printer paper costing €600 is recorded as an Expense (Class 6)?',
      options: [
        'Because desks are made of wood and paper is disposable',
        'Because the desk will provide economic utility to the business over multiple future fiscal years, while the paper is consumed during the current operating period',
        'Because French law prohibits recording furniture as expenses',
        'Because the desk was paid by check and the paper was paid in cash'
      ],
      correctAnswer: '1',
      rationale: 'The economic criterion for an asset is the expectation of future economic benefits across multiple periods. Consumables used up in the operating cycle are immediate expenses.',
      misconceptionTargeted: 'Believing capitalization depends solely on price or material.',
      revisitSection: '3.2 The French Chart of Accounts'
    },
    {
      id: 'm3-q12',
      moduleId: 'module-3',
      sourceTopic: 'Double Entry Principle',
      type: 'true-false',
      difficulty: 'foundation',
      question: 'The double-entry rule means every transaction is recorded in two different journals on the same day.',
      options: ['True', 'False', 'Don’t know'],
      correctAnswer: '1',
      rationale: 'False. Double entry means every single transaction enters at least two amounts (one debit and one credit) into at least two accounts in the SAME journal, maintaining mathematical equilibrium.',
      misconceptionTargeted: 'Confusing double entry with keeping two sets of books.',
      revisitSection: '3.1 Debit and Credit: The Universal Rules'
    }
  ],
  worksheetBridge: {
    exerciseTitle: 'Verdi Case (Part 2) — Journal, Ledger & Trial Balance',
    exerciseFiles: [
      'Exercises/2 Verdi - Case handout.pdf',
      'Exercises/2 Verdi - Students worksheet.xlsx'
    ],
    context: 'Verdi Part 2 takes the 8 transactions from Part 1 and guides students through the exact PCG mechanical pipeline: coding accounts, debiting and crediting, posting to the Grand Livre, and compiling the Trial Balance.',
    finderGuidance: 'Open Exercises/2 Verdi - Students worksheet.xlsx. The "Journal" and "GL & TB" tabs feature automated formulas verifying debit-credit equality.',
    stepChecklist: [
      'For each transaction, determine which accounts are debited and credited.',
      'Enter transactions into the Journal in chronological order.',
      'Check that total debits equal total credits for every individual line.',
      'Post each amount to its respective T-account in the General Ledger.',
      'Calculate the closing balance (Solde) for each T-account.',
      'Carry forward opening balances (OB) and enter closing balances (CB) into the Trial Balance.',
      'Verify the two Trial Balance balance conditions (Movements Total Dr = Cr; Balances Total Dr = Cr).',
      'Proceed to financial statement drafting.'
    ],
    templateHeaders: {
      given: 'Economic vouchers and transaction amounts.',
      issue: 'Account numbers and debit/credit orientation.',
      rule: 'Total Debits = Total Credits; Assets/Expenses (+Dr/-Cr); Liabilities/Equity/Revenues (+Cr/-Dr).',
      calculation: 'Debit and credit balance summation.',
      journalEntry: 'Standard PCG format table.',
      profitEffect: 'Impact on Class 6 & 7.',
      positionEffect: 'Impact on Class 1 to 5.',
      conclusion: 'Trial balance balance verification.'
    }
  },
  recap: {
    takeaways: [
      'Debit = Left; Credit = Right. Neither is inherently good or bad.',
      'Assets and Expenses increase on Debit (+); Liabilities, Equity, and Revenues increase on Credit (+).',
      'PCG Classes 1–5 are Balance Sheet accounts; Classes 6–7 are Income Statement accounts.',
      'The Trial Balance verifies two equalities: Movement Debits = Credits, and Balance Debits = Credits.',
      'Every transaction requires at least two accounts with matching debit and credit totals.'
    ],
    recallPrompts: [
      '“Debit is left; Credit is right.”',
      '“Assets and Expenses go UP on Debit; Liabilities, Equity, and Revenues go UP on Credit.”',
      '“The Trial Balance proves the seesaw is level before drafting statements.”'
    ],
    coreRule: 'For every single entry, Total Debits MUST equal Total Credits. If they do not match, the books are broken!'
  }
};
