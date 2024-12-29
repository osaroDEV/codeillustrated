// 'use client';

// import React, { FC } from 'react';
// import Navigation from './Navigation';
// import useMenuStore from '@/store/useMenu';

// const ClientNavigation: FC = () => {
//   const { menuOpen } = useMenuStore();

//   return (
//     <>
//       {menuOpen && <Navigation />}
//     </>
//   );
// };

// export default ClientNavigation;
'use client';

import React, { FC } from 'react';
import Navigation from './Navigation';
import useMenuStore from '@/store/useMenu';
import './ClientNavigation.css'; // Import the CSS file

const ClientNavigation: FC = () => {
  const { menuOpen } = useMenuStore();

  return (
    <>
      <div
        className={`underlay transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      ></div>
      {menuOpen && <Navigation />}
    </>
  );
};

export default ClientNavigation;