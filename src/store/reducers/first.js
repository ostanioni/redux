export default function msg(state = {}, action) {
  switch (action.type) {
    case 'SEND_MSG_FROM_MR_FIRST':
      return state.msg = 'Hello from Mr.First'
    default:
      return state.msg = 'Has no msg'
  }
}