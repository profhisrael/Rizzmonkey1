import React from 'react';
import Roadmapimg from '../assets/images/roadmap/raodmap.png';
function Roadmap() {
  const headingStyle = {
    textAlign: 'right',
    margin: '0',
    marginRight: '17px',
    padding: '0'
  };
  return (
    <section className="roadmap_area section_padding" id="roadmap">
      <div className="container">
        <div className="section_title">
          <h2>Roadmap</h2>
        </div>
        <div className="roadmap">
          <img src={Roadmapimg} alt="" />
          <div className="roadmap_single roadmap_single1">
            <h3 style={headingStyle}>Q1</h3>
            <p>Whitepaper, Site Launch, Token Developement, Tokenomics, Market Research</p>
          </div>
          <div className="roadmap_single roadmap_single2">
            <h3 className="roadmap_yellow">Q2</h3>
            <p>
              Presale Start, Token Launch, Social Media (Launch/Campain), CEX & DEX Listing. CMC
              Listing
            </p>
          </div>
          <div className="roadmap_single roadmap_single3">
            <h3 style={headingStyle}>Q3</h3>
            <p>Partnerships, Community Events, Marketing. Charity Events</p>
          </div>
          <div className="roadmap_text">
            <h3>Q4 Coming Soon</h3>
            <p>Coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
