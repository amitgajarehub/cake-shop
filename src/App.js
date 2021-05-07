import logo from "./logo.svg";
import "./App.css";
import "jquery/dist/jquery.slim";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import CakeVideos from "./CakeVideos";
import PlayVideo from "./PlayVideo";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import Cart from "./Cart";
import ForgotPassword from "./ForgotPassword";
import Checkout from "./Checkout";
import CakeDetails from "./CakeDetails";
import Search from "./Search";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

function App(props) {
    var SuspendAdmin = React.lazy(() => import("./Admin"));

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
            <ErrorBoundary>
                <Router>
                    <Navbar />
                    <div>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/cakevideos" exact component={CakeVideos} />
                            <Route path="/play" exact component={PlayVideo} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/signup" exact component={Signup} />
                            <Route path="/forgotpassword" exact component={ForgotPassword} />
                            <Route path="/search" exact component={Search} />
                            <Route path="/cart" exact component={Cart} />
                            <Route path="/checkout" component={Checkout} />
                            <Route path="/cake/:cakeid" exact component={CakeDetails} />
                            <Route path="/admin" exact>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <SuspendAdmin />
                                </Suspense>
                            </Route>
                            <Route path="/*">
                                <Redirect to="/"></Redirect>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </ErrorBoundary>
        </div>
    );
}

export default connect(function (state, props) {
    return {
        user: state?.user,
    };
})(App);
