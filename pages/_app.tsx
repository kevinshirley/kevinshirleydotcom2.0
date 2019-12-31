import 'isomorphic-fetch';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import App from 'next/app';

import configureStore from 'ui/src/store';
import Layout from 'ui/src/components/common/layout';
import Navbar from 'ui/src/components/common/navbar';
import Modal from 'ui/src/components/common/modal';
import Footer from 'ui/src/components/footer';

function Root({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Modal />
      <Footer />
    </Provider>
  );
}

Root.getInitialProps = (async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { 
    pageProps
  };
}) as typeof App.getInitialProps;

// @ts-ignore
export default withRedux(configureStore)(withReduxSaga(Root));
