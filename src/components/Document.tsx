import {
  DocumentRenderer,
  DocumentRendererProps,
} from '@keystatic/core/renderer';

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
              <td className="py-2 text-slate-100">{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
