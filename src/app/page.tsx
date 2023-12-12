import { Header } from '@/components/Header';
import { PageContainer, PageIntro, PageTitle } from '@/components/UI';

export default async function Home() {
  return (
    <PageContainer>
      <Header currentPage="XIPs" />
      <PageTitle>Infinex Improvement Proposals</PageTitle>
      <PageIntro>
        XIPs are the primary mechanism for suggesting new features, collecting
        community input on an issue, documenting design decisions for changes to
        Infinex, and making adjustments to system parameters.
      </PageIntro>
    </PageContainer>
  );
}
