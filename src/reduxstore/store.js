import { applyMiddleware, createStore } from "redux";
import demo from "./reducers";
import { logger } from "./middlewares";
import createSaga from "redux-saga";
import { LoginSaga, RootSaga } from "./sagas";

//var store = createStore(demo);

var sagaMiddleware = createSaga();
var middlewares = applyMiddleware(logger, sagaMiddleware);

export default createStore(demo, middlewares);
sagaMiddleware.run(RootSaga);
