import type { Metadata } from 'next';
import { JSX } from 'react';
import { inter } from './ui/fonts';
import './globals.css';
import AppLogo from './ui/components/app-logo';

export const metadata: Metadata = {
  title: 'Monitoring-system',
  description: 'Monitors data from two temperature/humidity sensors',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col max-w-full justify-center gap-30 items-center p-6 bg-gray-100">
          <AppLogo />
          {children}
        </div>
      </body>
    </html>
  );
}
