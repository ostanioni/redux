import React, { Component } from 'react';

import {createGlobalStyle } from 'styled-components';

import MrFirst from 'components/MrFirst';
import MrSecond from 'components/MrSecond';
import MrThird from 'components/MrThird';
import MrFourth from 'components/MrFourth';


const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  html {
    font-size: 20px;
  }
  body, div {
    color: white;
    background-color: black;
  }
`;

export default class Layout extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <MrFirst>I'm the First</MrFirst>
        <MrSecond>I'm the Second</MrSecond>
        <MrThird>I'm the Third</MrThird>
        <MrFourth>I'm the Fourth</MrFourth>
      </>
    )
  }
}
