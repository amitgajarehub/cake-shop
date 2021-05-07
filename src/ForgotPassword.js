import { useEffect, useState } from "react";
import axios from "axios";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ForgotPassword(props) {
    console.log("ForgotPassword", props);
    var [error, setError] = useState();
    var [user, setUser] = useState({});

    let getEmail = (event) => {
        if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(event.target.value)) {
            let emailError = "Please, Enter valid Email";
            setError(emailError);
        } else {
            let emailError = "";
            setError(emailError);
        }
    };

    let recoverPassword = function (event) {
        event.preventDefault();
        let form = document.getElementById("forgot-password-form");
        let emailVal = form.elements.email.value;
        if (!emailVal) {
            let emailError = "Please, Enter Email first";
            setError(emailError);
        } else {
            setError({});
            alert("form validated, Password recovring...");
            console.log("form validated, Password recovring...", user.email);
            let recoverPassApi = "https://apibyashu.herokuapp.com/api/recoverpassword";
            axios({
                url: recoverPassApi,
                method: "post",
                data: "amitgajare2018@gmail.com",
            }).then(
                (response) => {
                    console.log("respose email", response);
                    if (response.data.errorMessage === "Error in Resetting Password") {
                        alert("Error in Resetting Password");
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
                        <div className="text-danger">{error}</div>
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
