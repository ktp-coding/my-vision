import type { GoalStatus } from '@/lib/types';

const MAP: Record<GoalStatus, { label: string; className: string }> = {
  idea: {
    label: 'ไอเดีย',
    className: 'text-text-dimmer border-text-dimmer/40',
  },
  researching: {
    label: 'กำลังศึกษา',
    className: 'text-text-dim border-text-dim/50',
  },
  shortlisted: {
    label: 'ตัวเลือกหลัก',
    className: 'text-brass border-brass/50',
  },
  committed: {
    label: 'ตัดสินใจแล้ว',
    className: 'text-brass-hi border-brass-hi/60',
  },
  acquired: {
    label: 'ได้แล้ว',
    className: 'text-market border-market/60',
  },
};

export function StatusBadge({ status }: { status: GoalStatus }) {
  const s = MAP[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 font-mono text-[9px] tracking-[0.16em] uppercase border ${s.className}`}
    >
      <span aria-hidden className="w-1 h-1 rounded-full bg-current" />
      {s.label}
    </span>
  );
}
