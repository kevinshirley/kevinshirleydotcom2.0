import React from 'react';
import Head from 'next/head';
import Navbar from 'ui/src/components/common/navbar';
import Footer from 'ui/src/components/footer';
import 'ui/src/styles/app.scss';
import Card from 'ui/src/components/material-ui/card';
import { PORTFOLIO } from 'ui/src/constants/portfolio';
import bgImg from 'ui/src/assets/images/do-something-great.jpg';

function Layout(props: any) {
  return (
    <div className="container layout">
      <Head>
        <title>Kevin Shirley | Full Stack Software Developer</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <script src="https://code.iconify.design/1/1.0.3/iconify.min.js"></script>
      </Head>
      <Navbar />
      {props.children}
      <div className="modal-wrapper">
        <form className="modal-form">
          <Card 
            image={bgImg}
            title={PORTFOLIO[0].title}
            description={PORTFOLIO[0].description}
            isModal
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;