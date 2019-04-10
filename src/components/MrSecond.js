import React, { Component } from 'react';
import styled from 'styled-components';

const MrSecondStyled = styled.div.attrs(
props=>{

})`
width: calc(50% - 20px);
height: 45vh;
display: inline-block;
border: 2px solid green;
margin: 10px;
text-align: center;
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
