export default function fourth(state = {}, action) {
  switch (action.type) {
    case 'SEND_MSG':
      return state.msg = 'Hello from Mr.Third'
    default:
      return state.msg = 'Has no msg'
  }
}