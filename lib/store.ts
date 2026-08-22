'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Goal, GoalPatch, NewGoalInput } from './types';
import { SEED_GOALS } from './seed';
import { selectChildren, selectDescendantIds, isDescendant } from './selectors';

type State = {
  goals: Goal[];
  hydrated: boolean;
};

type Actions = {
  add: (input: NewGoalInput) => string;
  update: (id: string, patch: GoalPatch) => void;
  remove: (id: string) => void;
  move: (id: string, newParentId: string | null) => void;
  reorder: (parentId: string | null, orderedIds: string[]) => void;
  reset: () => void;
  exportJson: () => string;
  importJson: (json: string) => boolean;
};

function newId(name: string): string {
  const slug = name
    .toLowerCase()
    .replace(/[^\w฀-๿]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 24);
  return `${slug || 'goal'}-${Math.random().toString(36).slice(2, 7)}`;
}

export const useGoals = create<State & Actions>()(
  persist(
    (set, get) => ({
      goals: SEED_GOALS,
      hydrated: false,

      add: (input) => {
        const now = new Date().toISOString();
        const siblings = selectChildren(get().goals, input.parentId);
        const id = newId(input.name);
        const goal: Goal = {
          id,
          parentId: input.parentId,
          name: input.name,
          category: input.category,
          targetMin: input.targetMin ?? 0,
          targetMax: input.targetMax,
          currency: 'THB',
          saved: 0,
          isRollup: input.isRollup,
          spec: input.spec,
          note: input.note,
          refs: input.refs,
          monthlyIncome: input.monthlyIncome,
          status: input.status ?? 'idea',
          order: siblings.length,
          createdAt: now,
          updatedAt: now,
        };
        set((s) => ({ goals: [...s.goals, goal] }));
        return id;
      },

      update: (id, patch) => {
        set((s) => ({
          goals: s.goals.map((g) =>
            g.id === id ? { ...g, ...patch, updatedAt: new Date().toISOString() } : g
          ),
        }));
      },

      remove: (id) => {
        set((s) => {
          const toDelete = new Set<string>([id, ...selectDescendantIds(s.goals, id)]);
          return { goals: s.goals.filter((g) => !toDelete.has(g.id)) };
        });
      },

      move: (id, newParentId) => {
        if (id === newParentId) return;
        if (newParentId && isDescendant(get().goals, id, newParentId)) return;
        const siblings = selectChildren(get().goals, newParentId).filter((g) => g.id !== id);
        set((s) => ({
          goals: s.goals.map((g) =>
            g.id === id
              ? { ...g, parentId: newParentId, order: siblings.length, updatedAt: new Date().toISOString() }
              : g
          ),
        }));
      },

      reorder: (parentId, orderedIds) => {
        set((s) => ({
          goals: s.goals.map((g) => {
            if (g.parentId !== parentId) return g;
            const idx = orderedIds.indexOf(g.id);
            if (idx === -1) return g;
            return { ...g, order: idx };
          }),
        }));
      },

      reset: () => set({ goals: SEED_GOALS }),

      exportJson: () => JSON.stringify(get().goals, null, 2),

      importJson: (json) => {
        try {
          const parsed = JSON.parse(json);
          if (!Array.isArray(parsed)) return false;
          set({ goals: parsed as Goal[] });
          return true;
        } catch {
          return false;
        }
      },
    }),
    {
      name: 'my-vision.goals.v1',
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ goals: s.goals }),
      onRehydrateStorage: () => (state) => {
        if (state) state.hydrated = true;
      },
    }
  )
);
