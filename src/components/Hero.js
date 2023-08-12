import React from 'react';
import Panel from './Panel';
import banana from '../assets/images/banana.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="banner_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner_text">
              <h2> GET SOME GAME WITH $RZZMNKY!</h2>
              <p>
                Hi, I am the Rizzmonkey. I use an ancient technique of my ancestors which makes me
                irresistible, it's called Rizz. My sweet face is certainly familiar to you, because
                I am very active on social media and have already built a large community. At the
                $RZZMNKY token, people can buy shares of my Rizz and can now easily, Rizz ANYONE.
              </p>
              <a className="btn_1" href={'/Whitepaper.pdf'} target="_blank" rel="noreferrer">
                TAKE A DIVE <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <img
                className="banana-img"
                src={banana}
                style={{ height: '80px', width: '120px', marginLeft: '35px' }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <Panel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
