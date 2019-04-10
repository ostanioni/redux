import React, { Component } from 'react';
import styled from 'styled-components';

const MrFirstStyled = styled.div.attrs(
props=>{

})`
width: 50%;
height: 50%;
display: inline-block;
border: 1px solid blue;
`

export default class MrFirst extends Component {
  render() {
    return (
      <>
        <MrFirstStyled>
          {this.props.children}
        </MrFirstStyled>
      </>
    )
  }
}
