import React from 'react';
import imgHero from '../../img/hero2.png';

import './PageHome.less';

const PageHome = () => {
  return (
    <div className="page-home">
      <div className="header-home">
        <img src={imgHero} className="header-home__img" />
        <div className="container ">
          <div className="header-home__content">Radosław Szymański</div>
        </div>
      </div>
    </div>
  )
};

export default PageHome;