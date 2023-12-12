import { Header } from '@/components/Header';
import { PageContainer, PageIntro, PageTitle } from '@/components/UI';

export default async function Home() {
  return (
    <PageContainer>
      <Header currentPage="IRs" />
      <PageTitle>Infinex Referendums</PageTitle>
      <PageIntro>
        IRs are the mechanism for how meta-governance changes are made to the
        Infinex Protocol.
      </PageIntro>
    </PageContainer>
  );
}
