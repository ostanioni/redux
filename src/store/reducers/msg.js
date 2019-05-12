export default function msg(state = {text:'Has no msg', warn:'WARN'}, action) {
  switch (action.type) {
    case 'SEND_MSG':
      return {...state, text:action.text}
    default:
      return state
  }
}
