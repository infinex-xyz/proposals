import { Header } from '@/components/Header';
import { PageContainer, PageIntro, PageTitle } from '@/components/UI';

export default async function Home() {
  return (
    <PageContainer>
      <Header currentPage="RCs" />
      <PageTitle>Release Candicates</PageTitle>
      <PageIntro>
        RCs are an alternative method in which only approved working groups are
        able to bundle proposed changes for approval by the council.
      </PageIntro>
    </PageContainer>
  );
}
