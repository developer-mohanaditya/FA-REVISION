# Implementation Plan: Financial Accounting Crash Course
> Version 1.0 — awaiting approval before implementation.

---

## Stack

| Layer | Technology | Rationale |
|---|---|---|
| Build tool | Vite 5 | Fast local dev, excellent TypeScript support, no backend needed |
| UI framework | React 18 + TypeScript | Component-based, type-safe, widely supported |
| Styling | Tailwind CSS v3 | Utility-first, consistent design tokens, dark mode built-in |
| Icons | Lucide React | Consistent, lightweight, tree-shakeable |
| Routing | React Router v6 | Required for module navigation and Exam Mode page |
| Diagrams | Pure CSS + inline SVG | Mermaid is excluded (rendering unreliable in local Vite builds without CDN) |
| State / storage | localStorage only | Quiz state, review markers, theme preference |
| No backend | — | Static files only; all content in TypeScript/JSON |
| No external API | — | Zero runtime internet dependency after install |

---

## Pre-Install Environment Check

- Node.js: v26.8.1 ✅
- npm: v11.19.0 ✅
- No existing package.json in workspace root → clean install
- Root is `/Volumes/aditya/FA_REVISION/Financial Accounting/`

---

## Proposed File Structure

```
/Volumes/aditya/FA_REVISION/Financial Accounting/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── README.md
│
├── docs/
│   ├── course-map.md          ← created ✅
│   ├── source-audit.md        ← created ✅
│   ├── content-plan.md        ← created ✅
│   ├── implementation-plan.md ← this file ✅
│   ├── content-sources.md     ← phase 5
│   └── runbook.md             ← phase 5
│
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   │
│   ├── types/
│   │   └── index.ts           ← all shared TypeScript types
│   │
│   ├── data/
│   │   ├── modules.ts         ← module metadata registry
│   │   └── quizData.ts        ← all question metadata (separate from UI)
│   │
│   ├── content/
│   │   ├── module1/
│   │   │   ├── index.ts       ← exports module content object
│   │   │   ├── concepts.ts    ← big idea, why it matters, how it works
│   │   │   ├── examples.ts    ← worked micro-examples
│   │   │   ├── quiz.ts        ← 10-15 questions with answers + rationale
│   │   │   ├── memory.ts      ← key terms, formulas, traps, ELI10
│   │   │   └── worksheet.ts   ← worksheet bridge content
│   │   ├── module2/ ... module8/ (same structure)
│   │   └── examMode.ts        ← Final Exam Mode consolidated content
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── TopBar.tsx
│   │   │   └── PageShell.tsx
│   │   │
│   │   ├── module/
│   │   │   ├── BigIdea.tsx
│   │   │   ├── WhyItMatters.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── WorkedExample.tsx
│   │   │   ├── MemoryCard.tsx
│   │   │   ├── ELI10Card.tsx
│   │   │   ├── WorksheetBridge.tsx
│   │   │   └── OneMinuteRecap.tsx
│   │   │
│   │   ├── quiz/
│   │   │   ├── QuizEngine.tsx      ← orchestrates all question types
│   │   │   ├── MCQQuestion.tsx
│   │   │   ├── TrueFalseQuestion.tsx
│   │   │   ├── ShortAnswerQuestion.tsx
│   │   │   ├── CalcQuestion.tsx
│   │   │   ├── SpotTheErrorQuestion.tsx
│   │   │   └── QuizSummary.tsx
│   │   │
│   │   ├── visual/
│   │   │   ├── AccountingEquation.tsx   ← animated A = L + E diagram
│   │   │   ├── TAccount.tsx             ← debit/credit T-account
│   │   │   ├── JournalEntry.tsx         ← formatted journal entry display
│   │   │   ├── BalanceSheet.tsx         ← two-column BS display
│   │   │   ├── IncomeStatement.tsx      ← two-column IS display
│   │   │   ├── StatementMatrix.tsx      ← which statement is affected
│   │   │   ├── DepreciationTimeline.tsx ← visual timeline for depreciation
│   │   │   ├── FormulaCard.tsx          ← styled formula display
│   │   │   └── ColorBadge.tsx           ← account-type colour badge
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── Accordion.tsx
│   │       ├── Tabs.tsx
│   │       ├── Alert.tsx
│   │       ├── ThemeToggle.tsx
│   │       └── SourceBadge.tsx         ← "Based on Session N slides" label
│   │
│   ├── pages/
│   │   ├── Home.tsx               ← course overview / welcome
│   │   ├── ModulePage.tsx         ← generic module renderer
│   │   ├── ExamMode.tsx           ← Final Revision hub
│   │   └── ReviewLater.tsx        ← all bookmarked questions
│   │
│   ├── hooks/
│   │   ├── useLocalStorage.ts     ← generic localStorage hook
│   │   ├── useQuizState.ts        ← per-module quiz progress
│   │   ├── useReviewMarkers.ts    ← review-later bookmark state
│   │   └── useTheme.ts            ← light/dark toggle
│   │
│   ├── lib/
│   │   ├── quizScoring.ts         ← auto-grade MCQ/TF; expose short-answer
│   │   └── utils.ts               ← classnames, formatting helpers
│   │
│   └── styles/
│       └── index.css              ← Tailwind directives + custom CSS
│
├── public/
│   └── favicon.svg
│
├── tests/
│   ├── quizScoring.test.ts        ← validates scoring logic
│   └── contentValidation.test.ts  ← checks all 8 modules have required sections
│
└── CourseSlides/ ExamTraining/ Exercises/ FinalQuiz25-26/   ← untouched source folders
```

---

## TypeScript Data Model

```typescript
// types/index.ts

type AccountType = 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';

type QuestionType = 
  | 'mcq' 
  | 'true-false' 
  | 'short-answer' 
  | 'calculation' 
  | 'journal-entry' 
  | 'spot-the-error';

type Difficulty = 'foundation' | 'application' | 'exam-style';

interface QuizQuestion {
  id: string;
  moduleId: string;
  sourceTopic: string;
  type: QuestionType;
  difficulty: Difficulty;
  question: string;
  options?: string[];           // for MCQ
  correctAnswer: string | string[]; // MCQ/TF: index or value
  rationale: string;
  misconceptionTargeted: string;
  revisitSection: string;
  // For short answer / calculation:
  expectedAnswer?: string;
  markingGuide?: string;
  // For journal entry:
  journalEntries?: JournalEntryLine[];
}

interface JournalEntryLine {
  accountNumber: string;
  accountName: string;
  debit?: number;
  credit?: number;
}

interface WorkedExample {
  id: string;
  title: string;
  facts: string;
  question: string;
  concept: string;
  method: string;
  steps: string[];
  journalEntries?: JournalEntryLine[];
  profitEffect?: string;
  positionEffect?: string;
  conclusion: string;
  commonWrongTurn: string;
}

interface ModuleContent {
  id: string;          // 'module-1' ... 'module-8'
  number: number;      // 1–8
  title: string;
  subtitle: string;    // one-sentence beginner explanation
  sourceBadge: string; // e.g. "Based on Session 1 slides"
  estimatedMinutes: number;
  objectives: string[];
  youWillUseThisWhen: string;
  bigIdea: BigIdea;
  whyItMatters: WhyItMatters;
  howItWorks: HowItWorksSection[];
  workedExamples: WorkedExample[];
  memoryCards: MemoryCard;
  eli10Cards: ELI10Card[];
  quiz: QuizQuestion[];
  worksheetBridge: WorksheetBridge;
  recap: RecapContent;
}
```

---

## Phased Implementation Plan

### Phase 1 — Scaffold & Configure (Est. 1h)
1. `npm create vite@latest . -- --template react-ts` in workspace root
2. Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `lucide-react`, `react-router-dom`
3. Configure `tailwind.config.ts` (colours, dark mode, fonts)
4. Configure `vite.config.ts`
5. Create folder structure (`src/types`, `src/data`, `src/content`, `src/components`, `src/pages`, `src/hooks`, `src/lib`)
6. Write base `types/index.ts`
7. Set up React Router in `App.tsx`
8. Implement `Sidebar`, `TopBar`, `PageShell` layout components
9. Implement `useTheme` hook and ThemeToggle
10. Implement `useLocalStorage`, `useQuizState`, `useReviewMarkers` hooks

### Phase 2 — Visual Components & Quiz Engine (Est. 2h)
1. Build all visual components: `AccountingEquation`, `TAccount`, `JournalEntry`, `BalanceSheet`, `IncomeStatement`, `FormulaCard`, `DepreciationTimeline`, `StatementMatrix`
2. Build module section components: `BigIdea`, `WhyItMatters`, `HowItWorks`, `WorkedExample`, `MemoryCard`, `ELI10Card`, `WorksheetBridge`, `OneMinuteRecap`
3. Build quiz engine: `QuizEngine`, `MCQQuestion`, `TrueFalseQuestion`, `ShortAnswerQuestion`, `CalcQuestion`, `SpotTheErrorQuestion`, `QuizSummary`
4. Build `ModulePage` generic renderer
5. Build `Home` page
6. Build `ReviewLater` page (reads from localStorage)

### Phase 3 — Content: All 8 Modules (Est. 6h)
- Author content for each module following the `ModuleContent` data model
- Each module covers all 9 required sections
- 10–15 questions per module with full metadata
- Worked examples with clean numbers aligned to course material
- ELI10 cards at concept level and module level
- Worksheet bridge text with relative file paths

Order: M1 → M2 → M3 → M4 → M5 → M6 → M7 → M8

### Phase 4 — Exam Mode (Est. 1h)
1. Build `ExamMode.tsx` page
2. Compile consolidated content from all modules:
   - Full module map
   - Accounting equation and statement relationships
   - Key formulas and journal-entry patterns
   - Do-not-confuse tables
   - Common errors
   - "How to attack any accounting question" decision tree
3. Rapid-review cards with show/hide toggle
4. Review Later aggregator (from localStorage)
5. 3-hour exam checklist

### Phase 5 — Documentation (Est. 0.5h)
1. Create `docs/content-sources.md` (traceability matrix)
2. Create `docs/runbook.md` (install, run, build commands)
3. Create `README.md`

### Phase 6 — Validation & Fix (Est. 1h)
1. Run `npm run build` — fix all TypeScript errors
2. Run `npm run dev` — manual inspection:
   - Home page
   - Module 1 (all 9 sections)
   - Quiz interaction (MCQ, TF, short answer, reveal)
   - Review later markers
   - Exam Mode
   - Dark mode toggle
3. Fix any discovered bugs
4. Run `npm test` (lightweight validation tests)
5. Produce final implementation report

---

## Routing Structure

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Welcome and course overview |
| `/module/:id` | `ModulePage` | Generic module renderer (1–8) |
| `/exam-mode` | `ExamMode` | Final Revision hub |
| `/review-later` | `ReviewLater` | All bookmarked questions |

---

## Dependencies List

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.4.0",
    "vite": "^5.1.0",
    "@vitejs/plugin-react": "^4.2.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "vitest": "^1.3.0",
    "@vitest/ui": "^1.3.0"
  }
}
```

---

## Key Design Decisions

1. **No Mermaid:** Diagrams are implemented as React components (CSS-based T-accounts, flexbox balance sheets, grid-based statement matrices). This eliminates the CDN dependency and rendering fragility.
2. **Content in TypeScript:** All module content lives in `.ts` files as typed objects. This enables TypeScript validation of data completeness and is more maintainable than separate JSON files.
3. **Generic `ModulePage`:** One component renders all 8 modules from structured data. Modules are not separate page components.
4. **localStorage scope:** Only stores quiz answers + review markers per module + theme. No user profiles, no cloud.
5. **Quiz answer reveal:** All MCQ/TF are auto-graded on selection. Short-answer and calculation questions show "Reveal solution" which displays the expected answer and marking guide. No auto-grading of text inputs.
6. **Source reference badges:** Every major content block includes a `sourceBadge` field (e.g., "Based on Session 5 slides") displayed as a small badge. Raw file paths are never shown to users.

---

## Assumptions Requiring Confirmation

1. The workspace root is `/Volumes/aditya/FA_REVISION/Financial Accounting/` (not `/Volumes/aditya/FA_REVISION/`). The app should be built directly here.
2. The proposed 8-module split (M1+M2 from Session 1; M3+M4 from Session 2+3; M5 from Session 4; M6 from Sessions 5+6; M7 from Session 6b; M8 from Session 7) is acceptable.
3. LIFO is mentioned once in slides but not used — app will note it is not used in French GAAP practice.
4. The "Explain it like I'm 10" section may use simple fictional analogies (piggy bank, lemonade stand) not present in the source material — this is expected and instructed by the project specification.
5. The Beethoven case (final quiz Part 3) transactions are safe to paraphrase as worked examples in M8, as long as the exact question is not verbatim reproduced.
6. No Vitest UI test runner has been used previously in this workspace — it will be installed fresh.
7. Building the app will create: `package.json`, `node_modules/`, `dist/`, `index.html`, and `src/` in the workspace root alongside the source folders. This is acceptable per the project spec ("Build the app directly in the current root").
