import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wojciech Wrotek',
  description: 'React/Next.js Software Developer',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="mx-auto w-full max-w-[600px] relative">{children}</div>
      </body>
    </html>
  );
}
