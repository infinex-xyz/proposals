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
      <div className="text-base font-semibold text-slate-200">
        {status.label}
      </div>
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
    <li className="my-2">
      <a
        href={`${path}${data.slug}`}
        className="group -mx-1 my-2 block rounded-lg p-1 hover:bg-slate-900"
      >
        <span
          className={`mr-2 inline-block w-14 rounded border bg-slate-900 py-1 text-center text-sm font-bold ${colors.border} ${colors.text}`}
        >
          {id}
        </span>{' '}
        <strong className="mr-1 font-semibold">{data.entry.title}</strong>{' '}
        {data.entry.author ? (
          <span className="text-sm text-slate-500">
            by <Authors authors={data.entry.author} />
          </span>
        ) : null}
      </a>
    </li>
  );
}
