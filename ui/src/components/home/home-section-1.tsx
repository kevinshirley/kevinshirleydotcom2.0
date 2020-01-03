import React from 'react';
import devTeam from 'ui/src/assets/images/development-team.svg';
import TextField from 'ui/src/components/material-ui/input-text-with-icon';
import { FIRST_HOME_FORM } from 'ui/src/components/material-ui/icons';
import RoundedButton from 'ui/src/components/material-ui/rounded-button';

function HomeSection1() {
  return (
    <div className='home-section-1'>
      <div className="form">
        <h2>Build Your Online Platform</h2>
        <span className="sub-title">You want me to contact you?<br/> Leave me your info</span>
        <TextField text="Name" icon={FIRST_HOME_FORM.NAME} />
        <TextField text="Email" icon={FIRST_HOME_FORM.EMAIL} />
        <TextField text="Phone number" icon={FIRST_HOME_FORM.PHONE} />
        <RoundedButton text="Submit" />
      </div>
      <div className="flat-design-image">
        <img src={devTeam} alt="Development Team"/>
      </div>
    </div>
  );
};

export default HomeSection1;