import { FC } from 'react';
import { workData } from '../lib/workData';
import Image from 'next/image';

const page: FC = () => {
  return <div className='mt-28'>
    <section className='text-white'>
      <div>
        {workData.map((work) => (
          <div key={work.id} className='relative'>
            <div className='z-[30] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col w-full'>
            <h2 className='text-3xl text-[#ff6542]'>{work.client}</h2>
            <h3 className='text-xl'>{work.category}</h3>
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-[.7] z-[10]'></div>
            <Image src={work.image} width={300} height={300} alt={work.client}
            className='w-full h-auto responsive-image' // Apply Tailwind classes and the custom class
            />
          </div>
        ))}
      </div>
    </section>
  </div>;
};

export default page;
