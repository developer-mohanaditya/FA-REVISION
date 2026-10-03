export type AccountType = 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';

export type QuestionType = 
  | 'mcq' 
  | 'true-false' 
  | 'short-answer' 
  | 'calculation' 
  | 'journal-entry' 
  | 'spot-the-error';

export type Difficulty = 'foundation' | 'application' | 'exam-style';

export interface JournalEntryLine {
  date?: string;
  category?: 'Asset' | 'Liability' | 'Equity' | 'Expense' | 'Revenue';
  accountNumber?: string;
  accountName: string;
  debit?: number | string;
  credit?: number | string;
}

export interface QuizQuestion {
  id: string;
  moduleId: string;
  sourceTopic: string;
  type: QuestionType;
  difficulty: Difficulty;
  question: string;
  options?: string[]; // for mcq / true-false
  correctAnswer: string | string[]; // index string or expected value
  rationale: string;
  misconceptionTargeted: string;
  revisitSection: string;
  markingGuide?: string;
  journalEntries?: JournalEntryLine[];
}

export interface WorkedExample {
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

export interface ELI10Card {
  id: string;
  title: string;
  concept: string;
  analogy: string;
  explanation: string;
  keyDistinction: string;
  reconnect: string;
}

export interface HowItWorksSection {
  id: string;
  title: string;
  explanation: string;
  diagramType?: 'accounting-equation' | 't-account' | 'journal' | 'balance-sheet' | 'income-statement' | 'statement-matrix' | 'timeline' | 'process-flow' | 'formula';
  diagramData?: any;
  bulletPoints?: string[];
  eli10?: ELI10Card;
}

export interface MemoryTerm {
  term: string;
  definition: string;
  category?: AccountType | 'rule' | 'concept';
}

export interface DoNotConfuseItem {
  termA: string;
  termB: string;
  keyDifference: string;
  example: string;
}

export interface MemoryCard {
  keyTerms: MemoryTerm[];
  formulas?: { name: string; formula: string; note?: string }[];
  journalPatterns?: { name: string; entries: JournalEntryLine[] }[];
  classificationRules?: string[];
  doNotConfuse: DoNotConfuseItem[];
  commonTraps: string[];
  memoriseThis: string;
}

export interface WorksheetBridge {
  exerciseTitle: string;
  exerciseFiles: string[];
  context: string;
  finderGuidance: string;
  stepChecklist: string[];
  templateHeaders: {
    given: string;
    issue: string;
    rule: string;
    calculation: string;
    journalEntry: string;
    profitEffect: string;
    positionEffect: string;
    conclusion: string;
  };
}

export interface OneMinuteRecap {
  takeaways: string[];
  recallPrompts: string[];
  coreRule: string;
}

export interface ModuleContent {
  id: string; // 'module-1' to 'module-8'
  number: number;
  title: string;
  subtitle: string;
  sourceBadge: string;
  estimatedMinutes: number;
  objectives: string[];
  youWillUseThisWhen: string;
  whyItMatters: {
    economicPurpose: string;
    statementImpacts: {
      statement: string;
      impact: string;
    }[];
  };
  howItWorks: HowItWorksSection[];
  workedExamples: WorkedExample[];
  whatMustIRemember: MemoryCard;
  moduleLevelEli10: ELI10Card;
  quiz: QuizQuestion[];
  worksheetBridge: WorksheetBridge;
  recap: OneMinuteRecap;
}

export interface ModuleMeta {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  estimatedMinutes: number;
  sourceBadge: string;
}
