import React, { Component } from 'react';
import styled from 'styled-components';

const MrThirdStyled = styled.div.attrs(
props=>{

})`
width: calc(50% - 20px);
height: 45vh;
display: inline-block;
border: 2px solid cyan;
margin: 10px;
text-align: center;
`

export default class MrThird extends Component {
  render() {
    return (
      <>
        <MrThirdStyled>
          {this.props.children}
        </MrThirdStyled>
      </>
    )
  }
}
