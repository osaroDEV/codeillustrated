'use client';
import { useEffect } from 'react';
// import { Teko } from 'next/font/google';
import '../ui/globals.css';
import Menu from '../ui/components/Menu';
import useMenuStore from '@/store/useMenu';
// import ClientNavigation from '../ui/components/ClientNavigation';
import AboutTop from '../ui/components/AboutTop';
import usePageStore from '@/store/usePage';
import Link from 'next/link';

// const teko = Teko({
//   weight: ['400', '300', '700'],
//   subsets: ['latin'],
// });

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { setMenuOpen } = useMenuStore();
  const { setCurrentPage } = usePageStore();

  useEffect(() => {
    setCurrentPage('about');
    document.title = 'About: Codeillustrated';
  }, [setCurrentPage]);

  return (
    <>
      {children}
      <Menu />
      <div className='absolute top-0 left-0 z-[600] pl-4'>
          <Link
            href='/'
            onClick={() => setMenuOpen(false)}
            className='text-white font-bold text-[5rem] flex gap-1'
          >
            <span>C</span>
            <span>I</span>
            <span>.</span>
          </Link>
        </div>
      <AboutTop />
    </>
  );
};

export default AboutLayout;
