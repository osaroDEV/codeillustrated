'use client';
import { useEffect } from 'react';
import '../ui/globals.css';
import Menu from '../ui/components/Menu';
import usePageStore from '@/store/usePage';
import Link from 'next/link';
import useMenuStore from '@/store/useMenu';

const ContactLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { setMenuOpen } = useMenuStore();
  const { setCurrentPage } = usePageStore();

  useEffect(() => {
    setCurrentPage('about');
    document.title = 'Contact: Codeillustrated';
  }, [setCurrentPage]);

  return (
    <div className='absolute bg-[#111214] top-0 left-0 w-screen h-screen'>
      {children}
      <main className='absolute top-0 left-0 z-[600] pl-4'>
        <Link href='/' onClick={() => setMenuOpen(false)} className='text-white font-bold text-[5rem] flex gap-1'>
          <span>C</span>
          <span>I</span>
          <span>.</span>
        </Link>
      </main>
      <Menu />
    </div>
  );
};

export default ContactLayout;
