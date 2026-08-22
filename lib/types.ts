export type GoalCategory =
  | 'shelter'
  | 'motion'
  | 'business'
  | 'income'
  | 'custom';

export type GoalStatus =
  | 'idea'
  | 'researching'
  | 'shortlisted'
  | 'committed'
  | 'acquired';

export type GoalRef = {
  url: string;
  label?: string;
  kind?: 'product' | 'video' | 'article' | 'map';
};

export type Goal = {
  id: string;
  parentId: string | null;
  name: string;
  category?: GoalCategory;

  targetMin: number;
  targetMax?: number;
  currency: 'THB';

  saved: number;
  isRollup?: boolean;

  refs?: GoalRef[];
  spec?: string;
  note?: string;
  monthlyIncome?: number;
  imageUrl?: string;
  imageCredit?: string;
  tagline?: string;

  status: GoalStatus;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type GoalPatch = Partial<Omit<Goal, 'id' | 'createdAt'>>;

export type NewGoalInput = {
  parentId: string | null;
  name: string;
  targetMin?: number;
  targetMax?: number;
  category?: GoalCategory;
  status?: GoalStatus;
  spec?: string;
  note?: string;
  monthlyIncome?: number;
  refs?: GoalRef[];
  isRollup?: boolean;
  imageUrl?: string;
  tagline?: string;
};
