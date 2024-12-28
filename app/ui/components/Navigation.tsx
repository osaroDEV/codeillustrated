'use client'
import React, { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import useMenuStore from '@/store/useMenu';

const Navigation: FC = () => {
  const { menuOpen } = useMenuStore();
  return (
    <div className={clsx(
      'bg-[#ff6542] h-screen w-full absolute top-0 left-0 z-50 p-4 flex justify-center items-center',
      {
        "text-white" : menuOpen === true,
      }
      )}>
      <nav className='h-[calc(.5*100vh)] w-[calc(.5*100vw)]'>
        <ul className='flex flex-col gap-4 items-center text-[3rem]'>
          <li>
            <Link className='underline' href='/about'>About</Link>
          </li>
          <li>
            <Link className='underline' href='/work'>Work</Link>
          </li>
          <li>
            <Link className='underline' href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
