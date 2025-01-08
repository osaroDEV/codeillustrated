'use client';
import { Teko } from 'next/font/google';
import Head from 'next/head';
import './ui/globals.css';
import Menu from './ui/components/Menu';
import ClientNavigation from './ui/components/ClientNavigation';
import Link from 'next/link';
import useMenuStore from '@/store/useMenu';

const teko = Teko({
  weight: ['400', '300', '700'],
  subsets: ['latin'],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { setMenuOpen } = useMenuStore();

  return (
    <html lang='en'>
      <Head>
        <title>Home: Codeillustrated</title>
      </Head>
      <body className={`${teko.className} antialiased h-screen w-screen p-4 relative bg-[#f4f2ed]`}>
        <main className='absolute top-0 left-0 z-[600] pl-4'>
          <Link 
            href='/' 
            onClick={() => setMenuOpen(false)} 
            className='text-white font-bold text-[5rem] flex gap-1'
          >
            <span>C</span>
            <span>I</span>
            <span>.</span>
          </Link>
        </main>
        {children}
        <Menu />
        <ClientNavigation />
        </body>
    </html>
  );
};

export default RootLayout;