import React from 'react';
import HomeSection1 from 'ui/src/components/home/home-section-1';
import HomeSection2 from 'ui/src/components/home/home-section-2';
import HomeSection3 from 'ui/src/components/home/home-section-3';

function Home() {
  return (
    <React.Fragment>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
    </React.Fragment>
  );
};

export default Home;