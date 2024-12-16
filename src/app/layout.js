import { Syne } from 'next/font/google';
import './globals.css';

const syne = Syne({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${syne.variable} antialiased`}>{children}</body>
    </html>
  );
}
