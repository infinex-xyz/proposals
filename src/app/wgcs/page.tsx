import { Header } from '@/components/Header';
import { PageContainer, PageIntro, PageTitle } from '@/components/UI';

export default async function Home() {
  return (
    <PageContainer>
      <Header currentPage="WGCs" />
      <PageTitle>Working Group Charters</PageTitle>
      <PageIntro>
        WGCs are a documentation type that outlines the establishment of a
        working group, defines its outcomes, and aligns expectations between the
        working group and the Council.
      </PageIntro>
    </PageContainer>
  );
}
