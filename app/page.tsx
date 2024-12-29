import Bio from './ui/components/Bio';
import MobileContact from './ui/components/MobileContact';

export default function Home() {
  return (
    <div className='relative h-screen'> 
      <Bio />
      <MobileContact />
    </div>
  );
}
