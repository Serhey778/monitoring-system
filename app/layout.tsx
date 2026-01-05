import type { Metadata } from 'next';
import './globals.css';
import { inter } from './ui/fonts';

export const metadata: Metadata = {
  title: 'Monitoring-system',
  description: 'Monitors data from two temperature/humidity sensors',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
