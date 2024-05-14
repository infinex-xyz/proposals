const authorRegExp = /(.+)\(@([\w\-]+)\)/;

export function splitAuthors(authors: string) {
  return authors.split(',').map((author) => {
    const parts = authorRegExp.exec(author);
    return parts
      ? { name: parts[1].trim(), handle: parts[2].trim() }
      : { name: author.trim() };
  });
}

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
  Implemented: {
    border: 'border-cyan-700',
    text: 'text-cyan-400',
  },
  Rejected: {
    border: 'border-red-600',
    text: 'text-red-600',
  },
  Reverted: {
    border: 'border-red-600',
    text: 'text-red-600',
  },
  DEFAULT: {
    border: 'border-slate-700',
    text: 'text-slate-400',
  },
};

export function getStatusColors(status: string) {
  return statusColors[status] || statusColors.DEFAULT;
}
