import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

class MrFourth extends Component {
  showMsg = ()=>{
    this.props.dispatch({type:'SEND_MSG_ASYNC', text:'Hello from Mr.Fourth'});
  }
  render() {
    return (
      <>
        <MrFourthStyled onClick={this.showMsg}>
          {this.props.children}
          <br/>
          {this.props.msg}
        </MrFourthStyled>
      </>
    )
  }
}
function mapStateToProps(state) {
  return {
    msg: state.msg.text,
  };
}
export default connect(mapStateToProps)(MrFourth);
