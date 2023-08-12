import React from 'react';
import pancake_logo from '../assets/images/feature/1.png';
import coinMarket from '../assets/images/feature/2.png';
import uniSwap from '../assets/images/feature/3.png';

const FeatureArea = () => {
  return (
    <section className="featear_area section_padding">
      <div className="container">
        <div className="section_title">
          <h2>FEATURED IN</h2>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-md-4">
            <div className="feather_logo">
              <img src={pancake_logo} alt="" style={{ width: '336px', height: '70px' }} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="feather_logo">
              <img src={coinMarket} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="feather_logo">
              <img src={uniSwap} alt="" style={{ width: '336px', height: '70px' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureArea;
