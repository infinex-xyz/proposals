export function Status({
  status,
  count,
}: {
  status: { label: string; value: string };
  count: number;
}) {
  return (
    <h2 className="flex gap-2">
      <div className="text-base font-semibold text-slate-200">
        {status.label}
      </div>
      <div className="text-slate-400">({count})</div>
    </h2>
  );
}

function Authors({ authors }: { authors: string }) {
  const list = [...authors.matchAll(/(\w+)\s*\((@\w+)\)/g)].filter(
    (i) => i.length === 3,
  );
  return list.map(([, name], i) => {
    return (
      <span key={i}>
        <span className="text-slate-400">{name}</span>
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
  data: { slug: string; entry: { title: string; author: string } };
  id: string;
  path: string;
}) {
  return (
    <li className="my-2">
      <a
        href={`${path}${data.slug}`}
        className="group -mx-1 my-2 block rounded-lg p-1 hover:bg-slate-900"
      >
        <span className="mr-2 inline-block rounded border border-slate-800 bg-slate-900 px-2 py-1 text-sm font-bold group-hover:border-slate-600">
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
