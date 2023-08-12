import React from 'react';

function BuyArea() {
  return (
    <section className="buy_area section_padding" id="how_to">
      <div className="container">
        <div className="section_title">
          <h2>How to buy?</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="buy_single">
              <h3>1</h3>
              <h4>First step</h4>
              <p>
                Make sure that your wallet is on the BEP-20 network! Now you can send BNB, USDT, ETHB or BTCB to your wallet and connect it with the presale panel.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="buy_single">
              <h3>2</h3>
              <h4>Second step</h4>
              <p>
                Chose which currency you want to use for the purchase by clicking on one of the currency symbols. Now enter the amount of your chosen currency you want to spend. It will show the amount of $RZZMNKY token you are going to buy.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="buy_single">
              <h3>3</h3>
              <h4>Last step</h4>
              <p>
                Now use the "BUY" button to finalize the payment. After that you can reload the website and see the amount of tokens you bought and when you’ll be able to claim. Your good to go now!
              </p>
            </div>
          </div>

        </div>

        <br />
        <br />
        <br />
        <p align="center"><b> Contract Address:</b> 0x7034c2cCeACfe857D2f25F4f147aF0520675Bc43</p>
      </div>
    </section>
  );
}

export default BuyArea;
