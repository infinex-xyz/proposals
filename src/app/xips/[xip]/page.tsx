import { notFound } from 'next/navigation';
import { Properties, Renderer } from '@/components/Document';
import { Header } from '@/components/Header';
import { Back, PageContainer, PageTitle } from '@/components/UI';
import { reader } from '@/lib/reader';
import { number } from '@/lib/util';
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

  return (
    <PageContainer>
      <Header currentPage="XIPs" />
      <div className="my-8 flex border-t border-slate-800">
        <Back href="/">Back to all XIPs</Back>
      </div>
      <div className="mb-4">
        <div className="inline-block rounded-md border border-slate-700 px-4 py-1 text-sm font-bold">
          XIP-{number(xip.xip!)}
        </div>
      </div>
      <PageTitle>{xip.title}</PageTitle>
      <Properties fields={fields} data={xip} />
      <Renderer document={xip.content} />
    </PageContainer>
  );
}
