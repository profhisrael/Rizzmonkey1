import React from 'react';
import vid from '../assets/video.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Area() {
  return (
    <section className="about_area section_padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about_left">
              <h3>ABOUT RIZZ MONKEY</h3>
              <p>
                Hi, I am the Rizzmonkey. Take a quick look to the right…Oh have you fallen in love
                yet? I use an ancient technique of my ancestors which makes me irresistible, it's
                called Rizz. My sweet face is certainly familiar to you, because I am very active on
                social media and have already built a large community. When I look through my dms in
                the evening, I see many attractive people, like you, who keep asking me, “Please
                teach me the Rizz.”. Again and again I have to explain that you can't learn Rizz,
                you have to get it. But the messages became more and more and I had to act to help
                my people. At the $RZZMNKY token, people can buy shares of my Rizz and can now
                easily, Rizz ANYONE. Wait I'll show you…
              </p>
              <a className="btn_1" href={'/Whitepaper.pdf'} target="_blank" rel="noreferrer">
                TAKE A DIVE &nbsp; <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <video
              src={vid}
              alt=""
              autoPlay
              loop
              muted
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Area;
