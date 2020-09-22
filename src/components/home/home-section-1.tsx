import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'src/store/actions';
import storeConnector from 'src/store/selectors/common';
import devTeam from 'src/assets/images/development-team.svg';
import TextField from 'src/components/material-ui/input-text-with-icon';
import { FIRST_HOME_FORM } from 'src/components/material-ui/icons';
import RoundedButton from 'src/components/material-ui/rounded-button';

function HomeSection1({ openScheduleModal }) {
  return (
    <div className='home-section-1'>
      <div className="form">
        <h2>Building modern day apps</h2>
        <ul>
          <li>Do you need help to build a website or a mobile application?</li>
          <li>Tell me about your project, I would love to talk about it</li>
          <li>Pick a time that suits you best to talk</li>
        </ul>
        <RoundedButton text="Schedule a call" onClick={openScheduleModal} />
      </div>
      <div className="flat-design-image">
        <img src={devTeam} alt="Development Team"/>
      </div>
    </div>
  );
};

export default connect(
  storeConnector,
  {
    openScheduleModal: actions.ui.openScheduleModal,
  },
)(HomeSection1);
