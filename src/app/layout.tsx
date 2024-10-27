import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Wojciech Wrotek',
  description:
    "I'm React/Next.js Software Developer specializing in building fast & scalable web applications.",
  keywords: 'React, Next.js, Software Developer, Web Development',
  authors: [{ name: 'Wojciech Wrotek' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans bg-white relative`}>{children}</body>
    </html>
  );
}
