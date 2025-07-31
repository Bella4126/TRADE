import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TRADE - Innovative Platform for Smart Investments',
  description: 'Trade on a modern platform with integrated signals, 24/7 support, and a user-friendly interface. Start with a free $10,000 demo account.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}