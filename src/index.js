import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';

import rootSaga from './app/redux/sagas'
import rootReducer from './app/redux/reducers';

import App from './app';
import './index.scss';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
