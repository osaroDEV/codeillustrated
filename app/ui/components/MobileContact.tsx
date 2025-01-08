import Link from 'next/link';
import React from 'react';

const MobileContact = () => {
  return (
    <div className='absolute left-0 bottom-[2rem] text-[1rem] w-full px-4 z-[1000]'>
      <ul className='flex justify-between w-full text-white'>
        <li>{new Date().getFullYear()}</li>
        <li className='flex flex-col gap-2'>
          <p>LAGOS</p>
          <p>NIGERIA</p>
        </li>
        <li className='flex flex-col gap-2'>
          <Link className='underline' href='mailto:ADMIN@CODEILLUSTRATED.COM'>
            ADMIN@CODEILLUSTRATED.COM
          </Link>
          <Link className='underline' href='https://x.com/codeillustrated'>
            TWITTER
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileContact;
