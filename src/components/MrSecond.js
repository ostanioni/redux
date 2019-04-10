import React, { Component } from 'react';
import styled from 'styled-components';

const MrSecondStyled = styled.div.attrs(
props=>{

})`
width: 50%;
height: 50%;
display: inline-block;
border: 1px solid green;
`

export default class MrSecond extends Component {
  render() {
    return (
      <>
        <MrSecondStyled>
          {this.props.children}
        </MrSecondStyled>
      </>
    )
  }
}
