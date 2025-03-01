import React, { FC } from 'react';
import { crimson } from '../font';
import Image from 'next/image';

const Bio: FC = () => {
  return (
    <div className='mt-28 p-4 flex flex-col items-center justify-center'>
      <p className={`${crimson.className} text-2xl text-white`}>
      We&apos;re a team of software engineers and tech educators who combine technical expertise with innovative thinking. We build digital solutions that help brands connect with their audience and businesses scale effectively. From high-performance websites to comprehensive technical training, we deliver outcomes that consistently surpass client goals.
      </p>
      <Image className='mt-10' src='/team.png' alt='hero' width={300} height={300}  />
    </div>
  );
};

export default Bio;
