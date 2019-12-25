import React from 'react';
import bgImg from 'ui/src/assets/images/do-something-great.jpg';
import Card from 'ui/src/components/material-ui/card';
import { CardSlider } from 'ui/src/components/common/mobile-card-slider';
import { PORTFOLIO } from 'ui/src/constants/portfolio';

function HomeSection3() {
  return (
    <div className='home-section-3'>
      <div className="content">
        <div className="header">
          <span>The Breakdown</span>
          <h3>Portfolio</h3>
        </div>
        <div className="cards">
          <CardSlider cards={PORTFOLIO} />
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;