import logo from "./logo.svg";
import "./App.css";
import "jquery/dist/jquery.slim";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import ShoppingCart from "./Cart";
import Checkout from "./Checkout";
import CakeDetails from "./CakeDetails";
import Search from "./Search";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

function App(props) {
    if (localStorage.token && !props.user) {
        var token = localStorage.token;
        console.log("Means user is already logged in");
        axios({
            method: "get",
            url: "https://apibyashu.herokuapp.com/api/getuserdetails",
            headers: {
                authtoken: token,
            },
        }).then(
            (response) => {
                console.log("response from user details api", response);
                props.dispatch({
                    type: "SET_USER",
                    payload: response.data.data,
                });
            },
            (error) => {
                console.log("error from get user details api", error);
            }
        );
    }
    return (
        <div>
            <Router>
                <Navbar />
                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/signup" exact component={Signup} />
                        <Route path="/search" exact component={Search} />
                        <Route path="/shoppingcart" exact component={ShoppingCart} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/cake/:cakeid" exact component={CakeDetails} />
                        <Route path="/*">
                            <Redirect to="/"></Redirect>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default connect(function (state, props) {
    return {
        user: state?.user,
    };
})(App);
