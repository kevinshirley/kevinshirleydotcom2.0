import 'isomorphic-fetch';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import App from 'next/app';

import configureStore from 'src/store';
import Layout from 'src/components/common/layout';
import Navbar from 'src/components/common/navbar';
import Modal from 'src/components/common/modal';
import ScheduleModal from 'src/components/common/schedule-modal';
import Footer from 'src/components/footer';

function Root({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Modal />
      <ScheduleModal />
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
// const AuthRoot = withAuthenticator(Root, true);
// export default withRedux(configureStore)(withReduxSaga(AuthRoot));
export default withRedux(configureStore)(withReduxSaga(Root));
