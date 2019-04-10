import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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
class MrFirst extends Component {
  showMsg = ()=>{
    this.props.dispatch({type:'SHOW_MSG'});
  }
  render() {
    console.log(this.props)
    return (
      <MrFirstStyled onClick={this.showMsg}>
        <span className="center">
          {this.props.children}
        </span>
        <br />
        {this.props.msg}     
      </MrFirstStyled>
    )
  }
}
function mapStateToProps(state) {
  return {
    msg: state.msg,
  };
}
export default connect(mapStateToProps)(MrFirst);
