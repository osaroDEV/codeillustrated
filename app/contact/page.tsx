import { FC } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import '../ui/globals.css';
import Link from 'next/link';

const page: FC = () => {
  return (
    <div className='absolute left-0 top-0 z-[100] w-full mt-40 p-4'>
      <hr className='border-white' />
      <div className='text-[#ff6542] text-[1.5rem] flex h-[50vh] justify-center items-center gap-2'>
        <Link
          className='underline twist-animation cursor-pointer'
          href='mailto:ADMIN@CODEILLUSTRATED.COM'
        >
          ADMIN@CODEILLUSTRATED.COM
        </Link>
        <MdOutlineArrowOutward />
      </div>
      <div className='flex justify-between text-white'>
        <h2>SOCIAL</h2>
        <div className='flex flex-col gap-2'>
          <Link href='https://x.com/codeillustrated' className='underline cursor-pointer'>
            TWITTER
          </Link>
          <Link href='https://instagram.com/osarodevs' className='underline'>
            INSTAGRAM
          </Link>
          
        </div>
      </div>
      <hr className='border-white' />
    </div>
  );
};

export default page;
