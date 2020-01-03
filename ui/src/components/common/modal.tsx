import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import * as actions from 'ui/src/store/actions';
import bgImg from 'ui/src/assets/images/do-something-great.jpg';
import Card from 'ui/src/components/material-ui/card';
import { CLOSE_ICON } from 'ui/src/components/material-ui/icons';
import storeConnector from 'ui/src/store/selectors/common';
import { PORTFOLIO } from 'ui/src/constants/portfolio';

function Modal({ isModalOpened, closeModal, selectedPortfolio }) {
  const modalWrapperStyle = { display: isModalOpened ? 'block' : 'none' };
  console.log('selectedPortfolio', selectedPortfolio);
  {selectedPortfolio === 0 && console.log('PORTFOLIO[selectedPortfolio].title', PORTFOLIO[selectedPortfolio].title)}
  return (
    <div 
      className="modal-wrapper" 
      style={modalWrapperStyle}
    >
      <form className="modal-form">
        <div className="wrapper">
          <div className="close-modal">
            <span onClick={closeModal}>{CLOSE_ICON}</span>
          </div>
          {selectedPortfolio && selectedPortfolio !== 0 && (
            <Card 
              image={PORTFOLIO[selectedPortfolio].image}
              title={PORTFOLIO[selectedPortfolio].title}
              description={PORTFOLIO[selectedPortfolio].description}
              isModal
            />
          )}
          {/* Duplicate Card because of "0" bug in the first array item displayed - To Be Fixed */}
          {selectedPortfolio === 0 && (
            <Card 
              image={PORTFOLIO[selectedPortfolio].image}
              title={PORTFOLIO[selectedPortfolio].title}
              description={PORTFOLIO[selectedPortfolio].description}
              isModal
            />
          )}
          <div className="divider"></div>
        </div>
      </form>
    </div>
  );
};

export default connect(
  storeConnector,
  {
    closeModal: actions.ui.closeModal,
  },
)(Modal);
