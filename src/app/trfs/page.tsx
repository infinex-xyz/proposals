import { Status, Entry } from '@/components/Entries';
import { Header } from '@/components/Header';
import { PageContainer, PageIntro, PageTitle } from '@/components/UI';
import { reader } from '@/lib/reader';
import keystatic from '@/../keystatic.config';
import { number } from '@/lib/util';

const statuses = keystatic.collections.trfs.schema.status.options;

export default async function TRFSs() {
  const entries = await reader.collections.trfs.all();
  entries.sort((a, b) => (a.entry.id || 0) - (b.entry.id || 0));
  const byStatus = statuses.map((status) => {
    const matches = entries.filter((i) => i?.entry.status === status.value);
    return matches.length ? { status, entries: matches } : null;
  });

  return (
    <PageContainer>
      <Header currentPage="TRFs" className="mb-16" />
      <PageTitle>Treasury Requests for Feedback</PageTitle>
      <PageIntro>
        TRFs outline a proposed initiatives from the Infinex Treasury.
      </PageIntro>

      {byStatus.map((i) => {
        if (!i) return null;
        const { status, entries } = i;
        return (
          <div key={status.value} className="my-5">
            <Status status={status} count={entries.length} />
            <ul>
              {entries.map((e) => (
                <Entry
                  key={e.slug}
                  data={e}
                  path="/trfs/"
                  id={`TRF-${number(e.entry.id!)}`}
                />
              ))}
            </ul>
          </div>
        );
      })}
    </PageContainer>
  );
}
