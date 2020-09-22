import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'src/store/actions';
import storeConnector from 'src/store/selectors/common';
import Link from 'src/components/common/link';
import { TOP_DRAWER_MENU } from 'src/components/material-ui/icons';

function FooterSection2({ openScheduleModal }) {
  return (
    <div className="footer-section-2">
      <div className="list">
        {TOP_DRAWER_MENU.map((obj, index) => (
          <Link href={obj.pathname} key={index}>{obj.label}</Link>
        ))}
        <span onClick={openScheduleModal}>Schedule a call</span>
      </div>
    </div>
  );
};

export default connect(
  storeConnector,
  {
    openScheduleModal: actions.ui.openScheduleModal,
  },
)(FooterSection2);
