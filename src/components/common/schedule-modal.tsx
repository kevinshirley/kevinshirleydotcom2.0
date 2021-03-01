import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'src/store/actions';
import bgImg from 'src/assets/images/do-something-great.jpg';
import Card from 'src/components/material-ui/card';
import { CLOSE_ICON } from 'src/components/material-ui/icons';
import storeConnector from 'src/store/selectors/common';
import { PORTFOLIO } from 'src/constants/portfolio';

function ScheduleModal({ isScheduleModalOpened, closeScheduleModal }) {
  const modalWrapperStyle = { display: isScheduleModalOpened ? 'block' : 'none' };

  return (
    <div 
      className="modal-wrapper" 
      style={modalWrapperStyle}
    >
      <form className="modal-form">
        <div className="wrapper">
          <div className="close-modal">
            <span onClick={closeScheduleModal}>{CLOSE_ICON}</span>
          </div>
          <iframe src="https://calendly.com/kevinxshirley/30min" style={{ width: '90%', border: 'none', minHeight: '550px', borderRadius: '20px' }}></iframe>
          <div className="divider"></div>
        </div>
      </form>
    </div>
  );
};

export default connect(
  storeConnector,
  {
    closeScheduleModal: actions.ui.closeScheduleModal,
  },
)(ScheduleModal);
