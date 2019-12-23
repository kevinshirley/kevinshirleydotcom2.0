import React from 'react';
import RoundedButton from 'ui/src/components/material-ui/rounded-button';
import Link from 'ui/src/components/common/link';

function HomeSection2() {
  return (
    <div className="home-section-2">
      <div className="content">
        <div className="image">
          <div className="row">
            <span className="iconify" data-icon="logos:react" data-inline="false"></span>
            <span className="iconify" data-icon="logos:angular-icon" data-inline="false"></span>
            <span className="iconify" data-icon="logos:vue" data-inline="false"></span>
            <span className="iconify" data-icon="logos:sass" data-inline="false"></span>
          </div>
          <div className="row">
            <span className="iconify" data-icon="fa-brands:node-js" data-inline="false"></span>
            <span className="iconify" data-icon="logos:graphql" data-inline="false"></span>
            <span className="iconify" data-icon="logos:aws" data-inline="false"></span>
            <span className="iconify" data-icon="logos:firebase" data-inline="false"></span>
          </div>
          <div className="row">
            <span className="iconify" data-icon="logos:flutter" data-inline="false"></span>
            <span className="iconify" data-icon="logos:typescript-icon" data-inline="false"></span>
            <span className="iconify" data-icon="logos:php" data-inline="false"></span>
            <span className="iconify" data-icon="logos:docker-icon" data-inline="false"></span>
          </div>
        </div>
        <div className="text">
          <span>The Bio</span>
          <h3>A Software Developer's journey</h3>
          <p>Hi, I'm Kevin Shirley. My experience has enabled me to acquire a vast knowledge in software development. I first developed a passion in building beautiful user interfaces...</p>
          <Link href="/about">
            <RoundedButton text="Learn more" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;