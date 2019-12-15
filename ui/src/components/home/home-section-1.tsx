import React from 'react';
import devTeam from 'ui/src/assets/images/development-team.svg';

function HomeSection1() {
  return (
    <div className='home-section-1'>
      <div className="form">
        <h2>Build Your Online Platform</h2>
        <input type="text" placeholder="Your name"/>
        <input type="text" placeholder="Email"/>
        <input type="phone" placeholder="Phone"/>
        <button>Submit</button>
      </div>
      <div className="flat-design-image">
        <img src={devTeam} alt="Development Team"/>
      </div>
    </div>
  );
};

export default HomeSection1;