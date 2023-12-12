import { Header } from '@/components/Header';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex w-full max-w-4xl flex-col">
        <Header currentPage="XIPs" />
        <p>Coming Soon</p>
      </div>
    </main>
  );
}
