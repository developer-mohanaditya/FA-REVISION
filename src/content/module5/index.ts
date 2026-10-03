import { ModuleContent } from '../../types';

export const module5Data: ModuleContent = {
  id: 'module-5',
  number: 5,
  title: 'Fixed Assets: Depreciation, Disposal & Impairment',
  subtitle: 'Capital expenditure vs expenses, straight-line and accelerated depreciation schedules, 3-step disposals, and asset impairment testing.',
  sourceBadge: 'Based on Session 4 slides',
  estimatedMinutes: 50,
  objectives: [
    'Apply the 2 recognition criteria for Fixed Assets (PP&E): probable future economic benefits and reliable cost measurement.',
    'Calculate initial historical cost: Purchase price (ex-VAT) + Directly attributable costs (transport, installation, customs).',
    'Build Straight-Line (Amortissement linéaire) and Accelerated (Amortissement dégressif) depreciation schedules using pro-rata temporis.',
    'Understand Component Accounting (Composants) for complex assets with differing useful lives.',
    'Execute the 3-step asset disposal procedure: (1) Catch-up depreciation, (2) Derecognition of NBV, and (3) Recognition of sale proceeds.',
    'Perform the Impairment Test: Compare Net Book Value (NBV) with Recoverable Amount (higher of Fair Value and Value in Use).'
  ],
  youWillUseThisWhen: 'You need to calculate annual depreciation charges on equipment, compute Net Book Value (NBV) at a given date, record the disposal or scrapping of an old asset (as in the Beethoven exam case), or test an asset for impairment when business slows down.',
  whyItMatters: {
    economicPurpose: 'Companies invest heavily in long-term production assets (machines, servers, vehicles, buildings). Charging the entire purchase cost to the first year would artificially distort profitability and bankrupt reported earnings. Depreciation systematically spreads the investment cost across the years that benefit from it.',
    statementImpacts: [
      {
        statement: 'Balance Sheet (Bilan)',
        impact: 'PP&E appears in Class 2 at gross acquisition cost, accompanied by contra-asset Account 28 (Accumulated Depreciation) and Account 29 (Impairment), presenting the Net Book Value (NBV).'
      },
      {
        statement: 'Income Statement (Compte de résultat)',
        impact: 'Annual depreciation is an Operating Expense (Account 681). On disposal, gross proceeds are Exceptional Revenue (Account 775) and remaining NBV is an Exceptional Expense (Account 675).'
      },
      {
        statement: 'Cash Flow Statement',
        impact: 'Depreciation and impairment are strictly non-cash items (zero cash flow!). The initial purchase is an Investing cash outflow; disposal proceeds are an Investing cash inflow.'
      }
    ]
  },
  howItWorks: [
    {
      id: 'm5-s1',
      title: 'Recognition Criteria & Initial Cost Measurement',
      explanation: `To be capitalized as a Fixed Asset (Immobilisation - Class 2) rather than an operating expense (Class 6), an item must meet two cumulative criteria:
1. It is probable that future economic benefits associated with the item will flow to the entity.
2. The cost of the asset can be measured reliably.

Initial Historical Cost Formula:
Acquisition Cost = Purchase Price (ex-tax) 
                 + Directly Attributable Costs (Transportation, delivery, handling, customs duties, installation, commissioning costs, testing fees)
                 – Trade discounts (Rabais, remises, ristournes).

Excluded costs (must be expensed in Class 6 immediately):
• Training costs for staff operating the machine
• General administrative overheads
• Advertising or launch costs
• Financing costs / loan interest`,
      bulletPoints: [
        'Repairs that merely restore normal operating condition are expensed in Account 615.',
        'Expenditures that extend the useful life or increase productivity are capitalized.'
      ],
      eli10: {
        id: 'eli10-m5-asset',
        title: 'Buying the Food Truck',
        concept: 'Capital Expenditure vs Operating Expense',
        analogy: 'Imagine buying a food truck for €20,000, paying €1,000 to paint it and install the stove, and €100 for your first tank of gas. The truck, paint, and stove stay with you for 10 years—they are your ASSET (€21,000). The gas is burned today—it is an EXPENSE (€100).',
        explanation: 'If you counted the whole truck as an expense on day one, you would think your business was an utter failure this week. Accounting recognizes the truck will help you make money for 10 years, so its cost is spread out over 10 years.',
        keyDistinction: 'Paying cash up front does not mean recording an immediate expense for the full amount.',
        reconnect: 'In the Balance Sheet, the truck is capitalized at €21,000 in Account 218 Tangible Assets.'
      }
    },
    {
      id: 'm5-s2',
      title: 'Depreciation Methods: Straight-Line vs Accelerated',
      explanation: `Depreciation is the systematic allocation of an asset's depreciable base over its estimated useful life.
Depreciable Base = Acquisition Cost – Residual Scrap Value (if any, usually 0).

1. Straight-Line Method (Amortissement linéaire):
• Annual Rate = 1 / Useful Life (e.g., 5 years = 20% per year).
• Annual Depreciation = Depreciable Base × Rate.
• Pro-rata temporis: In the first year, depreciation starts on the date the asset is PUT INTO SERVICE (mise en service), counted in days (360 days/year) or months:
  Year 1 Charge = Base × Rate × (Days in service / 360).

2. Component Accounting (Approche par composants):
If major components of a tangible asset have different useful lives (e.g. an airplane: Fuselage 20 years, Engines 10 years, Landing gear 5 years), each component is capitalized separately in Class 2 and depreciated on its own distinct schedule!`,
      diagramType: 'timeline',
      diagramData: {
        title: '5-Year Straight-Line Depreciation (€100,000 Asset put into service July 1, Year 1)',
        schedule: [
          { year: 'Year 1 (6 mos)', charge: '€ 10,000', cumDepr: '€ 10,000', nbv: '€ 90,000' },
          { year: 'Year 2 (Full)', charge: '€ 20,000', cumDepr: '€ 30,000', nbv: '€ 70,000' },
          { year: 'Year 3 (Full)', charge: '€ 20,000', cumDepr: '€ 50,000', nbv: '€ 50,000' },
          { year: 'Year 4 (Full)', charge: '€ 20,000', cumDepr: '€ 70,000', nbv: '€ 30,000' },
          { year: 'Year 5 (Full)', charge: '€ 20,000', cumDepr: '€ 90,000', nbv: '€ 10,000' },
          { year: 'Year 6 (6 mos)', charge: '€ 10,000', cumDepr: '€ 100,000', nbv: '€ 0' }
        ]
      },
      bulletPoints: [
        'Net Book Value (NBV / Valeur Nette Comptable) = Gross Cost – Accumulated Depreciation.',
        'At the end of useful life, NBV equals residual value (or zero).'
      ],
      eli10: {
        id: 'eli10-m5-depr',
        title: 'The Delivery Bicycle',
        concept: 'Depreciation as a Non-Cash Cost Allocation',
        analogy: 'You buy a delivery bicycle for €500 that will last 5 years. Each year, you count €100 of bicycle wear-and-tear as an operating cost. At the end of Year 1, the bicycle is worth €400 on your books; by Year 5, it is worth €0.',
        explanation: 'You paid the €500 cash on the day you bought it. Recording the €100 depreciation each year does NOT mean you pay €100 out of your wallet again! It is purely an accounting calculation to match the bike’s cost against the delivery fees it earned.',
        keyDistinction: 'Depreciation is a non-cash expense. It reduces net profit on paper, but zero cash leaves the bank.',
        reconnect: 'Depreciation Expense is debited to Account 681; Accumulated Depreciation is credited to Account 281.'
      }
    },
    {
      id: 'm5-s3',
      title: 'Asset Disposals & Scrapping: The 3-Step Procedure',
      explanation: `When a fixed asset is sold, retired, or scrapped, French GAAP requires a strict 3-step sequence:
STEP 1: Record catch-up depreciation for the current year up to the disposal date (pro-rata temporis).
STEP 2: Derecognize the asset from the balance sheet at Net Book Value:
• Debit 281 Accumulated Depreciation (canceling past depreciation)
• Debit 675 Net Book Value of Assets Disposed (Valeur comptable des éléments d'actif cédés - Exceptional Expense)
• Credit 21x Tangible Asset Gross Cost (canceling initial historical cost)
STEP 3: Record the sale proceeds (if sold):
• Debit 512 Bank or 462 Receivables on asset disposals (TTC)
• Credit 775 Proceeds from Disposal of Fixed Assets (Produits des cessions d'éléments d'actif - Exceptional Revenue)
• Credit 44571 VAT Collected (if subject to VAT)

If an asset is simply scrapped (put to trash for €0), Step 3 is omitted and the remaining NBV in Account 675 is an exceptional loss.`,
      diagramType: 'journal',
      diagramData: [
        { category: 'Expense', accountNumber: '675', accountName: 'Net Book Value of Assets Disposed (NBV)', debit: 2000 },
        { category: 'Asset', accountNumber: '281', accountName: 'Accumulated Depreciation', debit: 4000 },
        { category: 'Asset', accountNumber: '218', accountName: 'Equipment (Gross Historical Cost)', credit: 6000 },
        { category: 'Asset', accountNumber: '512', accountName: 'Bank (Sale Proceeds)', debit: 2500 },
        { category: 'Revenue', accountNumber: '775', accountName: 'Proceeds from Disposal of Fixed Assets', credit: 2500 }
      ],
      bulletPoints: [
        'Under French GAAP, gain/loss is NOT shown net. Account 675 and Account 775 are both reported in full in Exceptional items.',
        'Economic Gain/Loss = Proceeds (775) – NBV (675).'
      ]
    },
    {
      id: 'm5-s4',
      title: 'Impairment of Fixed Assets (Dépréciation des immobilisations)',
      explanation: `Unlike depreciation (which is systematic and planned), Impairment reflects an unexpected, reversible decline in an asset’s present economic value.
Trigger: At each year-end close, the company checks for Impairment Indicators (Obsolescence, physical damage, severe business underperformance, drop in market prices).

The Impairment Test:
1. Determine the Recoverable Amount (Valeur recouvrable):
   Recoverable Amount = HIGHER of:
   - Fair Value less costs to sell (Valeur vénale nette - market selling price)
   - Value in Use (Valeur d’usage - present value of expected future cash flows from continued operation)
2. Compare Recoverable Amount to Net Book Value (NBV):
   • If Recoverable Amount >= NBV: No impairment is required.
   • If Recoverable Amount < NBV: Record an Impairment Loss for the difference!
     Impairment Loss = NBV – Recoverable Amount.
3. Accounting Entry:
   - Debit 681 Impairment Loss (Expense +)
   - Credit 291 Impairment of Tangible Assets (Contra-Asset +)
4. Subsequent depreciation is recalculated on the new lower depreciable base!`,
      bulletPoints: [
        'Impairment is reversible; depreciation is irreversible.',
        'Impairment reduces the carrying amount of the asset on the balance sheet with no cash impact.'
      ],
      eli10: {
        id: 'eli10-m5-impair',
        title: 'The Outdated Gaming Computer',
        concept: 'Depreciation vs Impairment',
        analogy: 'You bought a gaming computer for €1,000 planned to last 4 years (€250 depreciation per year). After 2 years, your books say it is worth €500. But suddenly, a breakthrough graphics chip is released, making your model obsolete. No one will buy it for more than €200.',
        explanation: 'Depreciation handled the normal two years of wear-and-tear (€500). But the unexpected obsolescence caused an extra sudden loss in value of €300. You write down the computer to €200 right now. If next year retro-gaming makes old chips valuable again, you can reverse that €300 write-down.',
        keyDistinction: 'Depreciation is the planned aging of an asset. Impairment is an unexpected crash in market value.',
        reconnect: 'Depreciation is booked in Account 28; Impairment is booked in Account 29.'
      }
    }
  ],
  workedExamples: [
    {
      id: 'ex-m5-1',
      title: 'Complete Fixed Asset Lifecycle: Purchase, Depreciation, Disposal (Rex / Training format)',
      facts: `On August 18, Year N-1, a startup buys office equipment for €7,200 including 20% VAT, paid by check.
1. Put into service on September 1, Year N-1. Depreciated straight-line over 5 years (rate = 20%).
2. As of December 31, Year N-1, record 4 months of depreciation.
3. Full year depreciation in Year N.
4. On July 1, Year N+1, the equipment is sold for €3,000 cash. Catch-up depreciation for 6 months is recorded.`,
      question: 'Calculate initial ex-tax cost, accumulated depreciation at disposal date, Net Book Value (NBV), and record the complete 3-step disposal entries.',
      concept: 'Fixed asset acquisition, straight-line pro-rata depreciation, and disposal mechanics.',
      method: 'Decompose TTC cost to HT, compute pro-rata depreciation schedules, and write disposal entries.',
      steps: [
        'Step 1 - Acquisition Cost (HT):\nGross TTC = 7,200 / 1.20 = €6,000 HT. Deductible VAT = €1,200.\nDebit 218 Equipment €6,000 / Debit 44566 VAT €1,200 / Credit 512 Bank €7,200.',
        'Step 2 - Depreciation Schedule:\nAnnual full charge = 6,000 / 5 = €1,200/year (or €100/month).\n• Year N-1 (Sept to Dec = 4 months): 6,000 × 20% × (4/12) = €400.\n• Year N (Full year = 12 months): €1,200.\n• Year N+1 up to July 1 (6 months catch-up): 6,000 × 20% × (6/12) = €600.\nTotal Accumulated Depreciation as of July 1, N+1 = 400 + 1,200 + 600 = €2,200.',
        'Step 3 - Net Book Value (NBV):\nNBV = Gross Cost (6,000) – Accumulated Depreciation (2,200) = €3,800.',
        'Step 4 - Derecognition Entry:\nDebit 2818 Accumulated Depreciation €2,200\nDebit 675 Net Book Value of Assets Disposed €3,800\nCredit 218 Office Equipment €6,000',
        'Step 5 - Proceeds Entry:\nDebit 512 Bank €3,000\nCredit 775 Proceeds from Disposal of Fixed Assets €3,000',
        'Economic Loss on Disposal = Proceeds (3,000) – NBV (3,800) = -€800.'
      ],
      journalEntries: [
        { date: '01/07/N+1', category: 'Expense', accountNumber: '681', accountName: 'Depreciation Expense (6 mos catch-up)', debit: 600 },
        { date: '01/07/N+1', category: 'Asset', accountNumber: '2818', accountName: 'Accumulated Depreciation', credit: 600 },
        { date: '01/07/N+1', category: 'Asset', accountNumber: '2818', accountName: 'Accumulated Depreciation (cleared)', debit: 2200 },
        { date: '01/07/N+1', category: 'Expense', accountNumber: '675', accountName: 'Net Book Value of Assets Disposed', debit: 3800 },
        { date: '01/07/N+1', category: 'Asset', accountNumber: '218', accountName: 'Office Equipment (Gross historical cost)', credit: 6000 },
        { date: '01/07/N+1', category: 'Asset', accountNumber: '512', accountName: 'Bank', debit: 3000 },
        { date: '01/07/N+1', category: 'Revenue', accountNumber: '775', accountName: 'Proceeds from Disposal of Fixed Assets', credit: 3000 }
      ],
      profitEffect: 'Catch-up depr (-600) + NBV (-3,800) + Proceeds (+3,000) = Net impact on Year N+1 profit of -€1,400.',
      positionEffect: 'Equipment removed from Balance Sheet; Bank increases by €3,000.',
      conclusion: 'The asset is completely cleared from the balance sheet. Accumulated depreciation and gross cost both equal zero for this item.',
      commonWrongTurn: 'Forgetting to record catch-up depreciation for the fraction of the year prior to disposal, or omitting accumulated depreciation from the derecognition entry.'
    }
  ],
  whatMustIRemember: {
    keyTerms: [
      {
        term: 'Tangible Fixed Assets (PP&E)',
        definition: 'Physical assets held for use in production, rental, or administration expected to be used over more than one period.',
        category: 'asset'
      },
      {
        term: 'Net Book Value (NBV / VNC)',
        definition: 'Carrying value on the balance sheet: Gross Historical Cost minus Accumulated Depreciation minus Impairment.',
        category: 'asset'
      },
      {
        term: 'Component Accounting',
        definition: 'Separately capitalizing and depreciating major parts of a tangible asset with distinct useful lives.',
        category: 'concept'
      },
      {
        term: 'Recoverable Amount',
        definition: 'The higher of Fair Value less costs of disposal and Value in Use.',
        category: 'concept'
      }
    ],
    formulas: [
      {
        name: 'Straight-Line Depreciation Charge',
        formula: 'Annual Charge = Depreciable Base / Useful Life × (Days / 360)',
        note: 'Calculated pro-rata from the date the asset is put into service.'
      },
      {
        name: 'Net Book Value (NBV)',
        formula: 'NBV = Gross Acquisition Cost – Accumulated Depreciation – Impairment',
        note: 'Carrying amount shown in the Active side of the Balance Sheet.'
      },
      {
        name: 'Disposal Gain / Loss',
        formula: 'Gain/Loss = Proceeds from Disposal (775) – Net Book Value (675)',
        note: 'Both accounts are reported gross in Exceptional Result.'
      }
    ],
    doNotConfuse: [
      {
        termA: 'Depreciation (Amortissement)',
        termB: 'Impairment (Dépréciation)',
        keyDifference: 'Depreciation is systematic, predictable, and irreversible. Impairment is unexpected, tested at year-end, and reversible.',
        example: 'Computer planned wear = 25%/yr depreciation; Market crash in crypto mining rigs = Impairment.'
      },
      {
        termA: 'Depreciation Expense (681)',
        termB: 'Accumulated Depreciation (281)',
        keyDifference: '681 is the annual expense in the P&L; 281 is the cumulative contra-asset on the Balance Sheet.',
        example: 'Year 3: Annual expense = €2,000; Accumulated depreciation = €6,000.'
      }
    ],
    commonTraps: [
      'Counting depreciation as a cash outflow. (Depreciation does NOT touch cash!).',
      'Starting depreciation on the invoice date instead of the date put into service.',
      'Nesting disposal proceeds against NBV into a single net number under French GAAP. (They must be shown gross in 775 and 675!).'
    ],
    memoriseThis: 'Depreciation is a NON-CASH expense! NBV = Gross Cost – Accumulated Depreciation. Disposal requires 3 steps: Catch-up depr → Derecognize NBV (675/281/21x) → Record Proceeds (512/775)!'
  },
  moduleLevelEli10: {
    id: 'eli10-m5-module',
    title: 'The Life Story of the Delivery Van',
    concept: 'Module 5 Synthesis: Fixed Assets from Birth to Retirement',
    analogy: 'Imagine your business buys a delivery van for €10,000. It is born as a Fixed Asset. Every year, you take a little piece of its value (€2,000) and count it as depreciation expense because the van is getting older. After 3 years, the van has €6,000 in accumulated depreciation, so its Net Book Value is €4,000.',
    explanation: 'If a storm damages the engine and nobody would buy it for more than €2,500, you record an impairment of €1,500. When you finally sell the van for €3,000, you remove the van and all its past depreciation from your books, count the remaining value as an expense, and record the €3,000 cash in the bank.',
    keyDistinction: 'Depreciation allocates past cost; Impairment records sudden drops; Disposal cleans the books.',
    reconnect: 'This lifecycle maintains an accurate valuation of company production equipment on the balance sheet.'
  },
  quiz: [
    {
      id: 'm5-q1',
      moduleId: 'module-5',
      sourceTopic: 'Net Book Value Calculation',
      type: 'calculation',
      difficulty: 'foundation',
      question: 'Here is information about PP&E as of December 31, Year N:\n• Gross Historical Cost: €150,000\n• Accumulated Depreciation as of December 31, Year N-1: €40,000\n• Depreciation expense for Year N: €8,000\nWhat is the Net Book Value (NBV) as of December 31, Year N?',
      correctAnswer: '€ 102,000',
      markingGuide: 'Award full marks for €102,000. Calculation: 150,000 – (40,000 + 8,000).',
      rationale: 'Total accumulated depreciation as of 31/12/N = 40,000 + 8,000 = €48,000. Net Book Value = Gross Cost (150,000) – Total Accumulated Depreciation (48,000) = €102,000.',
      misconceptionTargeted: 'Subtracting only the current year depreciation or forgetting past accumulated depreciation.',
      revisitSection: '3.2 Depreciation Methods'
    },
    {
      id: 'm5-q2',
      moduleId: 'module-5',
      sourceTopic: 'Cash Impact of Depreciation',
      type: 'true-false',
      difficulty: 'foundation',
      question: 'The depreciation of a fixed asset is a component of investment cash outflows in the cash flow statement.',
      options: ['True', 'False', 'I don’t know'],
      correctAnswer: '1',
      rationale: 'False. Depreciation is a non-cash accounting allocation (dotation non décaissée). No money is paid to anyone. It is completely excluded from cash outflows in the cash flow statement.',
      misconceptionTargeted: 'Believing depreciation is an actual cash payment.',
      revisitSection: '2. Why It Matters'
    },
    {
      id: 'm5-q3',
      moduleId: 'module-5',
      sourceTopic: 'Depreciation Start Date',
      type: 'mcq',
      difficulty: 'application',
      question: 'A machine is purchased on August 15 and delivered on August 20. It is installed and put into operational service on September 1. When does straight-line depreciation begin for pro-rata temporis calculations?',
      options: [
        'August 15 (Purchase invoice date)',
        'August 20 (Delivery date)',
        'September 1 (Date put into service / mise en service)',
        'January 1 of the following fiscal year'
      ],
      correctAnswer: '2',
      rationale: 'Under French accounting rules, depreciation begins strictly on the date the asset is put into service (mise en service), as that is the date it begins generating economic utility and undergoing physical wear.',
      misconceptionTargeted: 'Starting depreciation on the invoice date.',
      revisitSection: '3.2 Depreciation Methods'
    },
    {
      id: 'm5-q4',
      moduleId: 'module-5',
      sourceTopic: 'Acquisition Cost Composition',
      type: 'mcq',
      difficulty: 'application',
      question: 'Which of the following costs CANNOT be capitalized as part of the initial acquisition cost of a production robot?',
      options: [
        'Delivery transportation fees paid to the carrier',
        'Customs import duties paid at the border',
        'Installation and electrical assembly fees',
        'Costs of training machine operators to use the new software'
      ],
      correctAnswer: '3',
      rationale: 'Staff training costs cannot be capitalized because the enterprise does not control the employees (an employee can leave the company). Training must be expensed immediately in Class 6.',
      misconceptionTargeted: 'Capitalizing operator training costs into asset value.',
      revisitSection: '3.1 Recognition Criteria & Initial Cost'
    },
    {
      id: 'm5-q5',
      moduleId: 'module-5',
      sourceTopic: 'Asset Scrapping Entry',
      type: 'journal-entry',
      difficulty: 'exam-style',
      question: 'In 2026, factory equipment acquired for €20,000 and fully depreciated (accumulated depreciation = €20,000) is scrapped for €0. Record the derecognition entry.',
      correctAnswer: 'Debit 281 Depreciation of equipment €20,000; Credit 215 Factory equipment €20,000.',
      markingGuide: 'Debit Account 281 for 20,000; Credit Account 215 for 20,000. Zero impact on P&L because NBV was zero.',
      rationale: 'Because the asset is fully depreciated, NBV = 20,000 – 20,000 = €0. Derecognition cancels gross historical cost by crediting Account 215 for €20,000 and cancels accumulated depreciation by debiting Account 281 for €20,000. There is zero impact on net income.',
      misconceptionTargeted: 'Recording an exceptional loss when scrapping a fully depreciated asset.',
      revisitSection: '3.3 Asset Disposals & Scrapping',
      journalEntries: [
        { category: 'Asset', accountNumber: '281', accountName: 'Accumulated Depreciation of Factory Equipment', debit: 20000 },
        { category: 'Asset', accountNumber: '215', accountName: 'Factory Equipment (Gross Historical Cost)', credit: 20000 }
      ]
    },
    {
      id: 'm5-q6',
      moduleId: 'module-5',
      sourceTopic: 'Impairment Test Trigger',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'What triggers the recognition of an impairment loss on a fixed asset?',
      options: [
        'The passage of another financial year',
        'Finding that the asset’s Recoverable Amount has fallen below its Net Book Value (NBV)',
        'An increase in market interest rates',
        'A request from shareholders for higher dividends'
      ],
      correctAnswer: '1',
      rationale: 'An impairment test is triggered by impairment indicators. An impairment loss is recognized whenever Recoverable Amount < Net Book Value. The impairment loss equals NBV minus Recoverable Amount.',
      misconceptionTargeted: 'Confusing routine annual depreciation with impairment testing.',
      revisitSection: '3.4 Impairment of Fixed Assets'
    },
    {
      id: 'm5-q7',
      moduleId: 'module-5',
      sourceTopic: 'Recoverable Amount Definition',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'How is the "Recoverable Amount" (Valeur recouvrable) of an asset determined in an impairment test?',
      options: [
        'The average between historical cost and current scrap value',
        'The HIGHER of Fair Value less costs to sell and Value in Use',
        'The LOWER of Fair Value and Value in Use',
        'The replacement cost of a brand-new asset'
      ],
      correctAnswer: '1',
      rationale: 'Recoverable amount is defined as the HIGHER of Fair Value less costs of disposal (what you could sell it for today) and Value in Use (the present value of future cash flows from continued operation).',
      misconceptionTargeted: 'Taking the lower value instead of the higher value.',
      revisitSection: '3.4 Impairment of Fixed Assets'
    },
    {
      id: 'm5-q8',
      moduleId: 'module-5',
      sourceTopic: 'Impairment Calculation in Windsurf S5',
      type: 'calculation',
      difficulty: 'exam-style',
      question: 'Kitesurfing equipment: Gross cost = €32,000; Accumulated depreciation = €13,650 (NBV = €18,350). If continued in operation, Value in Use = €52,000. If sold on secondhand market, Fair Value = €20,000. What is the impairment loss to record?',
      correctAnswer: '€ 0 (No impairment loss)',
      markingGuide: 'Recoverable amount is max(52,000, 20,000) = 52,000. Because 52,000 > 18,350 NBV, impairment = 0.',
      rationale: 'Recoverable Amount = Higher of Fair Value (€20,000) and Value in Use (€52,000) = €52,000. Since Recoverable Amount (€52,000) is strictly greater than Net Book Value (€18,350), the asset is NOT impaired. Impairment loss = €0.',
      misconceptionTargeted: 'Comparing only to Fair Value or recording impairment when recoverable amount exceeds NBV.',
      revisitSection: '3.4 Impairment of Fixed Assets'
    },
    {
      id: 'm5-q9',
      moduleId: 'module-5',
      sourceTopic: 'Spot the Error',
      type: 'spot-the-error',
      difficulty: 'exam-style',
      question: 'An accountant recorded the sale of a machine (Gross cost €10,000, Accumulated depr €7,000, sold for €4,000 cash):\nDebit 512 Bank €4,000\nCredit 215 Equipment €4,000\nWhat is wrong with this single entry?',
      correctAnswer: 'The accountant failed to execute the 3-step disposal procedure! Accumulated depreciation (€7,000) was not removed, the gross cost was not derecognized (€10,000), and the exceptional gain/loss was not recognized. Under PCG, you must derecognize NBV (€3,000) via Accounts 675/281/215 and book proceeds via Account 775.',
      markingGuide: 'Identify omission of accumulated depreciation clearance, lack of NBV derecognition (675), and omission of proceeds (775).',
      rationale: 'Crediting bank directly to equipment leaves €3,000 of gross cost on the books and €7,000 of phantom accumulated depreciation! You must clear the full €10,000 gross cost, clear the €7,000 accumulated depreciation, and recognize €4,000 in Account 775 and €3,000 in Account 675.',
      misconceptionTargeted: 'Netting disposal transactions directly against the asset gross account.',
      revisitSection: '3.3 Asset Disposals & Scrapping'
    },
    {
      id: 'm5-q10',
      moduleId: 'module-5',
      sourceTopic: 'Component Accounting',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'What is the main requirement of Component Accounting (Composants) for tangible fixed assets?',
      options: [
        'To record every screw and spare part in a separate journal',
        'To distinguish and depreciate separately significant elements of an asset that have different useful lives or consumption rhythms',
        'To expense all parts costing under €1,000',
        'To revalue components every 6 months according to stock market prices'
      ],
      correctAnswer: '1',
      rationale: 'Component accounting requires breaking down a complex asset (such as an aircraft or building) into principal components when they have differing useful lives (e.g. roof vs structure), depreciating each on its own schedule.',
      misconceptionTargeted: 'Believing an entire complex structure must always share one single depreciation life.',
      revisitSection: '3.2 Depreciation Methods'
    },
    {
      id: 'm5-q11',
      moduleId: 'module-5',
      sourceTopic: 'Disposal Presentation in French GAAP',
      type: 'mcq',
      difficulty: 'application',
      question: 'Under French PCG rules, how is the gain or loss on the disposal of a fixed asset presented in the financial statements?',
      options: [
        'Only the net gain or net loss is presented in Operating profit',
        'Gross sale proceeds appear in Exceptional Revenues (775) and remaining Net Book Value appears in Exceptional Expenses (675)',
        'The proceeds are credited directly to Share Capital',
        'The net gain is added directly to Deductible VAT'
      ],
      correctAnswer: '1',
      rationale: 'French GAAP does not show asset disposal net. Both gross disposal proceeds (Account 775) and remaining Net Book Value (Account 675) are presented in full under Exceptional items in the Income Statement.',
      misconceptionTargeted: 'Assuming French GAAP nets disposal proceeds against NBV like US GAAP.',
      revisitSection: '3.3 Asset Disposals & Scrapping'
    },
    {
      id: 'm5-q12',
      moduleId: 'module-5',
      sourceTopic: 'Impairment Reversibility',
      type: 'true-false',
      difficulty: 'foundation',
      question: 'Unlike depreciation which is irreversible, an impairment loss on an asset can be reversed in a subsequent period if the recoverable amount increases.',
      options: ['True', 'False', 'I don’t know'],
      correctAnswer: '0',
      rationale: 'True. Impairment reflects a reversible decline in value. If market conditions or asset profitability improve in a subsequent fiscal year, a reversal of impairment (Reprise sur dépréciation, Account 78) is recorded.',
      misconceptionTargeted: 'Believing impairment is permanent and irreversible.',
      revisitSection: '3.4 Impairment of Fixed Assets'
    },
    {
      id: 'm5-q13',
      moduleId: 'module-5',
      sourceTopic: 'Units of Activity Depreciation',
      type: 'mcq',
      difficulty: 'application',
      question: 'In the course slides example, an aircraft landing gear costing €100,000 is depreciated based on the planned number of landings (2,400 landings total). In Year 1, 200 landings occur. What is the Year 1 depreciation expense?',
      options: [
        '€ 20,000 (20% straight-line)',
        '€ 8,333 (200 / 2,400 × 100,000)',
        '€ 25,000',
        '€ 16,667'
      ],
      correctAnswer: '1',
      rationale: 'Units of activity rate = 200 / 2,400 = 8.333%. Year 1 depreciation charge = €100,000 × 8.333% = €8,333. NBV at end of Year 1 = 100,000 – 8,333 = €91,667.',
      misconceptionTargeted: 'Applying arbitrary straight-line percentages when units-of-activity usage is specified.',
      revisitSection: '3.2 Depreciation Methods'
    },
    {
      id: 'm5-q14',
      moduleId: 'module-5',
      sourceTopic: 'Depreciation Contra-Asset Balance',
      type: 'mcq',
      difficulty: 'foundation',
      question: 'Account 28 Accumulated Depreciation is classified as which type of account, and what is its normal balance?',
      options: [
        'Liability account with a Credit balance',
        'Contra-Asset account with a Credit balance',
        'Expense account with a Debit balance',
        'Equity account with a Debit balance'
      ],
      correctAnswer: '1',
      rationale: 'Account 28 is a contra-asset account. It sits on the Asset side of the balance sheet as a negative deduction against gross cost, and therefore carries a normal CREDIT balance.',
      misconceptionTargeted: 'Classifying accumulated depreciation as a debt or liability.',
      revisitSection: '3.2 Depreciation Methods'
    }
  ],
  worksheetBridge: {
    exerciseTitle: 'Windsurf Case (Part 2 / Session 4) — Fixed Assets & Depreciation',
    exerciseFiles: [
      'Exercises/S4 - Windsurf (Part 2) - Case handout.pdf'
    ],
    context: 'Windsurf invests in kitesurfing equipment, vehicles, and software. Session 4 guides you through straight-line schedules, component breakdown of complex structures, pro-rata calculations, and retirement entries.',
    finderGuidance: 'Open Exercises/S4 - Windsurf (Part 2) - Case handout.pdf in Finder. Use the provided depreciation tables.',
    stepChecklist: [
      'Identify gross historical cost and date put into service.',
      'Check if components have distinct useful lives.',
      'Compute straight-line rate = 1 / useful life.',
      'Apply pro-rata temporis for the first year (days in service / 360).',
      'At disposal date, record catch-up depreciation.',
      'Clear gross cost (credit Class 2) and accumulated depreciation (debit Account 28).',
      'Record remaining NBV in Account 675 and sale proceeds in Account 775.',
      'Verify that net book value on the balance sheet matches the schedule.'
    ],
    templateHeaders: {
      given: 'Asset acquisition cost, date put into service, useful life, disposal terms.',
      issue: 'Depreciation schedule calculation and disposal entry.',
      rule: 'Depreciation = Base × Rate × Pro-rata; Gain/Loss = Proceeds (775) – NBV (675).',
      calculation: 'Schedule of annual allocations and cumulative NBV.',
      journalEntry: 'Accounts 681/281 for depr; Accounts 675/281/21x for derecognition; 512/775 for proceeds.',
      profitEffect: 'Depreciation expense and exceptional disposal result.',
      positionEffect: 'Ending net book value of PP&E.',
      conclusion: 'Verified balance sheet fixed asset schedule.'
    }
  },
  recap: {
    takeaways: [
      'Fixed assets are capitalized when they provide probable future benefits across multiple years.',
      'Depreciation is a systematic, non-cash allocation of cost; it never leaves the bank.',
      'Pro-rata temporis starts on the date the asset is put into service, not invoice date.',
      'Disposals follow 3 mandatory steps: Catch-up depr → Derecognize NBV (675/281/21x) → Record proceeds (512/775).',
      'Impairment tests compare NBV to Recoverable Amount (higher of Fair Value and Value in Use).'
    ],
    recallPrompts: [
      '“Depreciation is a non-cash expense; zero money leaves the bank account.”',
      '“NBV equals gross acquisition cost minus accumulated depreciation.”',
      '“Disposals require 3 steps: catch-up depr, derecognize NBV, record proceeds.”'
    ],
    coreRule: 'Depreciation is systematic and non-cash! Impairment is unscheduled and tested against Recoverable Amount (max of Fair Value and Value in Use).'
  }
};
