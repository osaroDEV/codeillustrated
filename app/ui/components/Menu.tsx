
'use client';
import React, { FC } from 'react';
import useMenu from '../../../store/useMenu';
import clsx from 'clsx';
import Link from 'next/link';
import '@/app/ui/Menu.css'; 
import usePageStore from '@/store/usePage';

const Menu: FC = () => {
  const { menuOpen, setMenuOpen } = useMenu();

  const { currentPage } = usePageStore();

  const getFontColor = () => {
    switch (currentPage) {
      case 'about':
        return 'text-white';
      case 'work':
        return 'text-red-500';
      case 'contact':
        return 'text-green-500';
      case 'home':
        return 'text-[#ff6542]';
      default:
        return 'text-[#ff6542]';
    }
  };

  return (
    <>
      <main className='absolute top-0 left-0 z-[100] p-4  h-screen w-full'>
        {menuOpen && (<Link
          href='/'
          onClick={() => setMenuOpen(false)}
          className={clsx(
            `${getFontColor()} font-bold text-[5rem] flex gap-1`,
            {
              'text-white': menuOpen === true,
            }
          )}
        >
          <span>C</span>
          <span>I</span>
          <span>.</span>
        </Link>)}
      </main>
      <div
        className={clsx('absolute top-0 right-0 z-[150] p-4', {
          'text-white': menuOpen === true || currentPage === 'about',
        })}
      >
        <span
          className='text-3xl cursor-pointer hover-underline-animation'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </span>
      </div>
    </>
  );
};

export default Menu;