export default function msg(state = {}, action) {
  switch (action.type) {
    case 'SEND_MSG_FROM_MR_SECOND':
      return state.msg = 'Hello from Mr.Second'
    default:
      return state.msg = 'Has no msg'
  }
}