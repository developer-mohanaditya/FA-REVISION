import { ModuleContent } from '../../types';

export const module6Data: ModuleContent = {
  id: 'module-6',
  number: 6,
  title: 'End-of-Period Entries: Adjustments, Inventory, Impairment & Provisions',
  subtitle: 'The 4 year-end cut-offs (accruals/deferrals), periodic stock variation, current asset impairments, and liability provisions.',
  sourceBadge: 'Based on Session 5 & 6 slides',
  estimatedMinutes: 55,
  objectives: [
    'Master the 4 year-end cut-off adjustments: Accrued Expenses (408), Accrued Income (418), Prepaid Expenses (486), and Deferred Income (487).',
    'Calculate and record periodic inventory changes for purchased goods (BI – CI) and finished goods production (CI – BI).',
    'Understand why LIFO was mentioned in slide overviews but is strictly prohibited under French PCG rules (FIFO and WAC only).',
    'Test and record impairments on current assets: Trade Receivables (using ex-VAT base!), Inventories (Net Realizable Value), and Marketable Securities (average December market price).',
    'Apply the 3 cumulative criteria for recognizing a Provision for Risks and Charges (Account 15) vs Contingent Liabilities.',
    'Trace reversal entries (Account 78 Reversals) when risks decrease or disappear in subsequent fiscal years.'
  ],
  youWillUseThisWhen: 'You perform the December 31 closing entries (the core of the Rex case in Part 2 of the final exam), adjusting prepaid insurance, unbilled water/electricity, doubtful customers in receivership, and inventory counts.',
  whyItMatters: {
    economicPurpose: 'At the stroke of midnight on December 31, bills are in transit, goods are delivered without invoices, and customers are struggling to pay. End-of-period entries enforce the Independence of Fiscal Years and Prudence principles, ensuring that revenues and expenses are matched strictly to the year they belong to.',
    statementImpacts: [
      {
        statement: 'Balance Sheet (Bilan)',
        impact: 'Adjustments create cut-off accounts: Prepaid Expenses (486) in current assets; Deferred Income (487) in current liabilities; Provisions (15) under equity; Impairments (39, 49, 59) deducting asset carrying amounts.'
      },
      {
        statement: 'Income Statement (Compte de résultat)',
        impact: 'Cut-offs neutralize revenues/expenses belonging to next year and pull in unbilled items. Net Income reflects true economic performance for the exact 12-month period.'
      },
      {
        statement: 'Cash Flow Statement',
        impact: 'Adjusting entries and inventory variations are entirely non-cash adjustments that have zero immediate cash impact.'
      }
    ]
  },
  howItWorks: [
    {
      id: 'm6-s1',
      title: 'The 4 Year-End Adjusting Entries (Régularisations de fin d’exercice)',
      explanation: `To uphold the Independence of Fiscal Years, accounting uses 4 cut-off mechanisms:
1. ACCRUED EXPENSES (Charges à payer - Account 408):
   - Economic reality: Goods/services consumed in Year N, but supplier has not issued invoice by 31/12.
   - Entry on 31/12/N: Debit 6xx Operating Expense / Credit 408 Suppliers - Invoices not yet received.
   - Impact: Increases Year N expenses; reversed on 01/01/N+1.

2. ACCRUED INCOME (Produits à recevoir - Account 418):
   - Economic reality: Goods delivered or services performed in Year N, but invoice not yet sent by 31/12.
   - Entry on 31/12/N: Debit 418 Customers - Invoices to be issued / Credit 7xx Operating Revenue.
   - Impact: Increases Year N revenues; reversed on 01/01/N+1.

3. PREPAID EXPENSES (Charges constatées d'avance - Account 486):
   - Economic reality: Invoice received and recorded in Year N, but goods/services will be consumed in Year N+1 (e.g. annual insurance paid April 1 covering April N to March N+1).
   - Entry on 31/12/N: Debit 486 Prepaid Expenses (Asset +) / Credit 6xx Operating Expense (Expense -).
   - Impact: Reduces Year N expenses; re-establishes expense in Year N+1.

4. DEFERRED INCOME (Produits constatés d'avance - Account 487):
   - Economic reality: Invoice issued in Year N, but service/goods will be provided in Year N+1 (e.g. rent billed 3 months in advance).
   - Entry on 31/12/N: Debit 7xx Operating Revenue (Revenue -) / Credit 487 Deferred Income (Liability +).
   - Impact: Reduces Year N revenues; shifts revenue to Year N+1.`,
      bulletPoints: [
        'Prepaid Expenses = Asset (Debit 486 / Credit 6xx).',
        'Deferred Income = Liability (Debit 7xx / Credit 487).',
        'Accrued Expenses = Liability (Debit 6xx / Credit 408).',
        'Accrued Income = Asset (Debit 418 / Credit 7xx).'
      ],
      eli10: {
        id: 'eli10-m6-adjust',
        title: 'The Gym Pass and the Phone Bill',
        concept: 'Prepaid Expenses vs Accrued Expenses',
        analogy: 'Imagine you pay €120 on December 1 for a 3-month winter snowboarding pass (December, January, February). On December 31, you only used 1 month (€40). The other 2 months (€80) belong to next year. So on December 31, you take €80 off this year’s expenses and save it as a "Prepaid Ticket" (Asset).',
        explanation: 'Conversely, you used your phone all December, but your dad won’t get the bill until mid-January. You must count that phone cost in December anyway, because that is when you talked on the phone!',
        keyDistinction: 'Cash payment date does not determine the year of the expense; usage does.',
        reconnect: 'Prepaid expenses are parked in Account 486; accrued expenses in Account 408.'
      }
    },
    {
      id: 'm6-s2',
      title: 'End-of-Period Inventory Tracking & Variation',
      explanation: `French accounting uses the Periodic Inventory System (Inventaire intermittent).
During the year, purchases are simply booked in Class 6 (Account 601 or 607). At year-end, physical stocktaking determines ending inventory.
Two closing entries are performed on 31/12:
1. Cancel Beginning Inventory (BI / Stock initial):
   • Debit 603 Change in Inventory / Credit 3x Inventory (BI)
2. Recognize Ending Inventory (CI / Stock final):
   • Debit 3x Inventory (CI) / Credit 603 Change in Inventory

CRITICAL INVENTORY VARIATION RULES:
• Purchased Goods (Raw Materials / Merchandise):
  Consumption (COGS) = Purchases + (Beginning Inventory – Ending Inventory).
  Change in Inventory = BI – CI.
  If Ending > Beginning: Stock increased → Change is negative in expenses → Expenses DECREASE!

• Manufactured Finished Goods (Produits finis):
  Change in Finished Goods = CI – BI (Account 713 Variation des stocks de produits finis).
  If Ending > Beginning: Stock increased → Account 713 is CREDITED → Revenues INCREASE!

[Source Note: LIFO was shown in the slide overview as an academic method, but is strictly prohibited under French PCG rules; only FIFO and Weighted Average Cost (WAC) are used].`,
      bulletPoints: [
        'Raw Materials / Merchandise: Change = BI – CI (Expense adjustment in Account 603).',
        'Finished Goods: Change = CI – BI (Production stored in Account 713 on revenue side).'
      ]
    },
    {
      id: 'm6-s3',
      title: 'Impairment of Current Assets: Receivables, Inventory, Securities',
      explanation: `1. Impairment of Trade Receivables (Créances clients douteuses):
• If a customer is in receivership or default, evaluate the probable loss.
• CRITICAL COURSE EXAM RULE: The impairment is calculated EXCLUSIVELY ON THE EX-VAT AMOUNT (Hors Taxes / HT)!
  Why? Because if the customer definitively defaults, the VAT already paid will be refunded by the French tax authorities!
• Gross ex-VAT amount – Estimated recoverable amount = Impairment Loss.
• Entry: Debit 681 Impairment Loss / Credit 491 Loss allowance - trade receivables.

2. Impairment of Inventory:
• If Net Realizable Value (estimated selling price less selling costs) < Historical Cost:
• Entry: Debit 681 Impairment Loss / Credit 39 Loss allowance - inventory.

3. Impairment of Marketable Securities (Valeurs mobilières de placement / VMP):
• Evaluated based on the average stock market price of the last month of the fiscal year (December).
• If average December market price < acquisition cost: Record impairment loss (Debit 686 / Credit 59).
• If market price > acquisition cost: Do NOTHING! Potential capital gains are never recorded (Prudence principle).

Reversals (Reprises): If a prior risk decreases or disappears, record a Reversal:
• Debit X9 Loss Allowance / Credit 78 Reversal of Impairment Loss (Operating 781 or Financial 786).`,
      bulletPoints: [
        'Receivable impairment is strictly calculated on EX-VAT amounts.',
        'Securities impairment uses average December price; unrealized capital gains are ignored.'
      ],
      eli10: {
        id: 'eli10-m6-receiv',
        title: 'The Friend Who Owed You Cupcake Money',
        concept: 'Impairment of Receivables (Ex-VAT Rule)',
        analogy: 'A classmate bought €12 worth of cupcakes from you on credit (€10 cupcakes + €2 tax for the school). Later, his mom tells you he lost his wallet and can only repay 70% of his debt.',
        explanation: 'You will only lose €3 on the cupcakes, not on the €2 school tax! If he fails to pay, the school cancels the €2 tax for you. So you only write down your loss on the €10 cupcakes (ex-tax), which is €3.',
        keyDistinction: 'The government takes back the VAT risk; the business only takes the ex-tax risk.',
        reconnect: 'In accounting, receivable impairment in Account 491 is computed strictly on the HT amount.'
      }
    },
    {
      id: 'm6-s4',
      title: 'Provisions for Risks and Charges (Account 15)',
      explanation: `A Provision is a liability where timing or amount is uncertain, but an outflow of resources is probable.
Three Cumulative Criteria to Recognize a Provision (PCG):
1. An obligation to a third party exists at the reporting date.
2. An outflow of economic resources is PROBABLE or CERTAIN.
3. No equivalent consideration is expected from that third party after the closing date.

Liabilities vs Provisions vs Contingent Liabilities:
• Debt (Dette): Obligation present; maturity fixed; amount known (e.g. supplier invoice).
• Provision (15): Obligation present; maturity uncertain; amount best estimate (e.g. pending labor dispute, product warranties).
• Contingent Liability (Passif éventuel): Obligation not probable or condition not met (e.g. frivolous lawsuit). Disclosed only in the Annex notes; ZERO journal entry!

Entries:
• To record a provision: Debit 68 Provision Expense / Credit 15 Provisions.
• To reverse a provision: Debit 15 Provisions / Credit 78 Reversal of Provision.`,
      bulletPoints: [
        'Provisions sit in Class 1 on the balance sheet under Liabilities.',
        'Contingent liabilities are NOT recorded in the balance sheet; only described in notes.'
      ]
    }
  ],
  workedExamples: [
    {
      id: 'ex-m6-1',
      title: 'Year-End Close: Prepaid Insurance, Customer Impairment & Litigation Provision (Rex / Windsurf S5/S6 format)',
      facts: `As of December 31, 2026, enterprise "Rex Logistics" has the following files:
1. Annual Insurance Premium: On April 1, 2026, Rex paid its annual liability insurance of €18,000 for the period April 1, 2026 to March 31, 2027. (Insurance is exempt from VAT).
2. Doubtful Customer: Customer "Beau Rivage" owes €12,000 including 20% VAT. The customer is in receivership; the receiver estimates they will repay 60% of their debt.
3. Inventory: Beginning merchandise inventory on 01/01/2026 was €10,000; Ending inventory on 31/12/2026 is €14,000.
4. Labor Dispute: A dismissed employee sued Rex. Company lawyers estimate a probable payout of €8,000 in 2027. Prior provision on 31/12/2025 was €10,000.`,
      question: 'Prepare the adjusting journal entries as of December 31, 2026.',
      concept: 'Prepaid expense adjustment, ex-VAT receivable impairment, inventory variation, and provision reversal.',
      method: 'Calculate monthly fractions for insurance, ex-VAT base for customer impairment, stock difference, and provision adjustment.',
      steps: [
        'Step 1 - Prepaid Insurance:\nTotal premium = 18,000 for 12 months = 1,500/month.\nMonths in 2026 (April to Dec) = 9 months (13,500).\nMonths in 2027 (Jan to March) = 3 months (4,500).\nPrepaid expense to remove from 2026: 18,000 × (3/12) = €4,500.\nDebit 486 Prepaid Expenses €4,500 / Credit 616 Insurance Expense €4,500.',
        'Step 2 - Doubtful Customer Impairment:\nGross TTC = 12,000 → Gross HT = 12,000 / 1.20 = €10,000.\nExpected payment = 60% → Probable loss rate = 40%.\nImpairment loss = €10,000 HT × 40% = €4,000.\nDebit 681 Impairment Loss on Current Assets €4,000 / Credit 491 Loss allowance - trade receivables €4,000.',
        'Step 3 - Merchandise Inventory Variation:\nCancel Beginning Inventory: Debit 6037 Change in Inventory €10,000 / Credit 37 Inventory €10,000.\nRecognize Ending Inventory: Debit 37 Inventory €14,000 / Credit 6037 Change in Inventory €14,000.\nNet effect: Inventory increases by €4,000; Account 6037 net credit of €4,000 reduces merchandise expenses.',
        'Step 4 - Provision Adjustment:\nEstimated probable payout needed = €8,000.\nOpening provision on books = €10,000.\nRisk has decreased by €2,000 (10,000 – 8,000). Record a REVERSAL of €2,000:\nDebit 151 Provisions for Risks €2,000 / Credit 781 Reversal of Operating Provisions €2,000.'
      ],
      journalEntries: [
        { date: '31/12/2026', category: 'Asset', accountNumber: '486', accountName: 'Prepaid Expenses (3 mos insurance)', debit: 4500 },
        { category: 'Expense', accountNumber: '616', accountName: 'Insurance Expense', credit: 4500 },
        { date: '31/12/2026', category: 'Expense', accountNumber: '681', accountName: 'Impairment Loss on Trade Receivables (HT)', debit: 4000 },
        { category: 'Asset', accountNumber: '491', accountName: 'Loss Allowance – Trade Receivables', credit: 4000 },
        { date: '31/12/2026', category: 'Expense', accountNumber: '6037', accountName: 'Change in Merchandise Inventory (Cancel BI)', debit: 10000 },
        { category: 'Asset', accountNumber: '37', accountName: 'Merchandise Inventory (Cancel BI)', credit: 10000 },
        { date: '31/12/2026', category: 'Asset', accountNumber: '37', accountName: 'Merchandise Inventory (Recognize CI)', debit: 14000 },
        { category: 'Expense', accountNumber: '6037', accountName: 'Change in Merchandise Inventory (Recognize CI)', credit: 14000 },
        { date: '31/12/2026', category: 'Liability', accountNumber: '151', accountName: 'Provisions for Risks', debit: 2000 },
        { category: 'Revenue', accountNumber: '781', accountName: 'Reversal of Operating Provisions', credit: 2000 }
      ],
      profitEffect: 'Prepaid insurance adds +4,500 to profit; Impairment costs -4,000; Inventory change saves +4,000; Provision reversal adds +2,000. Net profit improvement = +€6,500.',
      positionEffect: 'Prepaid assets +4,500; Inventory +4,000 net; Customer receivables allowance -4,000; Provisions liability reduced to €8,000.',
      conclusion: 'All end-of-period entries strictly match Year N reality. Expenses belonging to 2027 are postponed; risks are prudently recognized on ex-tax bases.',
      commonWrongTurn: 'Calculating customer impairment on €12,000 TTC (which would wrongly give €4,800 instead of €4,000), or forgetting that provision decreases are recorded as credit REVERSALS (78).'
    }
  ],
  whatMustIRemember: {
    keyTerms: [
      {
        term: 'Prepaid Expenses (486)',
        definition: 'Expenses recorded in Year N relating to goods/services to be consumed in Year N+1; Asset account.',
        category: 'asset'
      },
      {
        term: 'Accrued Expenses (408)',
        definition: 'Expenses consumed in Year N for which the supplier invoice will only arrive in Year N+1; Liability account.',
        category: 'liability'
      },
      {
        term: 'Provision for Risks (15)',
        definition: 'Present obligation with probable outflow of resources where timing or amount is estimated; Liability account.',
        category: 'liability'
      },
      {
        term: 'Reversal (Reprise - 78)',
        definition: 'Income account credited when a past impairment or provision is decreased or extinguished.',
        category: 'revenue'
      }
    ],
    formulas: [
      {
        name: 'Change in Purchased Inventory',
        formula: 'Stock Variation = Beginning Inventory (BI) – Ending Inventory (CI)',
        note: 'COGS = Purchases + (BI – CI). If CI > BI, expenses decrease!'
      },
      {
        name: 'Receivable Impairment Loss',
        formula: 'Impairment = Gross Amount (ex-VAT) × Uncollectible Percentage',
        note: 'Never calculate impairment on the VAT-inclusive amount!'
      },
      {
        name: 'Net Realizable Value (Inventory)',
        formula: 'NRV = Estimated Selling Price – Costs to Complete & Sell',
        note: 'If NRV < Cost, record impairment for the difference.'
      }
    ],
    doNotConfuse: [
      {
        termA: 'Prepaid Expense (486)',
        termB: 'Accrued Expense (408)',
        keyDifference: 'Prepaid: Paid too early (remove from Year N); Accrued: Invoice hasn’t arrived yet (add to Year N).',
        example: 'Insurance paid in advance = 486 (Asset); Electricity bill coming in January = 408 (Liability).'
      },
      {
        termA: 'Provision (15)',
        termB: 'Contingent Liability',
        keyDifference: 'Provision has probable outflow (recorded in B/S); Contingent liability is improbable (disclosed only in Notes).',
        example: 'Probable lawsuit loss = Account 15; Frivolous ungrounded claim = Note only.'
      }
    ],
    commonTraps: [
      'Calculating receivable impairment on the TTC amount. (VAT is refunded by the State if defaulted; impair strictly ex-VAT!).',
      'Thinking finished goods stock variation is BI – CI. (Finished goods is CI – BI in Account 713 on the revenue side!).',
      'Forgetting that recording an impairment or provision requires ZERO cash.'
    ],
    memoriseThis: 'Cut-offs: 486 (Prepaid Asset) / 408 (Accrued Debt). Receivables Impairment is STRICTLY EX-VAT! Stock change for purchases = BI – CI; for finished goods = CI – BI!'
  },
  moduleLevelEli10: {
    id: 'eli10-m6-module',
    title: 'The New Year’s Eve Clean-Up',
    concept: 'Module 6 Synthesis: End-of-Period Cut-Offs and Prudence',
    analogy: 'Imagine at midnight on December 31, your parents say: "Let’s settle all your chores for this year." If you paid for 12 months of magazine subscriptions in October, you take back the 9 months that belong to next year. If you promised your friend €10 for mowing the lawn yesterday but haven’t paid yet, you write down an IOU today.',
    explanation: 'If a friend who borrowed €10 for snacks might only pay back €6, you prudently expect to lose €4 today. You don’t wait until next year to admit it. That is what accountants do on December 31: they clean up the calendar so this year’s report card only shows this year’s true grades.',
    keyDistinction: 'Adjustments move numbers across years; impairments anticipate bad news.',
    reconnect: 'This is the direct application of the Independence of Fiscal Years and Prudence principles.'
  },
  quiz: [
    {
      id: 'm6-q1',
      moduleId: 'module-6',
      sourceTopic: 'Prepaid Rent Adjustment',
      type: 'mcq',
      difficulty: 'application',
      question: 'On November 15, Year N, a company pays €12,000 ex-VAT for rent covering December 1, Year N to February 28, Year N+1 (3 months). What adjusting entry is recorded on December 31, Year N?',
      options: [
        'Accrued expense of €12,000',
        'Prepaid expense of €8,000 (2 months out of 3 relating to Year N+1)',
        'Prepaid expense of €4,000',
        'Deferred income of €8,000'
      ],
      correctAnswer: '1',
      rationale: 'Rent per month = €12,000 / 3 = €4,000/month. 1 month (Dec) belongs to Year N (€4,000). 2 months (Jan & Feb) belong to Year N+1 (€8,000). To remove the Year N+1 portion from Year N expenses, record a Prepaid Expense of €8,000 (Debit 486 / Credit 613).',
      misconceptionTargeted: 'Confusing prepaid expenses with accrued expenses or calculating the wrong number of months.',
      revisitSection: '3.1 The 4 Year-End Adjusting Entries'
    },
    {
      id: 'm6-q2',
      moduleId: 'module-6',
      sourceTopic: 'Receivable Impairment ex-VAT Rule',
      type: 'calculation',
      difficulty: 'exam-style',
      question: 'On December 31, Year N, a customer owes €12,000 including 20% VAT. The customer is in financial difficulty; the company estimates the customer will only pay 60% of the amount owed. What is the impairment loss to record?',
      options: [
        '€ 4,800 (40% of €12,000)',
        '€ 4,000 (40% of €10,000 ex-VAT)',
        '€ 7,200',
        '€ 6,000'
      ],
      correctAnswer: '1',
      rationale: 'Under French accounting rules, the VAT included in receivables is NOT impaired because it will be recovered from the tax administration if uncollectible. Gross ex-VAT amount = 12,000 / 1.20 = €10,000. Probable loss = 100% – 60% = 40%. Impairment loss = €10,000 × 40% = €4,000.',
      misconceptionTargeted: 'Impairing the VAT-inclusive receivable amount.',
      revisitSection: '3.3 Impairment of Current Assets'
    },
    {
      id: 'm6-q3',
      moduleId: 'module-6',
      sourceTopic: 'Finished Goods Inventory Impact',
      type: 'mcq',
      difficulty: 'application',
      question: 'An increase in finished goods inventory during a fiscal year (Ending inventory > Beginning inventory) results in:',
      options: [
        'An increase in expenses',
        'An increase in revenues (Stocked production - Account 713)',
        'A decrease in revenues',
        'No impact on the income statement'
      ],
      correctAnswer: '1',
      rationale: 'For manufactured finished goods, change in inventory is CI – BI (Account 713 Variation des stocks de produits finis). When ending inventory exceeds beginning inventory, production was stored rather than sold, resulting in an increase in revenues (credit to Account 713).',
      misconceptionTargeted: 'Treating finished goods stock variation like purchased goods stock variation.',
      revisitSection: '3.2 End-of-Period Inventory Tracking'
    },
    {
      id: 'm6-q4',
      moduleId: 'module-6',
      sourceTopic: 'Marketable Securities Impairment',
      type: 'mcq',
      difficulty: 'exam-style',
      question: 'In September Year N, a company acquired 200 shares in a listed company at €12.00 per share. The average share price in December Year N was €12.40. As of December 31, Year N, the company must recognize:',
      options: [
        'Financial income of €80',
        'A reversal of impairment',
        'A reversal of provisions',
        'Nothing (no entry to record on December 31, Year N)'
      ],
      correctAnswer: '3',
      rationale: 'Because average December market price (€12.40) exceeds acquisition cost (€12.00), there is an unrealized capital gain. Under the Prudence principle, unrealized capital gains are NEVER recognized. Hence, no entry is recorded.',
      misconceptionTargeted: 'Recording unrealized capital gains on marketable securities.',
      revisitSection: '3.3 Impairment of Current Assets'
    },
    {
      id: 'm6-q5',
      moduleId: 'module-6',
      sourceTopic: 'Provision Criteria',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'Which of the following is NOT one of the 3 cumulative criteria required to recognize a Provision for Risks and Charges?',
      options: [
        'An obligation to a third party exists at the reporting date',
        'An outflow of economic resources is probable or certain',
        'The exact cash amount has been approved in writing by the bank manager',
        'No consideration at least equivalent to the outflow is expected after closing'
      ],
      correctAnswer: '2',
      rationale: 'The 3 criteria are: (1) present obligation to a third party, (2) probable or certain resource outflow, and (3) no equivalent consideration expected. Bank approval is never a requirement for recognizing a liability provision.',
      misconceptionTargeted: 'Thinking provisions require external bank authorization.',
      revisitSection: '3.4 Provisions for Risks and Charges'
    },
    {
      id: 'm6-q6',
      moduleId: 'module-6',
      sourceTopic: 'Accrued Expense Journal Entry',
      type: 'journal-entry',
      difficulty: 'application',
      question: 'Due to an administrative issue, the invoice for 2026 water consumption of €18,000 ex-VAT will only be issued in January 2027. Record the adjusting entry on December 31, 2026.',
      correctAnswer: 'Debit 606 Water & energy consumption €18,000; Credit 408 Trade Payables - Invoices not yet received €18,000.',
      markingGuide: 'Debit operating expense (Class 60) for 18,000; Credit Account 408 (Invoices not yet received) for 18,000.',
      rationale: 'This is an Accrued Expense (Charge à payer). Water was consumed in 2026, so Year 2026 expense must be recognized: Debit Account 6061 Water €18,000; Credit Account 408 Suppliers - Invoices not yet received €18,000.',
      misconceptionTargeted: 'Delaying recording until invoice arrives or using Bank account.',
      revisitSection: '3.1 The 4 Year-End Adjusting Entries',
      journalEntries: [
        { category: 'Expense', accountNumber: '6061', accountName: 'Water and Energy Consumption', debit: 18000 },
        { category: 'Liability', accountNumber: '408', accountName: 'Trade Payables – Invoices not yet received', credit: 18000 }
      ]
    },
    {
      id: 'm6-q7',
      moduleId: 'module-6',
      sourceTopic: 'Inventory Valuation and LIFO',
      type: 'true-false',
      difficulty: 'foundation',
      question: 'Under French PCG accounting rules, companies are permitted to use the LIFO (Last-In, First-Out) method for year-end inventory valuation.',
      options: ['True', 'False', 'Don’t know'],
      correctAnswer: '1',
      rationale: 'False. While LIFO was mentioned in the course slide overview as an academic method, French GAAP (PCG) strictly prohibits LIFO. Only FIFO (First-In, First-Out) and Weighted Average Cost (WAC / CMP) are authorized.',
      misconceptionTargeted: 'Believing LIFO is acceptable under French statutory accounting.',
      revisitSection: '3.2 End-of-Period Inventory Tracking'
    },
    {
      id: 'm6-q8',
      moduleId: 'module-6',
      sourceTopic: 'Provision Reversal Entry',
      type: 'journal-entry',
      difficulty: 'exam-style',
      question: 'A provision for litigation of €10,000 had been recognized on 31/12/N-1. On 31/12/N, the dispute is settled out of court for €8,000 paid immediately by check. Record the payment and the provision reversal.',
      correctAnswer: '1) Debit 671 / 658 Exceptional Expense €8,000 / Credit 512 Bank €8,000; 2) Debit 151 Provisions €10,000 / Credit 781 Reversal of Provisions €10,000.',
      markingGuide: 'Award marks for recording the cash expense of 8,000 and the full reversal of the 10,000 provision to Account 78.',
      rationale: 'Step 1: The actual disbursement is recorded: Debit Expense €8,000 / Credit 512 Bank €8,000. Step 2: The old provision of €10,000 is fully extinguished: Debit 151 Provisions €10,000 / Credit 781 Reversal of Operating Provisions €10,000.',
      misconceptionTargeted: 'Debiting the provision directly against the bank account without passing through the P&L.',
      revisitSection: '3.4 Provisions for Risks and Charges',
      journalEntries: [
        { category: 'Expense', accountNumber: '671', accountName: 'Settlement Indemnity Expense', debit: 8000 },
        { category: 'Asset', accountNumber: '512', accountName: 'Bank', credit: 8000 },
        { category: 'Liability', accountNumber: '151', accountName: 'Provisions for Risks (Extinguished)', debit: 10000 },
        { category: 'Revenue', accountNumber: '781', accountName: 'Reversal of Operating Provisions', credit: 10000 }
      ]
    },
    {
      id: 'm6-q9',
      moduleId: 'module-6',
      sourceTopic: 'Accrued Income in Windsurf S6',
      type: 'journal-entry',
      difficulty: 'application',
      question: 'Windsurf ran a training course from December 26 to December 30, 2026. The invoice for €7,000 ex-VAT was only issued on January 4, 2027. Record the adjusting entry on December 31, 2026.',
      correctAnswer: 'Debit 418 Customers - Invoices to be issued €7,000; Credit 706 Services Revenue €7,000.',
      markingGuide: 'Debit Account 418 (Invoices to be issued) for 7,000; Credit Account 706 (Services Revenue) for 7,000.',
      rationale: 'This is Accrued Income (Produit à recevoir). The course was delivered in 2026, so Year 2026 must recognize the revenue: Debit Account 418 Customers - Invoices to be issued €7,000 / Credit Account 706 Services Revenue €7,000.',
      misconceptionTargeted: 'Waiting until January to record revenue for a service performed in December.',
      revisitSection: '3.1 The 4 Year-End Adjusting Entries',
      journalEntries: [
        { category: 'Asset', accountNumber: '418', accountName: 'Trade Receivables – Invoices to be issued', debit: 7000 },
        { category: 'Revenue', accountNumber: '706', accountName: 'Services Revenue (Kitesurfing course)', credit: 7000 }
      ]
    },
    {
      id: 'm6-q10',
      moduleId: 'module-6',
      sourceTopic: 'Inventory Change Formula',
      type: 'calculation',
      difficulty: 'foundation',
      question: 'Merchandise inventory stood at €5,000 on January 1, 2026, and at €7,500 on December 31, 2026. Purchases during the year were €40,000. Calculate: (1) Stock variation (BI – CI), and (2) Cost of Goods Sold (Consumption).',
      correctAnswer: 'Stock variation = -€2,500; Cost of Goods Sold = €37,500.',
      markingGuide: 'Stock variation = 5,000 – 7,500 = -2,500. COGS = 40,000 + (-2,500) = 37,500.',
      rationale: 'Stock variation for purchased inventory = Beginning Inventory (5,000) – Ending Inventory (7,500) = -€2,500. Cost of goods sold = Purchases (40,000) + Stock variation (-2,500) = €37,500. Because stock increased, fewer goods were consumed than purchased.',
      misconceptionTargeted: 'Adding ending inventory to purchases instead of subtracting the increase.',
      revisitSection: '3.2 End-of-Period Inventory Tracking'
    },
    {
      id: 'm6-q11',
      moduleId: 'module-6',
      sourceTopic: 'Spot the Error',
      type: 'spot-the-error',
      difficulty: 'exam-style',
      question: 'An accountant records a provision of €5,000 for a pending lawsuit on 31/12/N:\nDebit 681 Provision Expense €5,000\nCredit 512 Bank €5,000\nWhat is fundamentally wrong with this entry?',
      correctAnswer: 'Crediting 512 Bank! A provision is an ESTIMATE of a FUTURE obligation, not a cash disbursement today. No money has left the company. The credit must go to Account 15 Provisions (Liability on the Balance Sheet).',
      markingGuide: 'Identify that Account 512 Bank was credited instead of Account 15 Provisions, and emphasize that provisions are non-cash.',
      rationale: 'Provisions are non-cash items. Crediting the Bank account records an imaginary cash outflow that did not occur, throwing the bank reconciliation out of balance by €5,000. Account 15 (Provisions) must be credited.',
      misconceptionTargeted: 'Believing setting up a provision involves transferring money out of the bank account.',
      revisitSection: '3.4 Provisions for Risks and Charges'
    },
    {
      id: 'm6-q12',
      moduleId: 'module-6',
      sourceTopic: 'Prepaid Expense Account Nature',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'In which balance sheet section does Account 486 Prepaid Expenses appear, and what is its normal balance?',
      options: [
        'Current Assets with a Debit balance',
        'Current Liabilities with a Credit balance',
        'Shareholders’ Equity with a Credit balance',
        'Operating Expenses with a Debit balance'
      ],
      correctAnswer: '0',
      rationale: 'Prepaid expenses represent services or goods already paid for that the company will receive in the future. It is a Current Asset on the Active side of the Balance Sheet with a normal DEBIT balance.',
      misconceptionTargeted: 'Classifying prepaid expenses as a liability.',
      revisitSection: '3.1 The 4 Year-End Adjusting Entries'
    },
    {
      id: 'm6-q13',
      moduleId: 'module-6',
      sourceTopic: 'Inventory Impairment Rule',
      type: 'mcq',
      difficulty: 'application',
      question: 'On December 31, a wholesaler has 150 kg of silver purchased at €850/kg (Cost = €127,500). The market price on December 31 is €846/kg (Net realizable value = €126,900). Previously, the inventory had been impaired by €1,500. What is the entry on December 31?',
      options: [
        'Impairment loss of €600 (Account 68)',
        'Reversal of impairment of €900 (Debit 39 / Credit 78)',
        'No entry',
        'Reversal of impairment of €1,500'
      ],
      correctAnswer: '1',
      rationale: 'Required impairment as of 31/12 = 127,500 – 126,900 = €600. Prior impairment on books = €1,500. Because required impairment (€600) < prior impairment (€1,500), the risk has decreased by €900. Record a REVERSAL of €900 (Debit 39 / Credit 78 Reversal).',
      misconceptionTargeted: 'Recording the new total impairment of €600 as an expense instead of adjusting the existing balance.',
      revisitSection: '3.3 Impairment of Current Assets'
    },
    {
      id: 'm6-q14',
      moduleId: 'module-6',
      sourceTopic: 'Contingent Liability Treatment',
      type: 'true-false',
      difficulty: 'foundation',
      question: 'A contingent liability whose cash outflow is neither probable nor estimable must be booked as a provision on the balance sheet.',
      options: ['True', 'False', 'Don’t know'],
      correctAnswer: '1',
      rationale: 'False. If an obligation is neither probable nor reliably estimable, NO provision is booked on the balance sheet. It is classified as a Contingent Liability (Passif éventuel) and disclosed only in the Annex notes.',
      misconceptionTargeted: 'Booking provisions for remote or improbable events.',
      revisitSection: '3.4 Provisions for Risks and Charges'
    },
    {
      id: 'm6-q15',
      moduleId: 'module-6',
      sourceTopic: 'Deferred Income Account Nature',
      type: 'mcq',
      difficulty: 'application',
      question: 'Invoicing a tenant on December 15, Year N for 3 months rent in advance (€3,000) covering December 1, Year N to February 28, Year N+1 requires recognizing Deferred Income of:',
      options: [
        '€ 1,000 under Liabilities',
        '€ 2,000 under Liabilities (Account 487)',
        '€ 2,000 under Assets (Account 486)',
        '€ 3,000 under Revenues'
      ],
      correctAnswer: '1',
      rationale: 'Rent per month = €1,000. 1 month (Dec) belongs to Year N (€1,000 revenue). 2 months (Jan & Feb) belong to Year N+1 (€2,000). Deferred Income of €2,000 is recognized as a Liability (Debit 708 / Credit 487 Deferred Income €2,000).',
      misconceptionTargeted: 'Confusing deferred income with prepaid expenses.',
      revisitSection: '3.1 The 4 Year-End Adjusting Entries'
    }
  ],
  worksheetBridge: {
    exerciseTitle: 'Windsurf Cases S5 & S6 — End-of-Period Closing Entries',
    exerciseFiles: [
      'Exercises/S5 - Windsurf (part 3) - Case handout.pdf',
      'Exercises/S6 - Windsurf 6 (Part 4) - Cas handout.pdf'
    ],
    context: 'Sessions 5 & 6 represent the core year-end close for Windsurf: testing kitesurfing equipment, expired energy bars stock, doubtful clients under court receivership, unbilled water consumption, prepaid rent, and unbilled course revenues.',
    finderGuidance: 'Open Exercises/S5 - Windsurf (part 3) - Case handout.pdf and S6 - Windsurf 6 (Part 4) - Cas handout.pdf in Finder.',
    stepChecklist: [
      'Identify whether an entry is an accrual (408/418) or deferral (486/487).',
      'Calculate exact calendar days or months crossing the December 31 boundary.',
      'For trade receivables, strip VAT (HT = TTC / 1.20) before computing impairment.',
      'Compare ending physical inventory with opening inventory (BI vs CI).',
      'For existing provisions/impairments, compare required ending balance with opening balance to determine dotation vs reprise.',
      'Check that all adjusting entries maintain debit-credit equality.',
      'Update the Trial Balance with closing movements.',
      'Prepare the adjusted Income Statement and Balance Sheet.'
    ],
    templateHeaders: {
      given: 'Closing balances, unbilled invoices, doubtful claims, inventory counts.',
      issue: 'Classification as accrual, deferral, stock change, impairment, or provision.',
      rule: 'Independence of fiscal years; ex-VAT receivable impairment; Prudence.',
      calculation: 'Pro-rata monthly fractions and ex-VAT loss percentages.',
      journalEntry: 'Accounts 486, 408, 418, 487, 603, 39, 49, 15, 68, 78.',
      profitEffect: 'Expense reductions or additions impacting Net Result.',
      positionEffect: 'Ending cut-off asset and liability balances.',
      conclusion: 'Final year-end adjusted trial balance.'
    }
  },
  recap: {
    takeaways: [
      'The 4 cut-offs match revenues and expenses strictly to the year they belong to.',
      'Prepaid Expenses (486) = Asset; Deferred Income (487) = Liability.',
      'Purchased inventory change is BI – CI; Finished goods change is CI – BI.',
      'Receivable impairment is strictly calculated on EX-VAT amounts (VAT is refunded by State).',
      'Provisions (Account 15) are non-cash liabilities for probable obligations; reversals go to Account 78.'
    ],
    recallPrompts: [
      '“Prepaid expense is an asset; accrued expense is a liability.”',
      '“Customer impairment is calculated strictly on the ex-VAT amount.”',
      '“Provisions and impairments never involve an immediate cash outflow.”'
    ],
    coreRule: 'Prepaid = 486 Asset; Accrued = 408 Liability. Customer impairment is calculated strictly on the EX-VAT amount. LIFO is forbidden under French PCG!'
  }
};
