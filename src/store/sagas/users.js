import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { GET_USERS_FAIL_2, GET_USERS_REQUEST_2, GET_USERS_SUCCESS_2 } from "../actions/users";
import Api from "../../Api";


export default function* watcher() {
  yield takeLatest(GET_USERS_REQUEST_2, handleGetUsers)
}

//put === dispatch
function* handleGetUsers(action) {
  try {
    const { page } = action.payload;
   
    const { data } = yield call(Api.getUsers,page);

    yield put({
      type: GET_USERS_SUCCESS_2,
      payload: {
        data
        
      }
    })
  } catch (e) {
    console.warn(e)
    yield put({
      type: GET_USERS_FAIL_2,
      message: e.message,
      payload: {}
    })
  }
}
