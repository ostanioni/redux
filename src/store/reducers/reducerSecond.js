export default function second(state = {}, action) {
  switch (action.type) {
    case 'SEND_MSG':
      return state.msg = 'Hello from Mr.Second'
    default:
      return state.msg = 'Has no msg'
  }
}