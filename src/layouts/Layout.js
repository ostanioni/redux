import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from 'store';

import MrFirst  from 'components/MrFirst';
import MrSecond from 'components/MrSecond';
import MrThird  from 'components/MrThird';
import MrFourth from 'components/MrFourth';

import GlobalStyle from 'styles/GlobalStyle'

let store = createStore(reducer)

export default class Layout extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <MrFirst>I'm the First</MrFirst>
        <MrSecond>I'm the Second</MrSecond>
        <MrThird>I'm the Third</MrThird>
        <MrFourth>I'm the Fourth</MrFourth>
      </Provider>
    )
  }
}
