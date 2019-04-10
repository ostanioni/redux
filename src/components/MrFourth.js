import React, { Component } from 'react';
import styled from 'styled-components';

const MrFourthStyled = styled.div.attrs(
props=>{

})`
width: calc(50% - 20px);
height: 45vh;
display: inline-block;
border: 2px solid red;
margin: 10px;
text-align: center;
`

export default class MrFourth extends Component {
  render() {
    return (
      <>
        <MrFourthStyled>
          {this.props.children}
        </MrFourthStyled>
      </>
    )
  }
}
