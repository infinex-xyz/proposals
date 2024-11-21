import { notFound } from 'next/navigation';
import { ID, Properties, Renderer } from '@/components/Document';
import { Header } from '@/components/Header';
import { Back, PageContainer, PageTitle } from '@/components/UI';
import { reader } from '@/lib/reader';
import { number } from '@/lib/util';
import keystatic from '@/../keystatic.config';

type Params = {
  slug: string;
};

const schema = keystatic.collections.tas.schema;
const fields = Object.keys(schema);

export async function generateStaticParams(): Promise<Params[]> {
  const topics = await reader.collections.tas.all();
  return topics.map((ta) => ({
    slug: ta.slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const ta = await reader.collections.tas.read(params.slug, {
    resolveLinkedFiles: true,
  });

  if (!ta) return notFound();

  return (
    <PageContainer>
      <Header currentPage="TAs" />
      <div className="my-8 flex border-t border-slate-800">
        <Back href="/tas">Back to all TAs</Back>
      </div>
      <ID status={ta.status}>ta-{number(ta.id!)}</ID>
      <PageTitle>{ta.title}</PageTitle>
      <Properties fields={fields} data={ta} />
      <Renderer node={ta.content.node} />
    </PageContainer>
  );
}
