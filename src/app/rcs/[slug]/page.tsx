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

const schema = keystatic.collections.rcs.schema;
const fields = Object.keys(schema);

export async function generateStaticParams(): Promise<Params[]> {
  const topics = await reader.collections.rcs.all();
  return topics.map((rc) => ({
    slug: rc.slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const entry = await reader.collections.rcs.read(params.slug, {
    resolveLinkedFiles: true,
  });

  if (!entry) return notFound();

  return (
    <PageContainer>
      <Header currentPage="RCs" />
      <div className="my-8 flex border-t border-slate-800">
        <Back href="/rcs">Back to all RCs</Back>
      </div>
      <ID status={entry.status}>RC-{number(entry.id!)}</ID>
      <PageTitle>{entry.title}</PageTitle>
      <Properties fields={fields} data={entry} />
      <Renderer node={entry.content.node} />
    </PageContainer>
  );
}
