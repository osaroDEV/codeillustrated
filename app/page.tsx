import Bio from './ui/components/Bio';
import Menu from './ui/components/Menu';
import MobileContact from './ui/components/MobileContact';

export default function Home() {
  return (
    <div className=' font-[family-name:var(--font-geist-sans)]'>
      <main className=''>
        <p className='text-red-500 font-bold text-[5rem] flex gap-1'><span>C</span><span>I</span><span>.</span></p>
      </main>
      <Menu />
      <Bio />
      <MobileContact />
    </div>
  );
}
