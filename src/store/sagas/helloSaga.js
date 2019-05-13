import { put, take, fork, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  yield console.log('Hello Sagas!')
}

function* sendAsync(action) {
  yield delay(3000)
  yield put( { type: 'SEND_MSG', text: action.text })
  console.log('ACTION =  ', action)
}

function* watchSendAsync() {
  while (true) {
    const action = yield take('SEND_MSG_ASYNC')
    console.log('ACTION_ASYNC = ', action)
    yield fork(sendAsync, action) //...args.concat(action))
  }
  // const wh = yield takeEvery('SEND_MSG_ASYNC', sendAsync)
  // console.log('WH = ', wh)
}
const forkWatchSendAsync = ()=>fork(watchSendAsync)

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    // watchSendAsync()
    forkWatchSendAsync()
  ])
}