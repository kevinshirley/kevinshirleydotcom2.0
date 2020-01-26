import React from 'react';
import Head from 'next/head';

import 'src/styles/app.scss';

function Layout(props: any) {
  return (
    <div className="container layout">
      <Head>
        <title>Kevin Shirley | Full Stack Software Developer</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <script src="https://code.iconify.design/1/1.0.3/iconify.min.js"></script>
      </Head>
      {props.children}
    </div>
  );
};

export default Layout;