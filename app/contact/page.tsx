import { FC } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import '../ui/globals.css';

const page: FC = () => {
  return (
    <div className='mt-28 p-4'>
      <hr className='border-white' />
      <div className='text-[#ff6542]  text-[1.5rem] flex h-[50vh] justify-center items-center gap-2'>
        <a
          className='underline twist-animation'
          href='mailto:ADMIN@CODEILLUSTRATED.COM'
        >
          ADMIN@CODEILLUSTRATED.COM
        </a>
        <MdOutlineArrowOutward />
      </div>
      <div className='flex justify-between text-white'>
        <h2>SOCIAL</h2>
        <div className='flex flex-col gap-2'>
          <a href='https://x.com/codeillustrated' className='underline'>
            TWITTER
          </a>
          <a href='https://instagram.com/osarodevs' className='underline'>
            INSTAGRAM
          </a>
          
        </div>
      </div>
      <hr className='border-white' />
    </div>
  );
};

export default page;
