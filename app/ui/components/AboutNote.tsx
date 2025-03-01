import { FC } from 'react';
import { crimson } from '../font';

const AboutNote: FC = () => {
  return (
    <div className='absolute top-[7rem] z-[100]'>
      <p className={`${crimson.className} text-2xl text-white`}>
        {' '}
        At <span className='text-[#ff6542] font-extrabold'>CI.</span>, we
        empower businesses to thrive in today&apos;s digital landscape. Our team
        of seasoned software engineers and tech educators combines deep
        technical knowledge with practical expertise to deliver solutions that
        drive real growth. We&apos;re committed to providing not just
        exceptional service, but the ongoing support and education that turns
        digital challenges into opportunities for our clients.
      </p>
    </div>
  );
};

export default AboutNote;
