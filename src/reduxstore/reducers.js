var demo = function (
    state = {
        user: null,
    },
    action
) {
    switch (action.type) {
        case "LOGIN": {
            console.log("Here we have to write logic for login");
            state = { ...state };
            state["isloggedin"] = true;
            state["user"] = action.payload;
            return state;
        }

        case "SET_USER": {
            console.log("Here we have SET user details");
            state = { ...state };
            state["isloggedin"] = true;
            state["user"] = action.payload;
            return state;
        }

        case "LOGOUT": {
            console.log("Here we have to write logic for logout");
            state = { ...state };
            localStorage.clear();
            delete state["user"];
            delete state["isloggedin"];
            return state;
        }

        case "ADD_TO_CART": {
            console.log("Here we have Added Cake To Cart");
            state = { ...state };
            state["addtocart"] = action.payload;
            return state;
        }

        case "CART": {
            console.log("Get cart Count");
            state = { ...state };
            state["cart"] = { data: action.payload };
            return state;
        }

        default:
            return state;
    }
};

export default demo;
