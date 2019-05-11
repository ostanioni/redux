
import {createGlobalStyle } from 'styled-components';

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
export default GlobalStyle;