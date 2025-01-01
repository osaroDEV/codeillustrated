import { FC } from 'react';
import { crimson } from '../font';

const AboutNote: FC = () => {
  return (
    <div className='absolute top-[7rem] z-[50]'>
      <p className={`${crimson.className} text-2xl text-white`}>
        {' '}
        At <span className='text-[#ff6542] font-extrabold'>CI.</span>,
        we&apos;re passionate about helping businesses succeed in the digital
        age. We&apos;re a team of experienced digital experts who are dedicated
        to providing our clients with the highest quality services and support.
      </p>
    </div>
  );
};

export default AboutNote;
