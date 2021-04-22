import React from 'react';
import './PageAbout.less';
import imgProfile from '../../img/profilowe.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import imgBuildings from '../../img/buildings.jpg';
import imgHands from '../../img/hands.jpg';
import imgPeople from '../../img/people.jpg';

const PageAbout = () => {
  return (
    <div className="page-about">
      <div className="page-about__header">
        <div className="container">
          <div className="row align-items-center">
            <img className="author-img" src={imgProfile} />
            <p>
              Radosław Szymański
              <p>Front-End Developer</p>
            </p>
          </div>
        </div>
      </div>
      <div className="page-about__text">
        <div className="container">
          <h2>About me</h2>
          <p>
            Hey! My name is Radek, I'm 29 years old Front End Developer.
            <br></br>
            I started my adventure with coding about 2 years ago, learning on some courses on YouTube and Udemy.com. Last year i got practice in one of Zielona Gora companies. After six months, they employed me!
            
          </p>
          <p>
            It was a really good experience, but my dream (or maybe i should say goal) it's become a React Front-End Developer!
          </p>
        </div>
      </div>
      <SRLWrapper>
        <div className="container">
          <div className="gallery">
            <div>
              <a href={imgBuildings}>
                <img src={imgBuildings} alt="Umbrella" />
              </a>
            </div>
            <div>
              <a href={imgPeople}>
                <img src={imgPeople} alt="Umbrella" />
              </a>
              <a href={imgHands}>
                <img src={imgHands} alt="Umbrella" />
              </a>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </div>
  )
};

export default PageAbout;