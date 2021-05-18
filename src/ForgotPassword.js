import { useState } from "react";
import axios from "axios";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ForgotPassword(props) {
    var [message, setMessage] = useState();

    let getEmail = (event) => {
        if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(event.target.value)) {
            let emailError = "Please, Enter valid Email";
            setMessage(emailError);
        } else {
            let emailError = "";
            setMessage(emailError);
        }
    };

    let recoverPassword = function (event) {
        event.preventDefault();
        let form = document.getElementById("forgot-password-form");
        let emailVal = form.elements.email.value;
        if (!emailVal) {
            let emailError = "Please, Enter Email first";
            setMessage(emailError);
        } else {
            let recoverPassApi = "https://apibyashu.herokuapp.com/api/recoverpassword";
            axios({
                url: recoverPassApi,
                method: "post",
                data: { email: emailVal },
            }).then(
                (response) => {
                    if (response.data.message === "Password Sent to your email") {
                        alert("Password Sent to your email address");
                        setTimeout(() => {
                            props.history.push("/login");
                        }, 2000);
                    }
                    if (response.data.message === "No Such Email exists") {
                        alert("No Such Email exists");
                    }
                },
                (error) => {
                    console.log("Error from recover Password api", error);
                }
            );
        }
    };

    return (
        <>
            <div className="forgot-password">
                <form id="forgot-password-form" style={{ width: "35%", margin: "auto" }} className="my-5">
                    <div className="text-center mb-4">
                        <FontAwesomeIcon icon={faUser} color="#343a40" size="5x" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" class="form-control" onChange={getEmail}></input>
                        <div className="text-danger">{message}</div>
                    </div>
                    <div className="text-center mt-5">
                        <button className="btn btn-outline-primary w-50" onClick={recoverPassword}>
                            Recover Password
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ForgotPassword;
