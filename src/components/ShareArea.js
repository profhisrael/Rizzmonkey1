import React from 'react';
import { Link } from 'react-scroll';
import shareimg from '../assets/images/share/share.png';
import shape from '../assets/images/token/shape.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ShareArea() {
  return (
    <section className="share_area">
      <div className="container">
        <div className="share_box">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="share_text">
                <h2>
                  get a{' '}
                  <span>
                    share <img src={shape} alt="" />
                  </span>{' '}
                  of rizz!
                </h2>
                <Link to="home" smooth={true}>
                  <button className="btn_1">
                    PRE-SALE &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="share_img">
                <img src={shareimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShareArea;
