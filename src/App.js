import logo from "./logo.svg";
import "./App.css";
import "jquery/dist/jquery.slim";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import CakeDetails from "./CakeDetails";
import Search from "./Search";
import { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

function App() {
    var [user, setUser] = useState();
    var [loginstatus, setloginStatus] = useState(false);
    function LoginDone(data) {
        setUser(data);
        setloginStatus(true);
    }
    return (
        <div>
            <Router>
                <Navbar user={user} loginstatus={loginstatus} />
                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/signup" exact component={Signup} />
                        <Route path="/search" exact component={Search} />
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

export default App;
