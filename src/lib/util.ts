export function number(num: number) {
  return [0, 9999].includes(num) ? 'X' : num;
}

type StatusColors = {
  [key: string]: {
    border: string;
    text: string;
  };
};

export const statusColors: StatusColors = {
  Approved: {
    border: 'border-emerald-700',
    text: 'text-emerald-400',
  },
  DEFAULT: {
    border: 'border-slate-700',
    text: 'text-slate-400',
  },
};

export function getStatusColors(status: string) {
  return statusColors[status] || statusColors.DEFAULT;
}
