import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'src/store/actions';
import storeConnector from 'src/store/selectors/common';
import RoundedButton from 'src/components/material-ui/rounded-button';

function HomeSection4({ openScheduleModal }) {
  return (
    <div className="home-section-4">
      <div className="content">
        <div className="image">
          <span className="iconify" data-icon="flat-ui:responsive" data-inline="false"></span>
        </div>
        <div className="text">
          <span>The Possibilities</span>
          <h3>When tools and strategies meet desired results</h3>
          <p>You have great content and tremendous ideas? Let us build you a mobile friendly website so you can have your own platform to share with the world in no time!</p>
          <RoundedButton text="Schedule a call" onClick={openScheduleModal} />
        </div>
      </div>
    </div>
  );
};

export default connect(
  storeConnector,
  {
    openScheduleModal: actions.ui.openScheduleModal,
  },
)(HomeSection4);
