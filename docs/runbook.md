# Runbook: Financial Accounting Crash Course
> Operating manual, installation procedures, build commands, and content editing guide.

---

## 1. System Requirements & Stack

- **Node.js:** v18+ (tested on Node v26.8.1)
- **npm:** v9+ (tested on npm 11.19.0)
- **Framework:** Vite 5 + React 18 + TypeScript + Tailwind CSS v3
- **Test Runner:** Vitest v5
- **No External Services:** No database, no backend server, zero external API keys, 100% local-first and offline-capable.

---

## 2. Local Commands

### Start Development Server
```bash
npm run dev
```
Launches the Vite local development server (typically at `http://localhost:5173`).

### Run Automated Validation Tests
```bash
npm test
```
Executes the Vitest test suite (`tests/courseValidation.test.ts`), validating all 8 modules, 9 required content sections per module, and all 103 quiz questions.

### Production Build
```bash
npm run build
```
Compiles TypeScript (`tsc`) and bundles optimized static assets into the `dist/` directory.

### Preview Production Build Locally
```bash
npm run preview
```
Serves the generated `dist/` production bundle locally.

---

## 3. Data Architecture & Content Structure

All educational content is stored in strongly typed TypeScript files inside `src/content/`:

```
src/content/
├── module1/index.ts   ← Introduction & The Accounting Equation
├── module2/index.ts   ← Financial Statements & Principles
├── module3/index.ts   ← Double-Entry Bookkeeping & The Accounting Cycle
├── module4/index.ts   ← Daily Operations: VAT & Payroll
├── module5/index.ts   ← Fixed Assets, Depreciation & Impairment
├── module6/index.ts   ← End-of-Period Cut-Offs, Inventory & Provisions
├── module7/index.ts   ← Corporate Income Tax & Profit Distribution
└── module8/index.ts   ← Direct Method Cash Flow Statement
```

### Module Content Schema (`src/types/index.ts`)
Every module conforms strictly to the `ModuleContent` interface:
1. `title`, `subtitle`, `sourceBadge`, `estimatedMinutes`, `objectives`, `youWillUseThisWhen`
2. `whyItMatters` (Economic purpose + Statement impacts)
3. `howItWorks` (Array of subsections with interactive diagrams and subsection ELI10 cards)
4. `workedExamples` (Exam-style micro-examples with 8-step reasoning, journal entries, and traps)
5. `whatMustIRemember` (Terms, formulas, "Do Not Confuse" table, common traps, and golden rule)
6. `moduleLevelEli10` (Module-level simplification with child-friendly analogy)
7. `quiz` (10–15 functional questions with type, difficulty, rationale, misconception, and revisit link)
8. `worksheetBridge` (Reference to original exercise files, Finder guidance, 8-step protocol, and template)
9. `recap` (5 takeaways, 3 active recall prompts, and core rule)

---

## 4. LocalStorage Usage

The app uses `localStorage` exclusively for client-side study preferences:
- `fa_theme_dark`: Boolean for light/dark mode persistence.
- `fa_review_markers`: Array of bookmarked question IDs displayed on `/review-later` and in Exam Mode.
- `fa_quiz_ans_{moduleId}`: User-selected options for auto-graded MCQs.
- `fa_quiz_rev_{moduleId}`: Boolean map of revealed question solutions.
- `fa_quiz_txt_{moduleId}`: User working notes typed into question scratchpads.

No personal data, telemetry, or cookies are collected or transmitted.

---

## 5. Source Folder Integrity Guarantee

The original source directories remain **100% read-only and untouched**:
- `CourseSlides/`
- `ExamTraining/`
- `Exercises/`
- `FinalQuiz25-26/`

No files within these folders have been modified, renamed, converted, or deleted.
