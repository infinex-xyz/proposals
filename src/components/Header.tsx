'use client';

import { InfinexLogo } from '@/components/Logo';
import { useState } from 'react';
import Image from 'next/image';

function PageNav({ children }: { children: React.ReactNode }) {
  return <div className="hidden gap-2 md:flex">{children}</div>;
}
function MobileNav({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Toggle navigation menu"
      >
        <Image
          src="/assets/icons/mobile-menu.svg"
          alt="Menu"
          width={24}
          height={24}
        />
      </button>

      <div
        className={`bg-shark0 absolute left-0 right-0 top-0 flex flex-col gap-2 p-4 transition-transform duration-200 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <Image
              src="/assets/icons/close.svg"
              alt="Close"
              width={24}
              height={24}
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function PageNavItem({
  children,
  href,
  isSelected,
}: {
  children: React.ReactNode;
  href: string;
  isSelected?: boolean;
}) {
  return (
    <a
      href={href}
      className={`title-sm-medium md:bg-shark2 bg-shark1 inline-block rounded-lg px-6 py-3 md:rounded-full ${
        isSelected
          ? 'border-cantaloupe10 text-accentSubtle md:border'
          : ' text-secondary'
      }`}
    >
      {children}
    </a>
  );
}

const pages = [
  { href: '/', label: 'XIPs' },
  { href: '/irs', label: 'IRs' },
  { href: '/wgcs', label: 'WGCs' },
  { href: '/rcs', label: 'RCs' },
  { href: '/tas', label: 'TAs' },
] as const;

type CurrentPage = (typeof pages)[number]['label'];

function Nav({ currentPage }: { currentPage: CurrentPage }) {
  const navItems = pages.map((page) => (
    <PageNavItem
      href={page.href}
      key={page.href}
      isSelected={currentPage === page.label}
    >
      {page.label}
    </PageNavItem>
  ));

  return (
    <>
      <PageNav>{navItems}</PageNav>
      <MobileNav>{navItems}</MobileNav>
    </>
  );
}

export function Header({
  currentPage,
  className,
}: {
  currentPage: CurrentPage;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-2">
        <InfinexLogo className="w-36" />
        <div className="bg-divider h-4 w-[0.0625rem]" />
        <h1 className="title-sm-medium text-accentSubtle">Proposals</h1>
      </div>
      <Nav currentPage={currentPage} />
    </div>
  );
}
