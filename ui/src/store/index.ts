import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import nextReduxWrapper from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';

import rootReducer from 'ui/src/store/rootReducer';
import rootSaga from 'ui/src/store/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const store: any = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}