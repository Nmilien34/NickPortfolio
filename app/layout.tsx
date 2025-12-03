import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nick - Portfolio',
  description: 'Career portfolio showcasing my work and experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
