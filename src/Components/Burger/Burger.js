import React from 'react';

import './Burger.less';

const Burger = () => {
  return (
    <div className="burger" onClick={ () => document.body.classList.toggle('menu-opened') }>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Burger;