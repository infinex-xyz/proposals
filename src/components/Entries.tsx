import { getStatusColors, splitAuthors } from '@/lib/util';

export function Status({
  status,
  count,
}: {
  status: { label: string; value: string };
  count: number;
}) {
  const colors = getStatusColors(status.value);
  return (
    <h2 className="flex items-center gap-2">
      <div className="title-sm-medium">{status.label}</div>
      <div className={`text-sm font-semibold ${colors.text}`}>({count})</div>
    </h2>
  );
}

function Authors({ authors }: { authors: string }) {
  const list = splitAuthors(authors);
  return list.map((author, i) => {
    return (
      <span key={i}>
        <span className="text-slate-400">{author.name}</span>
        {i < list.length - 1 ? ', ' : ''}
      </span>
    );
  });
}

export function Entry({
  data,
  id,
  path,
}: {
  data: {
    slug: string;
    entry: { title: string; author: string; status: string };
  };
  id: string;
  path: string;
}) {
  const colors = getStatusColors(data.entry.status);
  return (
    <a href={`${path}${data.slug}`} className="p-3">
      <div className="group -mx-1 flex flex-col items-start gap-y-1 rounded-lg p-1 hover:bg-slate-900">
        <span
          className={`title-sm-medium mr-2 inline-block rounded text-center ${colors.border} ${colors.text}`}
        >
          {id}
        </span>
        <strong className="title-lg-medium mr-1">{data.entry.title}</strong>{' '}
        {data.entry.author ? (
          <span className="text-secondary body-sm-normal text-sm">
            by <Authors authors={data.entry.author} />
          </span>
        ) : null}
      </div>
    </a>
  );
}
