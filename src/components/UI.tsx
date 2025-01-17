import Link from 'next/link';

import { ArrowLeftIcon, GitHubOutlineIcon } from './Icons';

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="flex w-full max-w-4xl flex-col">{children}</div>
      <div className="mt-8 flex w-full max-w-4xl justify-around border-t py-8">
        <a
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-50"
          href="https://github.com/infinex-io/proposals"
          target="_blank"
        >
          <GitHubOutlineIcon />
          Contribute to Proposals on GitHub
        </a>
      </div>
    </main>
  );
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="title-4xl-medium mb-4">{children}</h1>;
}

export function PageIntro({ children }: { children: React.ReactNode }) {
  return (
    <p className="body-base-normal text-slate11 mb-8 max-w-xl">{children}</p>
  );
}

export function Separator() {
  return <hr className="border-slate-5 my-6 w-10" />;
}

export function Back({
  children,
  href,
}: {
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group mt-4 flex items-center gap-1 text-slate-500"
    >
      <ArrowLeftIcon className="h-4 w-4 text-slate-500 transition-all group-hover:-translate-x-0.5 group-hover:text-slate-300" />
      <span className="transition-all group-hover:text-slate-50">
        {children}
      </span>
    </Link>
  );
}
