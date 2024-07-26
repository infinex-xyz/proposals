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

const schema = keystatic.collections.irs.schema;
const fields = Object.keys(schema);

export async function generateStaticParams(): Promise<Params[]> {
  const topics = await reader.collections.irs.all();
  return topics.map((ir) => ({
    slug: ir.slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const ir = await reader.collections.irs.read(params.slug, {
    resolveLinkedFiles: true,
  });

  if (!ir) return notFound();

  return (
    <PageContainer>
      <Header currentPage="IRs" />
      <div className="my-8 flex border-t border-slate-800">
        <Back href="/irs">Back to all IRs</Back>
      </div>
      <ID status={ir.status}>IR-{number(ir.id!)}</ID>
      <PageTitle>{ir.title}</PageTitle>
      <Properties fields={fields} data={ir} />
      <Renderer node={ir.content.node} />
    </PageContainer>
  );
}
