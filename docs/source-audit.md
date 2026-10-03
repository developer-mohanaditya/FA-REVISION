# Source Audit: Financial Accounting Crash Course
> All files inspected via pdfplumber (PDFs) and python-docx (DOCX). Date: 2026-10-03.

---

## Inspection Method

- PDFs: extracted with `pdfplumber` (text layer). All PDFs had embedded text; no OCR was required.
- DOCX: extracted with `python-docx` paragraph reader.
- XLSX: present on disk; not read programmatically (content is the student-facing worksheet templates, not content we generate from).

---

## File-by-File Audit

### CourseSlides/

#### T0 2026-2027 MS Entrepreneurs FA – slides session 1 revu MG.pdf
- **Status:** ✅ Fully readable, 43 pages, all text extracted
- **Topics found:**
  - Why financial accounting? (purpose, users: internal vs external)
  - Definition of accounting (PCG Art. 120-1)
  - Financial vs management accounting distinction
  - The accounting equation: Assets = Equity + Liabilities (+ Debts)
  - Four types of transactions illustrated (capital contribution, asset purchase, loan, sale)
  - Enrichment (profit) concept
  - Double-entry principle
  - Verdi Case Part 1 (application slide only — no data reproduced in slides)
  - Financial statements overview: balance sheet, income statement, CFS, annex
  - Balance sheet structure (French standards: ACTIVE / PASSIVE layout)
  - Income statement structure (operating, financial, exceptional → net profit)
  - Cash flow statement (direct method structure)
  - The Annex
- **Ambiguities / notes:**
  - Some diagram slides are image-heavy; text extraction yielded only labels and headings (acceptable — diagrams will be recreated as interactive components)
  - Slide 27 ("The Double Part") has some garbled text in arrows — content understood from context
  - Slides 1 and 28 are title/divider slides only

#### T0 2026-2027 MS Entrepreneurs FA – slides session 2 et 3 MG.pdf
- **Status:** ✅ Fully readable, 44 pages, all text extracted
- **Topics found (first 22 pages — Module 3):**
  - Double-entry bookkeeping mechanics: debit/credit rules for each account type
  - Classification of accounts (French plan: classes 1–7)
  - The accounting journal (chronological recording)
  - The general ledger (T-account posting)
  - Trial balance preparation
  - Accounting process flow: documents → journal → ledger → trial balance → financial statements
  - Audit of financial statements (statutory auditors in France)
  - Accounting principles: entity, periodicity, going concern, caution, historical cost, permanence
  - Accounting standards: PCG (French), IFRS (listed groups)
  - Asset vs expense distinction; recognition timing (delivery = transfer of ownership)
- **Topics found (pages 23–44 — Module 4):**
  - VAT mechanics: collected vs deductible, VAT payable vs VAT credit
  - VAT rates in France (20%, 10%, 5%, 2.1%)
  - Journal entries for sales (excl. tax) + VAT collected
  - Journal entries for purchases (excl. tax) + deductible VAT
  - VAT settlement and payment entries
  - Payroll structure: gross salary, employee contributions, employer contributions, net salary
  - Two payroll journal entries: (1) recognising payroll; (2) paying net salaries and social contributions
  - Numeric payroll example: gross 100, employee share 20, net 80, employer contribution 40
- **Ambiguities / notes:**
  - Pages 15 and 23 are section-divider slides (no content)
  - Verdi Case Part 2 referenced (application, not content) — links to exercise file

#### T0 2026-2027 MS Entrepreneurs FA – slides session 4 – MG.pdf
- **Status:** ✅ Fully readable, 39 pages, all text extracted
- **Topics found:**
  - Fixed asset recognition criteria (IFRS/PCG): probable future benefit, reliable measurement
  - Categories: intangible, tangible (PP&E), financial assets
  - Initial measurement: historical cost (purchase price + directly attributable costs)
  - Subsequent expenditure: capitalise vs expense decision
  - Depreciation: definition, methods (straight-line, accelerated/diminishing balance, units-of-activity)
  - Straight-line: annual charge = depreciable base / useful life; pro-rata temporis
  - Accelerated: double rate, applied to NBV; switch to straight-line when straight-line > accelerated
  - Units of activity: charge proportional to usage
  - Component accounting (components with different useful lives)
  - Disposal/retirement: 3 steps — catch-up depreciation, derecognise asset, record proceeds
  - Gain/loss = proceeds – NBV (shown separately, not netted, under French GAAP)
  - Impairment of fixed assets: triggers, impairment test, recoverable amount (higher of FV and VIU)
  - Impairment loss = NBV – recoverable amount; new depreciation schedule
  - Summary table: depreciation vs impairment differences and similarities
  - Fixed assets summary table (all categories)
  - Windsurf S4 referenced as application
- **Ambiguities / notes:**
  - Slide 22 example uses "year 20X2" — small numbers from slides, fine for re-use
  - Impairment reversal not explicitly shown in session 4 for PP&E (covered in session 5/6 for current assets)

#### T0 2026-2027 MS Entrepreneurs FA – slides session 5 – MG.pdf
- **Status:** ✅ Fully readable, 25 pages, all text extracted
- **Topics found:**
  - Adjusting entries overview: 4 types
  - Accrued expenses (charges à payer): expense incurred, invoice not yet received; year-N and N+1 entries
  - Accrued income (produits à recevoir): revenue earned, invoice not yet issued
  - Prepaid expenses (charges constatées d'avance): invoice received, benefit extends beyond year-end
  - Deferred income (produits constatés d'avance): invoice issued, service not yet rendered
  - Inventory end-of-period: periodic vs perpetual system
  - Purchased inventory (BI + purchases – consumption = CI): change = BI – CI
  - Finished goods inventory change: CI – BI (revenue side)
  - Inventory valuation: FIFO, WAC (LIFO mentioned but note: excluded under French GAAP per context)
- **Ambiguities / notes:**
  - Session 5 slides end at p.25 with impairment preview — confirmed full impairment content is in session 6

#### T0 2026-2027 MS Entrepreneurs FA – slides session 6 – MG.pdf
- **Status:** ✅ Fully readable, 24 pages, all text extracted
- **Topics found:**
  - Impairment of current assets (receivables, inventory, marketable securities)
  - Impairment test for receivables: ex-VAT gross – recoverable amount
  - VAT note: VAT in receivables is not impaired (recoverable from state)
  - Impairment entry (account 68 / X9) and reversal (X9 / 78)
  - Inventory impairment: net realizable value < cost
  - Impairment of financial securities (financial investments vs marketable securities)
  - Average market price (last month) used for marketable securities
  - Three cases: impairment loss, reversal, no impairment (capital gain = no entry)
  - Impact on financial statements: IS (expense/income), BS (reduces net asset value), CFS (non-cash)
  - Provisions: 3 criteria for liability recognition
  - Liabilities vs provisions vs contingent liabilities (comparison table)
  - Provision entry (68/15) and reversal (15/78)
  - Impact: IS (expense/income), BS (increases liabilities), CFS (non-cash)
- **Ambiguities / notes:**
  - None significant; content is clear and consistent with session 5

#### T0 2026-2027 MS Entrepreneurs FA – slides session 6 part 2 income tax and profit distribution.pdf
- **Status:** ✅ Fully readable, 16 pages, all text extracted
- **Topics found:**
  - Corporate Income Tax (CIT): definition, rate (25% in France)
  - Taxable income ≠ accounting profit (non-deductible expenses, tax-exempt revenues)
  - Accounts: 69 (CIT expense) / 44 (CIT payable)
  - CIT entry: expense in year N, paid in year N+1
  - Distributable profit formula
  - Profit appropriation: reserves vs dividends
  - Warning: reserves ≠ treasury
  - Profit distribution entry in year N+1: Dr 12 (Net income) / Cr 11 (Retained earnings) + Cr 45 (Dividends payable)
  - Payment of dividends: Dr 45 / Cr 51 (Bank)
  - Impact on financial statements
- **Ambiguities / notes:**
  - Some French text in slides (slide 9: "préparation des états financiers", slide 14 partial). Content understood from context; not verbatim-reproduced.

#### T0 2026-2027 MS Entrepreneurs FA – slides session 7 – MG – Cash Flow Statement.pdf
- **Status:** ✅ Fully readable, 11 pages, all text extracted
- **Topics found:**
  - Reminder: profit vs cash distinctions (non-cash items, timing differences)
  - CFS objectives: explain net change in cash, assess operating cash generation
  - Cash and cash equivalents definition (≤3 months, highly liquid)
  - Structure: Operating (A) + Investing (B) + Financing (C) = Net change (D) + Opening cash (E) = Closing cash (F)
  - Operating cash flow calculation (direct method)
  - Investing cash flow calculation
  - Financing cash flow calculation
  - Balance check: CFS closing cash = BS closing cash
- **Ambiguities / notes:**
  - Only 11 pages; relatively brief. Windsurf S7 exercise provides the main application depth.

---

### ExamTraining/

#### FIANANCIAL ACCOUNTING EXAM TRAINING – Handout – MS Entrepreneuriat EN.pdf
- **Status:** ✅ Readable, 10 pages (note: filename has typo "FIANANCIAL" — this is the original filename, do not change)
- **Topics found:**
  - 10 True/False/Don't know conceptual questions covering:
    - Q1: Equity definition (total company liabilities including debt — False)
    - Q2: Liability recording when goods received (True)
    - Q3: Depreciation as investing cash flow (False — non-cash)
    - Q4: Dividends paid in year approved by GM (True)
    - Q5: Quote (not accepted) to record as expense year N (0 — False: no obligation exists)
    - Q6: Net income = pre-tax profit (False — tax deducted)
    - Q7–Q10: Profit in BS and IS (True), equity=liabilities (False), depreciation as investing CF (False), dividends paid in year approved (True)
  - 9 Journal-entry exercises (with table format: Date, Category, Account#, Name, Dr, Cr):
    1. Internet subscription (prepaid/accrual, VAT)
    2. Fixed asset + straight-line depreciation
    3. Cash withdrawal from bank
    4. Capital increase (checks delivered)
    5. Supplies purchase (partial immediate payment + payable)
    6. Revenue with 3 payment modes (cash, check/card, receivable) + VAT
    7. Payroll (gross salary, employee share, employer share, payment)
    8. Consulting invoice with 2% cash discount
    9. Loan repayment + interest (second of two instalments)
- **Ambiguities / notes:**
  - Question answers not included in this file (only the question paper version)
  - This is labeled "2026-2027" training exam — so same year as current slides

---

### FinalQuiz25-26/

#### T0 2025-2026 Quiz final – enonce – MS Entrepreneuriat VF.pdf (and .docx)
- **Status:** ✅ Readable, 22 pages PDF / 65 paragraphs DOCX
- **Topics found:**
  - Exam structure: 2h30 total; Part 1 = 15min (5pts), Part 2 = 60min (10pts), Part 3 = 60min (15pts)
  - Part 1 MCQ (10 questions): net income drivers, reserves usage, non-cash entries, normal balances (5 accounts), bank T-account balance reading, VAT collected account usage, VAT return effects, PP&E NBV, marketable securities impairment, finished goods inventory impact
  - Part 2 Rex case: journal entries (Dec 31, 2025 closing): insurance premium + prepaid, payroll (detailed), and implied adjustments
  - Part 3 Beethoven case: full forecast statements from opening BS + 15 transactions (profit appropriation, receivables, payables, income tax payment, revenue, purchases, other opex, salaries with social contributions, inventory change, PP&E acquisition, disposal of scrapped asset, depreciation, interest, loan repayment, income tax calculation)
  - Chart of accounts appendix (full French PCG chart)
- **Ambiguities / notes:**
  - The DOCX and PDF contain the same content; DOCX is marginally cleaner for paragraph reading
  - The enonce (question paper) itself already contains the Beethoven scenario details — safe to paraphrase for quiz questions

#### Answers T0 2025-2026 Quiz final – corrigé – MS Entrepreneuriat VF.docx
- **Status:** ✅ Readable, 65 paragraphs
- **Topics found:**
  - Same structure as question paper
  - Answer indicators embedded: e.g., "Net income consistency (balance sheet vs. income statement): Net income (I/S from IS (48) = Net income from B/S (48)"
  - Beethoven checks: Assets (410) = Equity (238) + Liabilities (172); Cash CFS (14) = Cash BS (14); Grand total revenues = 915
  - MCQ answers: mostly deducible from context
- **Ambiguities / notes:**
  - The DOCX answer file has the same paragraph structure as the question file; table content (actual numbers in cells) is not captured by paragraph extraction. The narrative checks at the end provide partial confirmation.
  - Full numeric journal entries in tables are not extractable from this DOCX format via paragraph reader.
  - **Decision:** Use the answer document to confirm conceptual answers for MCQ and T/F; use course slides as the primary basis for journal-entry expected solutions. Do not reproduce Beethoven's exact journal entries verbatim in the app.

---

### Exercises/

#### 1 Verdi – Case handout.pdf
- **Status:** ✅ Readable, 3 pages
- **Topics:** 8 transactions (capital, loan, equipment purchase, credit sale, partial customer payment, payroll + supplier, partial supplier payment, loan repayment + interest). Tasks: journal → ledger → trial balance → financial statements.

#### 2 Verdi – Case handout.pdf
- **Status:** ✅ Readable, 2 pages
- **Topics:** Accounting process: recording double-entry journal, posting to ledger, preparing trial balance, preparing financial statements. Verdi Part 2 context.

#### S3 – Windsurf – Case handout.pdf
- **Status:** ✅ Readable, 4 pages
- **Topics:** Operating transactions for Windsurf (kitesurfing company): VAT on purchases/sales, payroll (gross, employee, employer, net salary, social contributions), loan repayment + interest. Opening balances provided.

#### S4 – Windsurf (Part 2) – Case handout.pdf
- **Status:** ✅ Readable, 6 pages
- **Topics:** Fixed assets: depreciation (straight-line, accelerated), component accounting, asset disposal. Windsurf S4 exercise.

#### S5 – Windsurf (part 3) – Case handout.pdf
- **Status:** ✅ Readable, 3 pages
- **Topics:** Impairment of PP&E, inventory impairment (energy bars with expiry risk), receivable impairment (court-supervised customer), securities impairment, provision for employee dispute.

#### S6 – Windsurf 6 (Part 4) – Cas handout.pdf
- **Status:** ✅ Readable, 2 pages
- **Topics:** Adjusting entries (accrued expenses: water; prepaid expenses: rent; accrued income: training course revenue); inventory change; income tax (25% on €40,000 taxable income); net income calculation.

#### S7 – Windsurf (Part 5) – Case handout.pdf
- **Status:** ✅ Readable, 3 pages
- **Topics:** Forecast financial statements for 20X4: profit appropriation, collections, payments, revenue, purchases, opex, taxes, payroll, inventory, PP&E acquisition, depreciation, interest, loan, income tax (25%). Full BS + P&L + CFS required.

#### Worksheet XLSX files
- **Status:** ✅ Present on disk (not programmatically read — they are Excel templates for student use)
- **Decision:** Reference in worksheet bridge sections as "open from Finder"; provide relative path guidance.

---

## Content Quality Issues / Flags

| Flag | Description | Decision |
|---|---|---|
| Session 5 slide 5 reference | LIFO mentioned in overview diagram as a valuation option | Note that French GAAP does not permit LIFO; course context shows FIFO and WAC only in examples. App will mention LIFO as "mentioned in course overview but not used in French practice." |
| Session 6 Part 2 French text | Slides 9, 14 contain partial French phrases | Understood from context; rephrased in English in app content. |
| DOCX table extraction | Journal-entry tables in answer DOCX not captured by paragraph reader | Confirmed answer figures from narrative check lines + slide examples. No invented figures. |
| Session 4 impairment reversal | Reversal of PP&E impairment not explicitly demonstrated in slides | Current assets impairment reversal IS shown (session 6). For PP&E, the concept is mentioned ("reversible decrease"). App will flag this. |
| Exam training file typo | Filename: "FIANANCIAL" | Noted; original file not touched. |
