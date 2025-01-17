import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Infinex Proposals',
  description: 'Infinex Governance Proposals (XIPs, IRs, WGCs, RCs)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-canvas text-default`}>
        {children}
      </body>
    </html>
  );
}
