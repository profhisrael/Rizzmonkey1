import React from 'react';
import checkimg from '../assets/images/choose/check.png';
import timesimg from '../assets/images/choose/times.png';

function ChooseArea() {
  return (
    <section className="choose_area">
      <div className="container">
        <div className="section_title">
          <h2>Why choose rizzmonkey?</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="why_choose_single">
              <button className="stage_btn">Rizzmonkey</button>
              <ul>
                <li>
                  <p>W Rizz</p>
                  <img src={checkimg} alt="" />
                </li>
                <li>
                  <p>Monkey</p>
                  <img src={checkimg} alt="" />
                </li>
                <li>
                  <p>Memecoin</p>
                  <img src={checkimg} alt="" />
                </li>
                <li>
                  <p>Has great hype potential</p>
                  <img src={checkimg} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="why_choose_single">
              <button className="stage_btn">Other memecoins</button>
              <ul>
                <li>
                  <p>No Rizz</p>
                  <img src={timesimg} alt="" />
                </li>
                <li>
                  <p>No monkey</p>
                  <img src={timesimg} alt="" />
                </li>
                <li>
                  <p>Memecoin</p>
                  <img src={checkimg} alt="" />
                </li>
                <li>
                  <p>Has great hype potential</p>
                  <img src={timesimg} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseArea;
