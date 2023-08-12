import React from 'react';

const Banner = () => {
  return (
    <section className="banner_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner_text">
              <h2> GET SOME GAME WITH $RIZZMNKY!</h2>
              <p>
                Hi, I am the Rizzmonkey. I use an ancient technique of my ancestors which makes me
                irresistible, it's called Rizz. My sweet face is certainly familiar to you, because
                I am very active on social media and have already built a large community. At the
                $RZZMNKY token, people can buy shares of my Rizz and can now easily, Rizz ANYONE.
              </p>
              <button className="btn_1">TAKE A DIVE</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner_card">
              <div className="monkey_card">
                <div className="monkey_countdown">
                  <div id="countdown">
                    <ul>
                      <li>
                        <p>
                          <span id="days"></span> <br /> <span className="count_name">DAYS</span>
                        </p>
                      </li>
                      <li>
                        <p>:</p>
                      </li>
                      <li>
                        <p>
                          <span id="hours"></span> <br /> <span className="count_name">HOURS</span>
                        </p>
                      </li>
                      <li>
                        <p>:</p>
                      </li>
                      <li>
                        <p>
                          <span id="minutes"></span> <br />{' '}
                          <span className="count_name">MINUTES</span>
                        </p>
                      </li>
                      <li>
                        <p>:</p>
                      </li>
                      <li>
                        <p>
                          <span id="seconds"></span> <br />{' '}
                          <span className="count_name">SECONDS</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="monkey_progress">
                  <div className="progress">
                    <div className="bar" style="width:65%">
                      <p className="percent">Until Next Price $0.01</p>
                    </div>
                  </div>
                </div>
                <div className="monekey_info">
                  <p>USDT raised: $5,272,622/$5,700,00</p>
                  <p>LISTING PRICE: $0.01</p>
                </div>
                <div className="monkey_form_title">
                  <span></span>
                  <p>1 RizzMonkey = $0.00925</p>
                  <span></span>
                </div>
                <div className="monekey_tabs">
                  <ul className="monekey_button">
                    <li>
                      <button className="active" id="ETH">
                        <img src="assets/images/1.svg" alt="" />
                        <p>ETH</p>
                      </button>
                    </li>
                    <li>
                      <button id="USDT">
                        <img src="assets/images/2.svg" alt="" />
                        <p>USDT</p>
                      </button>
                    </li>
                    <li>
                      <button id="BNB">
                        <img src="assets/images/3.svg" alt="" />
                        <p>BNB</p>
                      </button>
                    </li>
                    <li>
                      <button id="BTC">
                        <img src="assets/images/4.svg" alt="" />
                        <p>BTC</p>
                      </button>
                    </li>
                  </ul>
                  <div className="monkey_tabs_content">
                    <div className="monkey_form ETH">
                      <div className="from_input">
                        <div className="form_group">
                          <label>Amount in ETH you pay</label>
                          <input type="text" value="0" />
                        </div>
                        <img src="assets/images/form/1.svg" alt="" />
                      </div>
                      <div className="from_input">
                        <div className="form_group">
                          <label>Amount in Rizzmonkey you recieve</label>
                          <input type="text" value="0" />
                        </div>
                        <div className="img_monkey">
                          <img src="assets/images/logo-monkey.svg" alt="" />
                        </div>
                      </div>

                      <div className="form_submit_btn">
                        <button>CONECT WALLET</button>
                      </div>
                    </div>
                    <div className="monkey_form USDT">
                      <div className="from_input">
                        <div className="form_group">
                          <label>Amount in USDT you pay</label>
                          <input type="text" value="0" />
                        </div>
                        <img src="assets/images/form/2.svg" alt="" />
                      </div>
                      <div className="from_input">
                        <div className="form_group">
                          <label>Amount in Rizzmonkey you recieve</label>
                          <input type="text" value="0" />
                        </div>
                        <div className="img_monkey">
                          <img src="assets/images/logo-monkey.svg" alt="" />
                        </div>
                      </div>

                      <div className="form_submit_btn">
                        <button>CONECT WALLET</button>
                      </div>
                    </div>
                    <div className="monkey_form BNB">
                      <div className="from_input">
                        <div className="form_group">
                          <label>Amount in BNB you pay</label>
                          <input type="text" value="0" />
                        </div>
                        <img src="assets/images/form/3.svg" alt="" />
                      </div>
                      <div className="from_input">
                        <div className="form_group">
                          <label>Amount in Rizzmonkey you recieve</label>
                          <input type="text" value="0" />
                        </div>
                        <div className="img_monkey">
                          <img src="assets/images/logo-monkey.svg" alt="" />
                        </div>
                      </div>

                      <div className="form_submit_btn">
                        <button>CONECT WALLET</button>
                      </div>
                    </div>
                    <div className="monkey_form BTC">
                      <div className="from_input">
                        <div className="form_group">
                          <label>Amount in BTC you pay</label>
                          <input type="text" value="0" />
                        </div>
                        <img src="assets/images/form/4.svg" alt="" />
                      </div>
                      <div className="from_input">
                        <div className="form_group">
                          <label>Amount in Rizzmonkey you recieve</label>
                          <input type="text" value="0" />
                        </div>
                        <div className="img_monkey">
                          <img src="assets/images/logo-monkey.svg" alt="" />
                        </div>
                      </div>

                      <div className="form_submit_btn">
                        <button>CONECT WALLET</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="monkey_footer">
                  <img src="assets/images/svg.svg" alt="" />
                  <p>Learn how to buy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
