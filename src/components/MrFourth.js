import React, { Component } from 'react';
import styled from 'styled-components';

const MrFourthStyled = styled.div.attrs(
props=>{

})`
width: 50%;
height: 50%;
display: inline-block;
border: 1px solid red;
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
