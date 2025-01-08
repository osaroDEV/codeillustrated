import { FC } from 'react';
import Bio from './ui/components/Bio';
import MobileContact from './ui/components/MobileContact';

const Home: FC = () => {
  return (
    <div className='absolute top-0 left-0 bg-[#c76f5b] w-screen h-full'> 
      <Bio />
      <MobileContact />
    </div>
  );
}
export default Home
