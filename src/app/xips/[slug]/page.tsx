import { notFound } from 'next/navigation';
import { ID, Properties, Renderer } from '@/components/Document';
import { Header } from '@/components/Header';
import { Back, PageContainer, PageTitle } from '@/components/UI';
import { reader } from '@/lib/reader';
import { getStatusColors, number } from '@/lib/util';
import keystatic from '@/../keystatic.config';

type Params = {
  xip: string;
};

const schema = keystatic.collections.xips.schema;
const fields = Object.keys(schema);

export async function generateStaticParams(): Promise<Params[]> {
  const topics = await reader.collections.xips.all();
  return topics.map((xip) => ({
    xip: xip.slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const xip = await reader.collections.xips.read(params.xip, {
    resolveLinkedFiles: true,
  });

  if (!xip) return notFound();
  const colors = getStatusColors(xip.status);

  return (
    <PageContainer>
      <Header currentPage="XIPs" />
      <div className="my-8 flex border-t border-slate-800">
        <Back href="/">Back to all XIPs</Back>
      </div>
      <ID status={xip.status}>XIP-{number(xip.xip!)}</ID>
      <PageTitle>{xip.title}</PageTitle>
      <Properties fields={fields} data={xip} />
      <Renderer document={xip.content} />
    </PageContainer>
  );
}
