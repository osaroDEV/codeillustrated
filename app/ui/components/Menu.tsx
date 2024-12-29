'use client';
import React, { FC } from 'react';
import useMenu from '../../../store/useMenu';
import clsx from 'clsx';
import '@/app/ui/Menu.css';

const Menu: FC = () => {
  const { menuOpen, setMenuOpen } = useMenu();

  return (
    <>
      <main className='absolute top-0 left-0 z-[100] p-4'>
        <p className={clsx(
              'text-[#ff6542] font-bold text-[5rem] flex gap-1',
              {
                "text-white" : menuOpen === true,
              }
              )}>
          <span>C</span>
          <span>I</span>
          <span>.</span>
        </p>
      </main>
      <div
        className={clsx('absolute top-0 right-0 z-[100] p-4', {
          'text-white': menuOpen === true,
        })}
      >
        <span
          className='text-2xl cursor-pointer hover-underline-animation'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </span>
      </div>
    </>
  );
};

export default Menu;
