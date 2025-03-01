import { services } from '@/app/lib/services';
import clsx from 'clsx';
import { FC } from 'react';

const AboutUs: FC = () => {
  return (
    <div className='mt-[calc(60vh)] absolute left-0 top-0 w-full'>
      <section className='h-[12rem] flex justify-center items-center bg-white'>
        <h1 className='text-7xl text-center text-[#111214]'>What We Do</h1>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          className={clsx('h-auto flex justify-center gap-4 p-8', {
            'bg-[#ebe3d1]': index === 0,
            'bg-[#d8d8d8]': index === 1,
            'bg-[#faedbc]': index === 2,
            'bg-[#111214]': index === 3,
            'text-white': index === 3,
          })}
        >
          <span>{service.id}</span>
          <div className='flex flex-col gap-4'>
            <h2 className='text-3xl'>{service.header}</h2>
            <p className='text-xl'>
              {service.body}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AboutUs;
