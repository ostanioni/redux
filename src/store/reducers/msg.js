export default function msg(state = 'Has no msg', action) {
  switch (action.type) {
    case 'SEND_MSG':
      return state = action.text
    default:
      return state
  }
}