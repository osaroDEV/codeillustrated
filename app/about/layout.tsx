'use client'
import { useEffect } from 'react';
import { Teko } from "next/font/google";
import "../ui/globals.css";
import Menu from '../ui/components/Menu';
import ClientNavigation from '../ui/components/ClientNavigation';
import AboutTop from '../ui/components/AboutTop';
import usePageStore from '@/store/usePage';

const teko = Teko({
  weight: ["400", '300', "700"],
  subsets: ["latin"],
});

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { setCurrentPage } = usePageStore();

  useEffect(() => {
    setCurrentPage('about');
    document.title = "About: Codeillustrated";
  }, [setCurrentPage]);

  return (
    <html lang="en">
      <body className={`${teko.className} antialiased h-screen w-screen p-4 relative bg-[#f4f2ed]`}>
        {children}
        <Menu />
        <ClientNavigation />
        <AboutTop />
      </body>
    </html>
  );
};

export default AboutLayout;