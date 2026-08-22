import type { Goal } from './types';

export function selectChildren(goals: Goal[], id: string | null): Goal[] {
  return goals
    .filter((g) => g.parentId === id)
    .sort((a, b) => a.order - b.order);
}

export function selectById(goals: Goal[], id: string): Goal | undefined {
  return goals.find((g) => g.id === id);
}

export type Rollup = {
  targetMin: number;
  targetMax: number;
  saved: number;
  count: number;
  monthlyIncome: number;
};

export function rollup(goals: Goal[], id: string): Rollup {
  const node = selectById(goals, id);
  if (!node) {
    return { targetMin: 0, targetMax: 0, saved: 0, count: 0, monthlyIncome: 0 };
  }

  const children = selectChildren(goals, id);

  if (children.length === 0) {
    return {
      targetMin: node.targetMin,
      targetMax: node.targetMax ?? node.targetMin,
      saved: node.saved,
      count: 1,
      monthlyIncome: node.monthlyIncome ?? 0,
    };
  }

  return children.reduce<Rollup>(
    (acc, child) => {
      const r = rollup(goals, child.id);
      return {
        targetMin: acc.targetMin + r.targetMin,
        targetMax: acc.targetMax + r.targetMax,
        saved: acc.saved + r.saved,
        count: acc.count + r.count,
        monthlyIncome: acc.monthlyIncome + r.monthlyIncome,
      };
    },
    { targetMin: 0, targetMax: 0, saved: 0, count: 0, monthlyIncome: 0 }
  );
}

export function rollupRoots(goals: Goal[]): Rollup {
  return selectChildren(goals, null).reduce<Rollup>(
    (acc, root) => {
      const r = rollup(goals, root.id);
      return {
        targetMin: acc.targetMin + r.targetMin,
        targetMax: acc.targetMax + r.targetMax,
        saved: acc.saved + r.saved,
        count: acc.count + r.count,
        monthlyIncome: acc.monthlyIncome + r.monthlyIncome,
      };
    },
    { targetMin: 0, targetMax: 0, saved: 0, count: 0, monthlyIncome: 0 }
  );
}

export function selectBreadcrumb(goals: Goal[], id: string): Goal[] {
  const trail: Goal[] = [];
  let current: Goal | undefined = selectById(goals, id);
  while (current) {
    trail.unshift(current);
    current = current.parentId ? selectById(goals, current.parentId) : undefined;
  }
  return trail;
}

export function isDescendant(goals: Goal[], ancestorId: string, nodeId: string): boolean {
  let current: Goal | undefined = selectById(goals, nodeId);
  while (current) {
    if (current.parentId === ancestorId) return true;
    if (!current.parentId) return false;
    current = selectById(goals, current.parentId);
  }
  return false;
}

export function selectDescendantIds(goals: Goal[], id: string): string[] {
  const ids: string[] = [];
  const stack = [id];
  while (stack.length) {
    const current = stack.pop()!;
    for (const child of selectChildren(goals, current)) {
      ids.push(child.id);
      stack.push(child.id);
    }
  }
  return ids;
}
