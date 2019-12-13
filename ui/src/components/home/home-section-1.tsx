import React from 'react';
import bgImg from 'ui/src/assets/images/do-something-great.jpg';

function HomeSection1() {
  return (
    <div className='home-section-1'>
      <div className='background-image-container'>
        <img src={bgImg} alt=""/>
      </div>
    </div>
  );
};

export default HomeSection1;