import { FC } from 'react';
import AboutNote from '../ui/components/AboutNote';
import AboutUs from '../ui/components/AboutUs';

const page: FC = () => {
  return <div className='mt-28'>
    <AboutNote />
    <AboutUs />
  </div>;
};

export default page;
