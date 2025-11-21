import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

// eslint-disable-next-line new-cap
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Mert Ercan — creating with clarity and curiosity',
  description:
    'A frontend developer exploring how small things grow into meaning, through clear structures, thoughtful work, and tiny creative worlds.',
  metadataBase: new URL('https://mertercan.com'),
  alternates: {
    canonical: 'https://mertercan.com',
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: '/favicon.svg',
};

export const viewport: Viewport = {
  themeColor: '#FAF7F2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
