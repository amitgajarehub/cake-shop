import store from "./store";

// export function FirstMiddleWares(store) {
//     return function (next) {
//         return function (action) {
//             console.log("Before action", action.type, store.getState());

//             var res = next(action);
//             console.log("....", store.getState());
//             return res;
//         };
//     };
// }

export let logger = (store) => (next) => (action) => {
    // console.log(".....Before Action logger", action.type, store.getState());
    var result = next(action);
    // console.log(".... After action store state is logger", store.getState());
    return result;
};
