import { combineReducers } from 'redux'

let initialState = {
  msg: 'Hello from initialState',
}

function reducer(state=initialState,action){
  if (action.type === 'SHOW_MSG'){
    return {
      msg: "Hello from Reducer",
    }
  }
  return {
    msg: 'Hello from initialState'
  }
}

export default reducer;