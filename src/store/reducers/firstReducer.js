function reducer(state, action){
  if (action.type === 'SEND_MSG_FROM_MR_FIRST'){
    return {
      msg: "Hello from Mr.First",
    }
  }
  return {
    msg: 'Hello from initialState'
  }
}

export default reducer;