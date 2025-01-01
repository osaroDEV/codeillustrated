import { FC } from 'react';

const AboutUs: FC = () => {
  return (
    <div className='mt-[calc(50vh)] absolute left-0 top-0 w-full'>
      <section className='h-[12rem] flex justify-center items-center'>
        <h1 className='text-7xl text-center text-[#111214] '>What We Do</h1>
      </section>
      <section className='h-auto flex justify-center gap-4 bg-[#ebe3d1] p-8'>
        <span>01</span>
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl'>Web & App Development</h2>
          <p className=''>
            We design exceptional commercial interiors in close collaboration
            with our clients. Trusted by some of the UK&apos;s leading brands, we
            bring visions to life-from concept to installation-crafting
            functional, and beautiful spaces that embody each business&apos;s unique
            essence.
          </p>
        </div>
      </section>
      <section className='h-auto flex justify-center gap-4 bg-[#d8d8d8] p-8'>
        <span>02</span>
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl'>Branding</h2>
          <p className=''>
          We specialise in building brands that capture the heart and soul of each company. By taking the time to truly understand our clients, we create meaningful, authentic brands that resonate deeply with their audiences. 
          </p>
        </div>
      </section>
      <section className='h-auto flex justify-center gap-4 bg-[#faedbc] p-8'>
        <span>03</span>
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl'>Digital Marketing & Ads</h2>
          <p className=''>
          Our passion is crafting graphic design that elevates brands and leaves a lasting impression. We love creating striking visuals that capture attention. From bespoke illustrations and dynamic motion design to standout marketing, we bring a unique approach to every project 
          </p>
        </div>
      </section>
      <section className='h-auto flex justify-center gap-4 text-white bg-[#111214] p-8'>
        <span>04</span>
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl'>Others</h2>
          <p className=''>
          We thrive on design challenges—some of our favorite work has emerged from pushing ourselves to think differently. We&apos;re passionate about bringing fresh, innovative ideas to every brief. If you have an exciting project in mind, get in touch—we&apos;d love to make it a reality.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
