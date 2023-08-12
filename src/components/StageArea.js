import React from 'react';
import dottedline1 from '../assets/images/stage/line1.png';
import dottedline2 from '../assets/images/stage/line2.png';

function StageArea() {
  return (
    <section className="stage_area section_padding" id="stages">
      <div className="container">
        <div className="section_title">
          <h2>Presale stages</h2>
        </div>
        <div className="stage_box">
          <div className="row g-5">
            <div className="col-md-6">
              <div className="single-stage">
                <h4>$0,000005073 = 1 RZZMNKY</h4>
                <ul>
                  <li>
                    <p>Price: $0,000005073 = 1 RZZMNKY</p>
                  </li>
                  <li>
                    <p>Token supply: 125454545454 (18%)</p>
                  </li>
                  <li>
                    <p>Duration: 15 days</p>
                  </li>
                </ul>
                <button className="stage_btn">First Stage</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-stage">
                <h4>$0,000005637 = 1 RZZMNKY</h4>
                <ul>
                  <li>
                    <p>Price: $0,000005637 = 1 RZZMNKY</p>
                  </li>
                  <li>
                    <p>Token supply: 125454545454 (18%)</p>
                  </li>
                  <li>
                    <p>Duration: 15 days</p>
                  </li>
                </ul>
                <button className="stage_btn">Second stage</button>
              </div>
            </div>
            <div className="col-md-6 mobile_order_3">
              {/* This stage will appear last in mobile devices */}
              <div className="single-stage">
                <h4>$0,00000696 = 1 RZZMNKY</h4>
                <ul>
                  <li>
                    <p>Price: $0,00000696 = 1 RZZMNKY</p>
                  </li>
                  <li>
                    <p>Token supply: 69696969696 (10% each)</p>
                  </li>
                  <li>
                    <p>Rizz it up!</p>
                  </li>
                </ul>
                <button className="stage_btn">DEX & CEX listing</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-stage">
                <h4>$0,000006264 = 1 RZZMNKY</h4>
                <ul>
                  <li>
                    <p>Price: $0,000006264 = 1 RZZMNKY</p>
                  </li>
                  <li>
                    <p>Token supply: 132424242424 (19%)</p>
                  </li>
                  <li>
                    <p>Duration: 15 days</p>
                  </li>
                </ul>
                <button className="stage_btn">Third Stage</button>
              </div>
            </div>
          </div>
          <div className="dot1">
            <img src={dottedline1} alt="" />
          </div>
          <div className="dot2">
            <img src={dottedline2} alt="" />
          </div>
          <div className="dot3">
            <img src={dottedline1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StageArea;
