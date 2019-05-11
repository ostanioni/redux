export default function msg(state = {}, action) {
  switch (action.type) {
    case 'SEND_MSG_MR_FOURTH':
      return state.msg = 'Hello from Mr.Fourth'
    default:
      return state.msg = 'Has no msg'
  }
}