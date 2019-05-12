import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

class MrThird extends Component {
  showMsg = ()=>{
    this.props.dispatch({type:'SEND_MSG_ASYNC', text:'Hello from Mr.Third'});
  }
  render() {
    return (
      <>
        <MrThirdStyled onClick={this.showMsg}>
          {this.props.children}
          <br />
          {this.props.msg}
        </MrThirdStyled>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    msg: state.msg.text,
  };
}
export default connect(mapStateToProps)(MrThird);