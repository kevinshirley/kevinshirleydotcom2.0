import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'src/store/actions';
import storeConnector from 'src/store/selectors/common';
import Avatar from 'src/components/material-ui/avatar';
import kevinshirley from 'src/assets/images/kevinshirley-pic.png';
import RoundedButton from 'src/components/material-ui/rounded-button';

function AboutSection2({ openScheduleModal }) {
  return (
    <div className="about-section-2">
      <div className='avatar'>
        <Avatar onClick={() => {}}>
          <img src={kevinshirley} alt='Kevin Shirley' />
        </Avatar>
      </div>
      <p>Hi, I'm Kevin Shirley. My experience has enabled me to acquire a vast knowledge in software development. I first developed a passion in building beautiful user interfaces with the languages of the web. My initial development environment has been the LAMP stack. A long with HTML, CSS, and Javascript, those were the technologies I used to build my first projects with. A long the years I developed a true passion for Javascript. Which has pushed me to build up my expertise with the front-end frameworks like React, Angular, VueJS, and work more in a NodeJS based environment. I recently been starting projects in a more Cloud based approach with the help of AWS Amplify, AWS AppSync, Serverless, Firebase, and so on. The flexibility of this stack of technology has enabled me to start mobile development with Flutter and React Native. The Cloud has made it easiser to share the same data from a database accross all different platforms wheter mobile based, web based or desktop based applications.</p>
      <div className='schedule'>
        <RoundedButton text="Schedule a call" onClick={openScheduleModal} />
      </div>
    </div>
  );
};

export default connect(
  storeConnector,
  {
    openScheduleModal: actions.ui.openScheduleModal,
  },
)(AboutSection2);