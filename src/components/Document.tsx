import {
  DocumentRenderer,
  DocumentRendererProps,
} from '@keystatic/core/renderer';
import { getStatusColors, splitAuthors } from '@/lib/util';

export function Renderer({
  document,
}: Pick<DocumentRendererProps, 'document'>) {
  return (
    <div className="prose prose-slate prose-invert max-w-3xl pb-10 hover:prose-a:text-blue-300 prose-td:border-y-slate-900">
      <DocumentRenderer document={document} />
    </div>
  );
}

const hiddenFields = ['content', 'title', 'xip', 'ir'];

function Authors({ authors }: { authors: string }) {
  const list = splitAuthors(authors);
  return list.map((author, i) => {
    return (
      <span key={i}>
        {author.handle ? (
          <a
            href={`https://github.com/${author.handle}`}
            className="text-slate-200 underline hover:text-slate-50"
            target="_blank"
          >
            {author.name}
          </a>
        ) : (
          <span className="text-slate-200">{author.name}</span>
        )}
        {i < list.length - 1 ? ', ' : ''}
      </span>
    );
  });
}

export function Properties({ fields, data }: { fields: string[]; data: any }) {
  return (
    <table className="mb-10">
      <tbody>
        {fields.map((key) => {
          const value = data[key];
          if (!value || hiddenFields.includes(key)) return null;
          return (
            <tr
              key={key}
              className="border-t border-t-slate-800 text-sm first:border-t-0"
            >
              <td className="py-2 capitalize text-slate-400">{key}</td>
              <td className="py-2 text-slate-200">
                {key === 'author' ? <Authors authors={value} /> : value}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function ID({
  children,
  status,
}: {
  children: React.ReactNode;
  status: string;
}) {
  const colors = getStatusColors(status);
  return (
    <div className="mb-4">
      <div
        className={`inline-block rounded-md border px-4 py-1 text-sm font-bold ${colors.border} ${colors.text}`}
      >
        {children}
      </div>
    </div>
  );
}
