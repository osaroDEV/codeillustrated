'use client';

import React, { FC } from 'react';
import Navigation from './Navigation';
import useMenuStore from '@/store/useMenu';
import '@/app/ui/ClientNavigation.css';

const ClientNavigation: FC = () => {
  const { menuOpen } = useMenuStore();

  return (
    <>
      <div
        className={`underlay transition-transform duration-500 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {menuOpen && <Navigation />}
      </div>
    </>
  );
};

export default ClientNavigation;
