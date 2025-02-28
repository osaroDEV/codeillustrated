'use client';
import React, { FC } from 'react';
import useMenu from '../../../store/useMenu';
// import Link from 'next/link';
import '@/app/ui/Menu.css';

const Menu: FC = () => {
  const { menuOpen, setMenuOpen } = useMenu();

  return (
    <>
      <div className='text-white absolute top-0 right-0 z-[550] p-4'>
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
