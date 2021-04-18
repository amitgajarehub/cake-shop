import { post } from "jquery";
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

    componentDidMount() {
        alert("Mounted");
    }

    componentDidUpdate() {
        alert("Updated");
    }

    componentWillUnmount() {
        alert("will");
    }

    getEmail = (event) => {
        this.user.email = event.target.value;
    };

    getPassword = (event) => {
        this.user.password = event.target.value;
    };

    getName = (event) => {
        this.user.name = event.target.value;
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
                    console.log("response signup API", response);
                },
                (error) => {
                    console.log("error from signup", error);
                }
            );
        }
        console.log("...... user details", this.user);
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
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" onChange={this.getEmail}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" onChange={this.getPassword}></input>
                </div>
                <div style={{ color: "red" }}>{this.state.errorMessage}</div>
                <button className="btn btn-primary" onClick={this.register}>
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
