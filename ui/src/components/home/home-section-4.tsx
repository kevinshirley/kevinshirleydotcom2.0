import React from 'react';
import RoundedButton from 'ui/src/components/material-ui/rounded-button';
import Link from 'ui/src/components/common/link';

function HomeSection4() {
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
          <Link href="/services">
            <RoundedButton text="Learn more" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;