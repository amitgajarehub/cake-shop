import store from "./store";

export function FirstMiddleWares(store) {
    return function (next) {
        return;
    };
}

// export let logger = store=>next=>action{
//     console.log(".....Before Action", action.type, store.getState())
//     console.log(".... After action store state is", store.getState())
// }
