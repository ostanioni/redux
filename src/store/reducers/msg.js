export default function msg(state = 'Has no msg', action) {
  switch (action.type) {
    case 'SEND_MSG_FROM_MR_FIRST':
      return state = 'Hello from Mr.First'
    case 'SEND_MSG_FROM_MR_SECOND':
      return state = 'Hello from Mr.Second'
    case 'SEND_MSG_FROM_MR_THIRD':
      return state = 'Hello from Mr.Third'
    case 'SEND_MSG_FROM_MR_FOURTH':
      return state = 'Hello from Mr.Fourth'
    default:
      return state
  }
}