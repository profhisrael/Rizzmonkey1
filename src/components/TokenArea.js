import React from 'react';
import mobileimg from '../assets/images/token/1.png';
import monkeyimg from '../assets/images/token/2.png';

function TokenArea() {
  return (
    <section className="token_area">
      <div className="container">
        <div className="section_title">
          <h2>
            Use token to <span>Rizz</span>{' '}
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="token_img">
              <img src={mobileimg} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="token_img">
              <img src={monkeyimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TokenArea;
