'use client'
import React, { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import useMenuStore from '@/store/useMenu';
import '@/app/ui/Navigation.css'; 

const Navigation: FC = () => {
  const { menuOpen, setMenuOpen } = useMenuStore();
  return (
    <div className={clsx(
      'h-screen w-full absolute top-0 left-0 z-[500] p-4 flex justify-center items-center',
      {
        "text-white" : menuOpen === true,
      }
      )}>
      <nav className='h-[calc(.5*100vh)] w-[calc(.5*100vw)]'>
        <ul className={clsx('flex flex-col gap-4 items-center text-[3rem]', {
          'animate-list-items': menuOpen,
        })}>
          <li>
            <Link className='underline' href='/about' prefetch={true}
            onClick={() => setMenuOpen(!menuOpen)}
            >About</Link>
          </li>
          <li>
            <Link className='underline' href='/work' 
            onClick={() => setMenuOpen(!menuOpen)}
            >Work</Link>
          </li>
          <li>
            <Link className='underline' href='/contact' onClick={() => setMenuOpen(!menuOpen)}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
