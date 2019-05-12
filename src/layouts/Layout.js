import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'store/reducers';
import createSagaMiddleware from 'redux-saga';

import GlobalStyle from 'styles/GlobalStyle';

import MrFirst  from 'components/MrFirst';
import MrSecond from 'components/MrSecond';
import MrThird  from 'components/MrThird';
import MrFourth from 'components/MrFourth';

import rootSaga from 'sagas/helloSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers( applyMiddleware(sagaMiddleware) ));
sagaMiddleware.run(rootSaga)

export default class Layout extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <MrFirst> I'm the First  </MrFirst>
        <MrSecond>I'm the Second </MrSecond>
        <MrThird> I'm the Third  </MrThird>
        <MrFourth>I'm the Fourth </MrFourth>
      </Provider>
    )
  }
}
