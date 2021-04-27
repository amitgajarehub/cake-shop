import { Component } from "react";
import axios from "axios";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            onlineUsers: 0,
        };
    }
    user = {};

    getEmail = (event) => {
        this.user.email = event.target.value;
        if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(this.user.email)) {
            this.setState({
                errorEmail: "Please, Enter valid Email",
            });
        } else {
            this.setState({
                errorEmail: "",
            });
        }
    };

    getPassword = (event) => {
        this.user.password = event.target.value;
        if (!this.user.password) {
            this.setState({
                errorPass: "Please, Enter valid Password",
            });
        } else {
            this.setState({
                errorPass: "",
            });
        }
    };

    getName = (event) => {
        this.user.name = event.target.value;
        if (!/^[a-zA-Z\s]+.{2}$/.test(this.user.name)) {
            this.setState({
                errorName: "Please, Enter valid Name",
            });
        } else {
            this.setState({
                errorName: "",
            });
        }
    };

    register = () => {
        if (!this.user.email || !this.user.password || !this.user.name) {
            this.setState({
                errorMessage: "Please Fill Details",
            });
        } else {
            let apiurl = "https://apibyashu.herokuapp.com/api/register";
            axios({
                url: apiurl,
                method: "post",
                data: this.user,
            }).then(
                (response) => {
                    if (response.data.message === "User Already Exists") {
                        alert(response.data.message);
                    }
                    if (response.data.message === "User Registered") {
                        alert(response.data.message + " Successfully");
                    }
                },
                (error) => {
                    console.log("error from signup", error);
                }
            );
        }
    };

    goOnline = () => {
        this.setState({
            onlineUsers: this.state.onlineUsers + 1,
        });
    };

    render() {
        return (
            <div style={{ width: "50%", margin: "auto" }} className="my-5">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" onChange={this.getName}></input>
                    <div className="text-danger">{this.state.errorName}</div>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" onChange={this.getEmail}></input>
                    <div className="text-danger">{this.state.errorEmail}</div>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" onChange={this.getPassword}></input>
                    <div className="text-danger">{this.state.errorPass}</div>
                </div>
                <div style={{ color: "red" }}>{this.state.errorMessage}</div>
                <button className="btn btn-outline-primary mt-2" onClick={this.register}>
                    Register
                </button>
                {/* <div className="mt-4 text-center">
                    <span className=""> You pressed the button {this.state.onlineUsers} times</span>
                    <button onClick={this.goOnline} className="ml-3 btn btn-primary">
                        Go Online
                    </button>
                </div> */}
            </div>
        );
    }
}

export default Signup;
