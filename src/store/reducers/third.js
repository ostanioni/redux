export default function msg(state = {}, action) {
  switch (action.type) {
    case 'SEND_MSG_FROM_MR_THIRD':
      return state.msg = 'Hello from Mr.Third'
    default:
      return state.msg = 'Has no msg'
  }
}