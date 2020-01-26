import React from 'react';
import { CardSlider } from 'src/components/common/mobile-card-slider';
import { PORTFOLIO } from 'src/constants/portfolio';

function HomeSection3({ openModal, selectPortfolio }) {
  return (
    <div className='home-section-3'>
      <div className="content">
        <div className="header">
          <span>The Breakdown</span>
          <h3>Portfolio</h3>
        </div>
        <div className="cards">
          <CardSlider 
            cards={PORTFOLIO} 
            openModal={openModal} 
            selectPortfolio={selectPortfolio}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;