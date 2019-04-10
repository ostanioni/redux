import React, { Component } from 'react';
import styled from 'styled-components';

const MrThirdStyled = styled.div.attrs(
props=>{

})`
width: 50%;
height: 50%;
display: inline-block;
border: 1px solid cyan;
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
