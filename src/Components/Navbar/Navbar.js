import React from 'react';
import { NavLink } from 'react-router-dom';
import Burger from '../Burger/Burger';

import './Navbar.less';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="navbar__logo logo">
            <div className="logo__big">RECRUITMENT</div>
            <div className="logo__small">REACT TASK</div>
          </div> 
          <ul className="navbar__list">
            <li>
              <NavLink exact={true} to="/" onClick={() => {
                document.body.classList.remove('menu-opened');
              }}>Home</NavLink>
            </li>
            <li>
              <NavLink exact={true} to="/about-me" onClick={() => {
                document.body.classList.remove('menu-opened');
              }}>About Me</NavLink>
            </li>
          </ul>
          <Burger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;