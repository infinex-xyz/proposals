import { Status, Entry } from '@/components/Entries';
import { Header } from '@/components/Header';
import { PageContainer, PageIntro, PageTitle } from '@/components/UI';
import { reader } from '@/lib/reader';
import keystatic from '@/../keystatic.config';
import { number } from '@/lib/util';

const statuses = keystatic.collections.irs.schema.status.options;

export default async function IRs() {
  const entries = await reader.collections.irs.all();
  entries.sort((a, b) => (a.entry.id || 0) - (b.entry.id || 0));
  const byStatus = statuses.map((status) => {
    const matches = entries.filter((i) => i?.entry.status === status.value);
    return matches.length ? { status, entries: matches } : null;
  });

  return (
    <PageContainer>
      <Header currentPage="IRs" className="mb-16" />
      <PageTitle>Infinex Referendums</PageTitle>
      <PageIntro>
        IRs are the mechanism for how meta-governance changes are made to the
        Infinex Protocol.
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
                  path="/irs/"
                  id={`IR-${number(e.entry.id!)}`}
                />
              ))}
            </div>
          </div>
        );
      })}
    </PageContainer>
  );
}
