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
  DEFAULT: {
    border: 'border-DEFAULT',
    text: 'text-slate11',
  },
  Approved: {
    border: 'border-positive',
    text: 'text-positive',
  },
  Rejected: {
    border: 'border-ruby3',
    text: 'text-critical',
  },
  Reverted: {
    border: 'border-ruby3',
    text: 'text-critical',
  },
  Dissolved: {
    border: 'border-ruby3',
    text: 'text-critical',
  },
  Superseded: {
    border: 'border-caution',
    text: 'text-caution',
  },
  Implemented: {
    border: 'border-blue6',
    text: 'text-blue11',
  },
};

export function getStatusColors(status: string) {
  return statusColors[status] || statusColors.DEFAULT;
}
