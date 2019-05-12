import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  yield console.log('Hello Sagas!')
}

function* sendAsync() {
  yield delay(3000)
  yield put({ type: 'SEND_MSG' })
}

function* watchSendAsync() {
  yield takeEvery('SEND_MSG_ASYNC', sendAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchSendAsync()
  ])
}