import React from 'react';
import tokenomicsimg from '../assets/images/tokenomics/tokenomics.png';
function Tokenomics() {
  return (
    <section className="tokenomics_area" id="tokenomics">
      <div className="container">
        <div className="tokenomics">
          <div className="section_title">
            <h2>Tokenomics</h2>
          </div>
          <div className="tokenomics_img">
            <img src={tokenomicsimg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
