import React from 'react';
import HomeSection1 from 'src/components/home/home-section-1';
import HomeSection2 from 'src/components/home/home-section-2';
import HomeSection3 from 'src/components/home/home-section-3';
import HomeSection4 from 'src/components/home/home-section-4';

function Home({ openModal, selectPortfolio }) {
  return (
    <>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 
        openModal={openModal}
        selectPortfolio={selectPortfolio}
      />
      <HomeSection4 />
    </>
  );
};

export default Home;