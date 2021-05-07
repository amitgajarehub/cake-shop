import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";

function login(action) {
    return axios({
        method: "post",
        url: "https://apibyashu.herokuapp.com/api/login",
        data: action.payload,
    });
}

function* LoginGenrator(action) {
    var result = yield call(login, action);
    if (result.data.token) {
        yield put({ type: "LOGIN_SUCCESS", payload: result.data });
    } else {
        yield put({ type: "LOGIN_FAILURE", payload: result.data });
    }
}

export function* LoginSaga() {
    yield takeEvery("LOGIN", LoginGenrator);
}

export function* OrderSaga() {
    //yield takeEvery("ORDER", OrderGenrator);
    //yield takeEvery("FETCH_ORDER", Fetch_OrderGenrator);
}

export function* RootSaga() {
    //yield all([LoginSaga(), OrderSaga()]);
}
