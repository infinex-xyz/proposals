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

const schema = keystatic.collections.wgcs.schema;
const fields = Object.keys(schema);

export async function generateStaticParams(): Promise<Params[]> {
  const topics = await reader.collections.wgcs.all();
  return topics.map((wgc) => ({
    slug: wgc.slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const entry = await reader.collections.wgcs.read(params.slug, {
    resolveLinkedFiles: true,
  });

  if (!entry) return notFound();

  return (
    <PageContainer>
      <Header currentPage="XIPs" />
      <div className="my-8 flex border-t border-slate-800">
        <Back href="/entrys">Back to all WGCs</Back>
      </div>
      <ID status={entry.status}>WGC-{number(entry.id!)}</ID>
      <PageTitle>{entry.title}</PageTitle>
      <Properties fields={fields} data={entry} />
      <Renderer document={entry.content} />
    </PageContainer>
  );
}
