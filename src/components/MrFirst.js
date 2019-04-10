import React, { Component } from 'react';
import styled from 'styled-components';

const MrFirstStyled = styled.div.attrs(
props=>{

})`
width: calc(50% - 20px);
height: 45vh;
display: inline-block;
border: 2px solid blue;
margin: 10px;
text-align: center;
`
export default class MrFirst extends Component {
  render() {
    return (
      <>
        <MrFirstStyled>
          <span className="center">
            {this.props.children}
          </span>          
        </MrFirstStyled>
      </>
    )
  }
}
