import { combineReducers } from 'redux'

import first  from 'reducers/first'
import second from 'reducers/second'
import third  from 'reducers/third'
import fourth  from 'reducers/fourth'

export default combineReducers({
  first,
  second,
  third,
  fourth,
})
