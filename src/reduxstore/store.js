import { createStore } from "redux";
import demo from "./reducers";

var store = createStore(demo);

store.dispatch({
    type: "login",
    payload: { email: "amit@gmail.com", name: "Amit Gajare" },
});

console.log(".............", store.getStore());
