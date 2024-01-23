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

const schema = keystatic.collections.trfs.schema;
const fields = Object.keys(schema);

export async function generateStaticParams(): Promise<Params[]> {
  const topics = await reader.collections.trfs.all();
  return topics.map((trf) => ({
    slug: trf.slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const trf = await reader.collections.trfs.read(params.slug, {
    resolveLinkedFiles: true,
  });

  if (!trf) return notFound();

  return (
    <PageContainer>
      <Header currentPage="TRFs" />
      <div className="my-8 flex border-t border-slate-800">
        <Back href="/trfs">Back to all TRFs</Back>
      </div>
      <ID status={trf.status}>TRF-{number(trf.id!)}</ID>
      <PageTitle>{trf.title}</PageTitle>
      <Properties fields={fields} data={trf} />
      <Renderer document={trf.content} />
    </PageContainer>
  );
}
