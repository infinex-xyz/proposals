export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="flex w-full max-w-4xl flex-col">{children}</div>
    </main>
  );
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-8 text-5xl font-semibold text-slate-50">{children}</h1>
  );
}

export function PageIntro({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-8 max-w-xl text-base font-medium text-slate-300">
      {children}
    </p>
  );
}
