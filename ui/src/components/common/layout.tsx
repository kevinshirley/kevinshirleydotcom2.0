import React from 'react';
import Head from 'next/head';
import Navbar from 'ui/src/components/common/navbar';
import 'ui/src/styles/app.scss';

function Layout(props: any) {
  return (
    <div className="container layout">
      <Head>
        <title>Kevin Shirley | Full Stack Software Developer</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;