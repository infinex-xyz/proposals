import { Status, Entry } from '@/components/Entries';
import { Header } from '@/components/Header';
import { PageContainer, PageIntro, PageTitle } from '@/components/UI';
import { reader } from '@/lib/reader';
import keystatic from '@/../keystatic.config';
import { number } from '@/lib/util';

const statuses = keystatic.collections.wgcs.schema.status.options;

export default async function Page() {
  const entries = await reader.collections.wgcs.all();
  entries.sort((a, b) => (a.entry.id || 0) - (b.entry.id || 0));
  const byStatus = statuses.map((status) => {
    const matches = entries.filter((i) => i?.entry.status === status.value);
    return matches.length ? { status, entries: matches } : null;
  });

  return (
    <PageContainer>
      <Header currentPage="WGCs" className="mb-16" />
      <PageTitle>Working Group Charters</PageTitle>
      <PageIntro>
        WGCs are a documentation type that outlines the establishment of a
        working group, defines its outcomes, and aligns expectations between the
        working group and the council.
      </PageIntro>

      {byStatus.map((i) => {
        if (!i) return null;
        const { status, entries } = i;
        return (
          <div key={status.value} className="my-5">
            <Status status={status} count={entries.length} />
            <div className="bg-shark2 divide-onLight mt-4 flex flex-col divide-y rounded-lg border">
              {entries.map((e) => (
                <Entry
                  key={e.slug}
                  data={e}
                  path="/wgcs/"
                  id={`WGC-${number(e.entry.id!)}`}
                />
              ))}
            </div>
          </div>
        );
      })}
    </PageContainer>
  );
}
