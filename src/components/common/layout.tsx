import React from 'react';
import Head from 'next/head';
import laptopDesk from 'src/assets/images/laptop-desk.jpg';

import 'src/styles/app.scss';

function Layout(props: any) {
  return (
    <div className="container layout">
      <Head>
        <title>Kevin Shirley | Full Stack Software Developer</title>
        <meta name="description" content="I build modern day apps, ecommerce platforms, web applications and more. Technology and strategy." />
        <meta property="og:title" content="Kevin Shirley | Full Stack Software Developer" key="title" />
        <meta property="og:description" content="I build modern day apps, ecommerce platforms, web applications and more. Technology and strategy." />
        <meta property="og:image" content={laptopDesk} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <script src="https://code.iconify.design/1/1.0.3/iconify.min.js"></script>
      </Head>
      {props.children}
    </div>
  );
};

export default Layout;