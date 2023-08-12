import React from 'react';
import telegramImg from '../assets/images/social/6.png';
import instagramImg from '../assets/images/social/2.png';
import tiktokImg from '../assets/images/social/5.png';
import twitterImg from '../assets/images/social/4.png';
import solidproofImg from '../assets/images/solidproof.png';
/*const imgStyle = {
    marginRight: '-15px', 
    marginTop: '-15px',
  }; */
function FootArea() {
  return (
    <footer className="footer_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="footer_left">
              <p></p>
              <div className="footer_menu">
                <p>Copyright © 2023 Rizz Monkey. All Rights Reserved.</p>
                <a href={'/Terms-Of-Service.pdf'} target="_blank" rel="noreferrer">Terms and Conditions</a>
                <a href={'/Privacy-Policy.pdf'} target="_blank" rel="noreferrer">Privacy</a>
                <a href={'/Cookies-Policy.pdf'} target="_blank" rel="noreferrer">Cookies</a>

    </div>
    </div>
         </div> 
   {/*    <div className="col-lg-2 d-flex align-items-center justify-content-center"> <a href="https://app.solidproof.io/projects/rizz-monkey?audit_id=642" target="_blank" rel="noreferrer">
 <img src={solidproofImg} alt="" width="200" height="50"/>     </a> </div> */}
         
      
      <div className="col-lg-2"> 
            <div className="header_social"> 
              <ul>
                <li>
                  <a href="https://t.me/rizzmonkey" target="_blanks">
                    <img src={telegramImg} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/rzzmnky?igshid=NTc4MTIwNjQ2YQ==" target="_blanks">
                    <img src={instagramImg} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@rzzmnky?_t=8dqimL3S6t0&amp;_r=1"
                    target="_blanks">
                    <img src={tiktokImg} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/rzzmnky?s=11" target="_blanks">
                    <img src={twitterImg} alt="" />
                  </a>
                </li>
              </ul>
              <a href="mailto:contact@rizzmonkey.xzy">contact@rizzmonkey.xyz</a>
            </div>
          </div>
        </div>
        <p className="footer_short">
          Cryptocurrency may be unrequlated in your jurisdiction. The value of cryptocurrencies may
          go down as well as up. Profits may be subject to capital gains or other taxes applicable
          in your jurisdiction.
        </p>
      </div>
    </footer>
  );
}

export default FootArea;
