export default function first(state = {}, action) {
  switch (action.type) {
    case 'SEND_MSG':
      return state.msg = 'Hello from Mr.First'
    default:
      return state.msg = 'Has no msg'
  }
}