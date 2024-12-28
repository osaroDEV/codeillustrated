'use client';

import React, { FC } from 'react';
import Navigation from './Navigation';
import useMenuStore from '@/store/useMenu';

const ClientNavigation: FC = () => {
  const { menuOpen } = useMenuStore();

  return (
    <>
      {menuOpen && <Navigation />}
    </>
  );
};

export default ClientNavigation;