import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';
import { siteUrl } from '../lib/consts';

const name = 'Wojciech Wrotek';

export const metadata: Metadata = {
  title: name,
  description:
    'React/Next.js Software Developer specializing in building fast & scalable web applications.',
  applicationName: name,
  authors: [
    {
      name,
      url: siteUrl,
    },
  ],
  creator: name,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: name,
    description:
      'React/Next.js Software Developer specializing in building fast & scalable web applications.',
    locale: 'en_US',
    type: 'website',
  },
  publisher: name,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`font-sans bg-white relative`}>{children}</body>
      </html>
    </ViewTransitions>
  );
}
