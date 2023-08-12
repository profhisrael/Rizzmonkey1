import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import telegramImg from '../assets/images/social/6.png';
import instagramImg from '../assets/images/social/2.png';
import tiktokImg from '../assets/images/social/5.png';
import twitterImg from '../assets/images/social/4.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header_area_main" id="home">
      <div className="container">
        <div className="header_box">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="" />
              <span>Rizz monkey</span>
            </a>
            <a className="bars_menu" href="#" onClick={handleMenuToggle}>
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: '#ffffff', fontSize: '28px' }}
                onClick={handleMenuToggle}
              />
            </a>
          </div>
          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link
                  className="menu-link"
                  duration={1000}
                  spy={true}
                  activeClass="active"
                  to="home"
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="menu-link"
                  duration={1000}
                  spy={true}
                  activeClass="active"
                  to="about"
                  smooth={true}
                >
                  About
                </Link>
              </li>
              <li>
                <Link className="menu-link" activeClass="active" to="how_to" smooth={true}>
                  How to
                </Link>
              </li>

              <li>
                <Link className="menu-link" activeClass="active" to="roadmap" smooth={true}>
                  Roadmap
                </Link>
              </li>
              <li>
                <Link className="menu-link" activeClass="active" to="tokenomics" smooth={true}>
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link className="menu-link" activeClass="active" to="stages" smooth={true}>
                  Stages
                </Link>
              </li>
              <li>
                <Link className="menu-link" activeClass="active" to="faq" smooth={true}>
                  FAQ
                </Link>
              </li>
            </ul>
            <div>
              <a className="header_btn" href="#how_to">
                <button className="btn_1 desktop_hide" href="#how_to">
                  Buy Now!
                </button>
              </a>
            </div>
          </div>

          <div className="header_btn mobile_hide">
            <a className="btn_1" href="#how_to">
              Buy Now!
            </a>
          </div>
          <div className="col-lg-2 mobile_hide">
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
                    target="_blanks"
                  >
                    <img src={tiktokImg} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/rzzmnky?s=11" target="_blanks">
                    <img src={twitterImg} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
