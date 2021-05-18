var demo = function (
    state = {
        user: null,
    },
    action
) {
    switch (action.type) {
        case "LOGIN": {
            console.log("Login Started");
            state = { ...state };
            state["isfetching"] = true;
            return state;
        }

        case "LOGIN_SUCCESS": {
            state = { ...state };
            state["isloggedin"] = true;
            state["user"] = action.payload;
            state["isfetching"] = false;
            state["isloginerror"] = false;
            return state;
        }

        case "LOGIN_FAILURE": {
            state = { ...state };
            state["isfetching"] = false;
            state["isloginerror"] = true;
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

        case "ADDRESS": {
            console.log("User address store in redux store");
            state = { ...state };
            state["isaddress"] = true;
            state["address"] = action.payload;
            return state;
        }

        default:
            return state;
    }
};

export default demo;
