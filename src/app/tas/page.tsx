import { Status, Entry } from '@/components/Entries';
import { Header } from '@/components/Header';
import { PageContainer, PageIntro, PageTitle } from '@/components/UI';
import { reader } from '@/lib/reader';
import keystatic from '@/../keystatic.config';
import { number } from '@/lib/util';

const statuses = keystatic.collections.tas.schema.status.options;

export default async function TASs() {
  const entries = await reader.collections.tas.all();
  entries.sort((a, b) => (a.entry.id || 0) - (b.entry.id || 0));
  const byStatus = statuses.map((status) => {
    const matches = entries.filter((i) => i?.entry.status === status.value);
    return matches.length ? { status, entries: matches } : null;
  });

  return (
    <PageContainer>
      <Header currentPage="TAs" className="mb-16" />
      <PageTitle>Treasury Requests for Feedback</PageTitle>
      <PageIntro>
A Treasury Annoucement (TA) is a document written by the Treasury Seat, which outlines a proposed initiative from the Infinex Treasury. TAs do not require to be voted on by the council.
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
                  path="/tas/"
                  id={`TA-${number(e.entry.id!)}`}
                />
              ))}
            </ul>
          </div>
        );
      })}
    </PageContainer>
  );
}
