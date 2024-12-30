'use client';
import { useEffect } from 'react';
import { Teko } from "next/font/google";
import "../ui/globals.css";
import Menu from '../ui/components/Menu';
import ClientNavigation from '../ui/components/ClientNavigation';
import usePageStore from '@/store/usePage';

const teko = Teko({
  weight: ["400", '300', "700"],
  subsets: ["latin"],
});


const ContactLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const { setCurrentPage } = usePageStore();

  useEffect(() => {
    setCurrentPage('about');
    document.title = "Our Work: Codeillustrated";
  }, [setCurrentPage]);

  return (
    <html lang="en">
      <body className={`${teko.className} antialiased h-screen w-screen p-4 relative bg-[#f4f2ed]`}>
        {children}
        <Menu />
        <ClientNavigation />
      </body>
    </html>
  );
}

export default ContactLayout;