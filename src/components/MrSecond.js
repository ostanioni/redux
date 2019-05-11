import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

class MrSecond extends Component {
  showMsg = ()=>{
    this.props.dispatch({type:'SEND_MSG', text:'Hello from Mr.Second'});
  }
  render() {
    return (
      <>
        <MrSecondStyled onClick={this.showMsg}>
          {this.props.children}
          <br />
          {this.props.msg}
        </MrSecondStyled>
      </>
    )
  }
}
function mapStateToProps(state) {
  return {
    msg: state.msg.text,
  };
}
export default connect(mapStateToProps)(MrSecond);
