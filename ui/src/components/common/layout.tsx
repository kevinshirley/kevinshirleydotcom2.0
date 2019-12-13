import React from 'react';
import Head from 'next/head';
import Navbar from 'ui/src/components/common/navbar';
import 'ui/src/styles/app.scss';

function Layout(props: any) {
  return (
    <div className="container layout">
      <Head>
        <title>Kevin Shirley | Full Stack Software Developer</title>
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;