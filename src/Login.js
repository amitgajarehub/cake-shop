import axios from "axios";
import { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

function Login(props) {
    useEffect(() => {}, []);
    console.log(">>>>>>>>>>>>>>> login props", props);

    var [error, setError] = useState();
    var [user, setUser] = useState({});
    //var user = {};

    let getEmail = (event) => {
        setUser({
            ...user,
            email: event.target.value,
        });
        user.email = event.target.value;
    };

    let getPassword = (event) => {
        setUser({
            ...user,
            password: event.target.value,
        });
        user.password = event.target.value;
    };

    let login = function () {
        let loginapi = "https://apibyashu.herokuapp.com/api/login";
        axios({
            url: loginapi,
            method: "post",
            data: user,
        }).then(
            (response) => {
                console.log("Response from login api", response.data);
                if (response.data.token) {
                    localStorage.token = response.data.token;
                    localStorage.email = response.data.email;
                    props.dispatch({
                        type: "LOGIN",
                        payload: response.data,
                    });
                    props.history.push("/");
                } else {
                    alert("Invalid creadinatial");
                }
            },
            (error) => {
                console.log("Error from login api", error);
            }
        );

        // if (user.email == "test@gmail.com" && user.password == "test") {
        //     setError("Login Success");
        //     props.informlogin("Amit Gajare");
        // } else {
        //     setError("Failed");
        // }

        console.log("User is trying to login", user);
    };

    return (
        <div style={{ width: "50%", margin: "auto" }} className="my-5">
            <h2>Log In</h2>
            <div className="form-group">
                <label>Email</label>
                <input type="email" class="form-control" onChange={getEmail}></input>
                {/* {user && <p className="text-info">{user.email}</p>} */}
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" class="form-control" onChange={getPassword}></input>
                {/* {user && <p className="text-info">{user.password}</p>} */}
            </div>
            <div className="float-right">
                <Link to="/forgot">forgot password?</Link>
            </div>
            <div>
                <Link to="/signup">New user? click here...</Link>
            </div>
            <div style={{ color: "red" }}>{error}</div>
            <button className="btn btn-primary mt-2" onClick={login}>
                Login
            </button>
        </div>
    );
}

Login = withRouter(Login);
export default connect()(Login);
//above line addded props to login comment known as dispatch
