import { describe, it, expect } from 'vitest';
import { ALL_MODULES } from '../src/data/modulesRegistry';
import { MODULES_META } from '../src/data/modules';

describe('Financial Accounting Crash Course - Content & Structural Validation', () => {
  it('should have exactly 8 modules in metadata and in registry', () => {
    expect(MODULES_META).toHaveLength(8);
    expect(Object.keys(ALL_MODULES)).toHaveLength(8);
  });

  for (let i = 1; i <= 8; i++) {
    const moduleId = `module-${i}`;
    const module = ALL_MODULES[moduleId];

    describe(`Module ${i}: ${MODULES_META[i - 1]?.title}`, () => {
      it('should exist and match ID and number', () => {
        expect(module).toBeDefined();
        expect(module.id).toBe(moduleId);
        expect(module.number).toBe(i);
      });

      it('should contain Section 1: The Big Idea fields', () => {
        expect(module.title).toBeTruthy();
        expect(module.subtitle).toBeTruthy();
        expect(module.sourceBadge).toBeTruthy();
        expect(module.estimatedMinutes).toBeGreaterThan(0);
        expect(module.objectives.length).toBeGreaterThanOrEqual(3);
        expect(module.youWillUseThisWhen).toBeTruthy();
      });

      it('should contain Section 2: Why It Matters with statement impacts', () => {
        expect(module.whyItMatters.economicPurpose).toBeTruthy();
        expect(module.whyItMatters.statementImpacts.length).toBeGreaterThanOrEqual(2);
      });

      it('should contain Section 3: How It Works with structured sections and sub-ELI10', () => {
        expect(module.howItWorks.length).toBeGreaterThanOrEqual(2);
        module.howItWorks.forEach(sec => {
          expect(sec.title).toBeTruthy();
          expect(sec.explanation).toBeTruthy();
        });
      });

      it('should contain Section 4: How to Solve an Exam-Style Problem with worked micro-examples', () => {
        expect(module.workedExamples.length).toBeGreaterThanOrEqual(1);
        const ex = module.workedExamples[0];
        expect(ex.facts).toBeTruthy();
        expect(ex.question).toBeTruthy();
        expect(ex.concept).toBeTruthy();
        expect(ex.method).toBeTruthy();
        expect(ex.steps.length).toBeGreaterThan(0);
        expect(ex.conclusion).toBeTruthy();
        expect(ex.commonWrongTurn).toBeTruthy();
      });

      it('should contain Section 5: What Must I Remember with terms, formulas, and traps', () => {
        expect(module.whatMustIRemember.keyTerms.length).toBeGreaterThanOrEqual(3);
        expect(module.whatMustIRemember.doNotConfuse.length).toBeGreaterThanOrEqual(2);
        expect(module.whatMustIRemember.commonTraps.length).toBeGreaterThanOrEqual(2);
        expect(module.whatMustIRemember.memoriseThis).toBeTruthy();
      });

      it('should contain Section 6: Explain It Like I’m 10 module-level summary', () => {
        expect(module.moduleLevelEli10.concept).toBeTruthy();
        expect(module.moduleLevelEli10.analogy).toBeTruthy();
        expect(module.moduleLevelEli10.explanation).toBeTruthy();
        expect(module.moduleLevelEli10.keyDistinction).toBeTruthy();
        expect(module.moduleLevelEli10.reconnect).toBeTruthy();
      });

      it('should contain Section 7: Check My Understanding with 10–15 functional questions', () => {
        expect(module.quiz.length).toBeGreaterThanOrEqual(10);
        expect(module.quiz.length).toBeLessThanOrEqual(15);

        module.quiz.forEach(q => {
          expect(q.id).toBeTruthy();
          expect(q.sourceTopic).toBeTruthy();
          expect(q.type).toBeTruthy();
          expect(q.difficulty).toBeTruthy();
          expect(q.question).toBeTruthy();
          expect(q.correctAnswer).toBeDefined();
          expect(q.rationale).toBeTruthy();
          expect(q.misconceptionTargeted).toBeTruthy();
          expect(q.revisitSection).toBeTruthy();

          // Auto-gradable questions check
          if (q.type === 'mcq' || q.type === 'true-false') {
            expect(q.options).toBeDefined();
            expect(q.options!.length).toBeGreaterThanOrEqual(2);
            const ansIdx = parseInt(String(q.correctAnswer));
            expect(ansIdx).toBeGreaterThanOrEqual(0);
            expect(ansIdx).toBeLessThan(q.options!.length);
          }
        });
      });

      it('should contain Section 8: Worksheet Bridge with checklist and files', () => {
        expect(module.worksheetBridge.exerciseTitle).toBeTruthy();
        expect(module.worksheetBridge.exerciseFiles.length).toBeGreaterThanOrEqual(1);
        expect(module.worksheetBridge.stepChecklist.length).toBe(8);
        expect(module.worksheetBridge.templateHeaders).toBeDefined();
      });

      it('should contain Section 9: One-Minute Recap with 5 takeaways and 3 prompts', () => {
        expect(module.recap.takeaways.length).toBe(5);
        expect(module.recap.recallPrompts.length).toBe(3);
        expect(module.recap.coreRule).toBeTruthy();
      });
    });
  }
});
