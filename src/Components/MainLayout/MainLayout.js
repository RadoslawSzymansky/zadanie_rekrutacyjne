import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer';

const MainLayout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;