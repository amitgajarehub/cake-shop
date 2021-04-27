var demo = function (
    state = {
        user: null,
    },
    action
) {
    switch (action.type) {
        case "LOGIN": {
            state = { ...state };
            state["isloggedin"] = true;
            state["user"] = action.payload;
            return state;
        }

        case "SET_USER": {
            state = { ...state };
            state["isloggedin"] = true;
            state["user"] = action.payload;
            return state;
        }

        case "LOGOUT": {
            state = { ...state };
            localStorage.clear();
            delete state["user"];
            delete state["isloggedin"];
            return state;
        }

        case "ADD_TO_CART": {
            state = { ...state };
            state["addtocart"] = action.payload;
            return state;
        }

        case "CART": {
            state = { ...state };
            state["cart"] = { data: action.payload };
            return state;
        }

        default:
            return state;
    }
};

export default demo;
