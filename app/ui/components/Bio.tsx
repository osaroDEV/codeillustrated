import React, { FC } from 'react';
import { crimson } from '../font';

const Bio: FC = () => {
  return (
    <div className='mt-28 p-4'>
      <p className={`${crimson.className} text-2xl text-white`}>
        We&apos;re a
        team of digital experts who blend creativity with technology to build
        brands that resonate and businesses that grow. From captivating websites
        to impactful marketing strategies, we deliver results that exceed
        expectations
      </p>
    </div>
  );
};

export default Bio;
