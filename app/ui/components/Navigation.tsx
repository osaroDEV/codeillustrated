import React, { FC } from 'react';
import Link from 'next/link';

const Navigation: FC = () => {
  return (
    <div>
      <span>Close</span>
      <nav>
        <ul>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/work'>Work</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
