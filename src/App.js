import React from 'react';
import {observer, inject} from "mobx-react";

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import AppBar from 'components/AppBar';
import Button from 'components/Button';
import Layout from 'layouts/Layout';
import './public/css/App.css';
// import BasicExample from 'components/BasicExample';
import { BrowserRouter as Router } from "react-router-dom"
import Table from 'tables/Table'



const GlobalStyle = createGlobalStyle`
  html {
    font-size: 3vw;
    /*
    @media (max-width: 700px){
      font-size: 2vw;
    } */
  }
  body {
    font-family: 'Roboto', sans-serif;
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background-color: black;
  }
`;
/*
const complexMixin = css`
  background-color: ${ props => (props.light ? 'black' : 'white' ) };
             color: ${ props => (props.whiteColor ? 'white' : 'black')};
`;
// This is an example of a nested interpolation
const StyledComp = styled.div`
  ${props => (props.complex ? complexMixin : 'color: blue;')};
`;
*/

const Container = styled.div`
  position: relative;
  top: 150px;
  font-size: 22px ;
  background-color: ${ props=>props.theme.bg };
  color: ${ props=>props.theme.text };
`;


@inject('settingsStore','themesStore')
@observer
class App extends React.Component {
  changeTheme = () => {
    this.props.settingsStore.setTheme('light')
    //this.theme === 'dark'? this.theme = 'light': this.theme = 'dark';
    console.log('CHANGED')
  }
  render() {
    return (
      <ThemeProvider theme={this.props.themesStore[this.props.settingsStore.theme]}>
    <>
        <GlobalStyle />
            <AppBar />
          <Container>
          <Table />
          <Layout className=""></Layout>
          <button onClick={this.changeTheme}>PRESS</button>
          HELLO  <span>&#xf114; &#xf039; &#x2605; &#x2605; &#x2605; &#x2606; &#x2606;</span>
          <img src="imgs/theme-light-dark.svg" alt="" width="100px" />
          <Button />
        </Container>
        <img src="imgs/theme-light-dark.svg" alt="" />      
    </>
    </ThemeProvider>
    )
  }
};

export default App;