import { Status, Entry } from '@/components/Entries';
import { Header } from '@/components/Header';
import { PageContainer, PageIntro, PageTitle } from '@/components/UI';
import { reader } from '@/lib/reader';
import keystatic from '@/../keystatic.config';

const statuses = keystatic.collections.xips.schema.status.options;

export default async function Home() {
  const entries = await reader.collections.xips.all();
  const byStatus = statuses.map((status) => {
    const matches = entries.filter((i) => i?.entry.status === status.value);
    return matches.length ? { status, entries: matches } : null;
  });

  return (
    <PageContainer>
      <Header currentPage="XIPs" />
      <PageTitle>Infinex Improvement Proposals</PageTitle>
      <PageIntro>
        XIPs are the primary mechanism for suggesting new features, collecting
        community input on an issue, documenting design decisions for changes to
        Infinex, and making adjustments to system parameters.
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
                  path="/xips/"
                  id={`XIP-${
                    [0, 9999].includes(e.entry.xip!) ? 'X' : e.entry.xip
                  }`}
                />
              ))}
            </ul>
          </div>
        );
      })}
    </PageContainer>
  );
}
