import React from 'react';
import logo from '../bnr-logo-crop.png';

const Header = () => {
  return (
    <header className="app-header d-flex align-items-center bg-info">
      <img src={logo} className="app-logo p-3" alt="logo" />
      <h6 className="text-white">React-Redux Blog</h6>
    </header>
  );
};

export default Header;
