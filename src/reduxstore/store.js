import { createStore } from "redux";
import demo from "./reducers";
import { FirstMiddleWares } from "./middlewares";

var store = createStore(demo);

export default store;
