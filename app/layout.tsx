import type { Metadata } from 'next';
import { Teko } from 'next/font/google';
import './ui/globals.css';
import Menu from './ui/components/Menu';
import ClientNavigation from './ui/components/ClientNavigation';
import Link from 'next/link';

const teko = Teko({
  weight: ['400', '300', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Home: Codeillustrated',
  description: 'Digital Agency & Coding School',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body
        className={`${teko.className} antialiased h-screen w-screen p-4 relative bg-[#f4f2ed]`}
      >
        {children}
        <div className='absolute top-0 left-0 z-[100] p-4'>
          <Link
            href='/'
            className='text-[#ff6542] font-bold text-[5rem] flex gap-1'
          >
            <span>C</span>
            <span>I</span>
            <span>.</span>
          </Link>
        </div>
        <Menu />
        <ClientNavigation />
      </body>
    </html>
  );
};

export default RootLayout;
