import React from 'react';
import imgHero from '../../img/hero2.png';

import './PageHome.less';

const PageHome = () => {
  return (
    <div className="page-home">
      <div className="header-home">
        <img src={imgHero} className="header-home__img" />
        <div className="container ">
          <div className="header-home__content">Radosław Szymańsk<span className="i">i</span></div>
        </div>
      </div>
      <div className="container">
        <section className="articles">
          <div className="articles__item">
            Some of our behaviors have benefited the environment, like buying locally, reducing our commutes and flying less. Other habits have reduced our odds of catching other illnesses. But retaining those habits is easier said than done. 
          </div>
          <div className="articles__item">
            Nearly two decades in the making, the Heart of Europe forms just one section of The World -- a vast collection of man-made islands roughly in the shape of an atlas -- but when completed it will be the opulent centerpiece.
          </div>
          <div className="articles__item">
            Walking through the scrubland of this 3,500-acre estate in West Sussex in the south of England, it's hard to believe the tangled thickets and rugged pastures were once orderly arable fields.
            The estate, which includes a 19th century castle.
          </div>
        </section>
      </div>
    </div>
  )
};

export default PageHome;