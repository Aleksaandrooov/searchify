import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/shared/Header/header';

const nunito = Nunito_Sans({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="flex flex-col h-screen scroll">
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
