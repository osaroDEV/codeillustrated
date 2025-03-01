'use client';
import React, { FC, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import useMenuStore from '@/store/useMenu';
import '@/app/ui/Navigation.css';

const Navigation: FC = () => {
  const { menuOpen, setMenuOpen } = useMenuStore();

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  return (
    <div
      className={clsx(
        'h-screen w-full absolute top-0 left-0 z-[500] p-4 flex justify-center items-center',
        {
          'text-white': menuOpen === true,
        }
      )}
    >
      <nav className='h-[calc(.5*100vh)] w-[calc(.7*100vw)]'>
        <ul
          className={clsx('flex flex-col gap-8 items-center text-4xl', {
            'animate-list-items': menuOpen,
          })}
        >
          <li>
            <Link
              className='underline'
              href='/'
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='underline'
              href='/about'
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className='underline'
              href='/tutoring'
              onClick={() => setMenuOpen(false)}
            >
              Tutoring & Mentorship
            </Link>
          </li>
          <li>
            <Link
              className='underline'
              href='/web-development'
              onClick={() => setMenuOpen(false)}
            >
              Web Development
            </Link>
          </li>
          <li>
            <Link
              className='underline'
              href='/work'
              onClick={() => setMenuOpen(false)}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className='underline'
              href='/contact'
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;