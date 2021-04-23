import axios from "axios";
import { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login(props) {
    useEffect(() => {}, []);
    var [formerrors, setFormerrors] = useState({});

    var [error, setError] = useState();
    var [user, setUser] = useState({});

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

    var validate = function (elements) {
        //console.log(/^[a-zA-Z\s]+$/.test(!elements.name.value));
        var errors = {};
        //var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#\$%\^&\*]).{8,12}$/;

        if (!/^\S+@\S+\.\S+$/.test(elements.email.value)) {
            errors.email = "Please, Enter valid Email";
        }
        if (!elements.password.value) {
            errors.password = "Please, Enter password ";
        }
        var errorKeys = Object.keys(errors);
        if (errorKeys.length > 0) return errors;
        else return false;
    };

    let login = function (event) {
        event.preventDefault();
        var form = document.getElementById("address-form");
        var errors = validate(form.elements);

        if (errors) {
            setFormerrors(errors);
        } else {
            setFormerrors({});
            alert("form validated, Log-In in progess...");
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
        }
        console.log("User is trying to login", user);
    };

    return (
        <form id="address-form" style={{ width: "35%", margin: "auto" }} className="my-5">
            <div className="text-center mb-4">
                <FontAwesomeIcon icon={faUser} color="#343a40" size="5x" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" class="form-control" onChange={getEmail}></input>
                {/* {user && <p className="text-info">{user.email}</p>} */}
                <div className="text-danger">{formerrors?.email && <div>{formerrors.email}</div>}</div>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" class="form-control" onChange={getPassword}></input>
                {/* {user && <p className="text-info">{user.password}</p>} */}
                <div className="text-danger">{formerrors?.password && <div>{formerrors.password}</div>}</div>
            </div>
            <div className="float-right">
                <Link to="/forgot">forgot password?</Link>
            </div>
            <div>
                <Link to="/signup">New user? click here...</Link>
            </div>
            <div style={{ color: "red" }}>{error}</div>
            <div className="text-center mt-5">
                <button className="btn btn-outline-primary w-50" onClick={login}>
                    Log In
                </button>
            </div>
        </form>
    );
}

Login = withRouter(Login);
export default connect()(Login);
//above line addded props to login comment known as dispatch
