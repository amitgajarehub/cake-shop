import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag, faShoppingBasket, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function Navbar(props) {
    const history = useHistory();

    useEffect(() => {
        axios({
            method: "post",
            url: "https://apibyashu.herokuapp.com/api/cakecart",
            headers: { authtoken: localStorage.token },
        }).then(
            (response) => {
                console.log("Cart success====>", response.data);
                props.dispatch({
                    type: "CART",
                    payload: response.data.data,
                });
                props.dispatch({
                    type: "ADD_TO_CART",
                    payload: true,
                });
            },
            (error) => {
                console.log("error", error);
            }
        );
    }, [props.addtocart]);

    let search = function (event) {
        event.preventDefault();

        let url = "/search?searchtext=" + document.getElementById("txtSearch").value;
        console.log("url===>", url);
        history.push(url);
    };

    var logout = (event) => {
        alert("Logout in process...");
        event.preventDefault();
        props.dispatch({
            type: "LOGOUT",
        });
        props.dispatch({
            type: "CART",
            payload: null,
        });
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/">
                <a className="navbar-brand">Cake</a>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        {props.user && (
                            <a className="nav-link disabled text-light" tabindex="-1" aria-disabled="true">
                                <FontAwesomeIcon icon={faUser} color="white" />
                                <span className="ml-3">
                                    Welcome <strong>{props.user}</strong>
                                </span>
                            </a>
                        )}
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        id="txtSearch"
                    ></input>
                    <Link to="/search">
                        <button onClick={search} className="btn btn-outline-light" type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </Link>
                    <Link to="/cart">
                        <button className="btn btn-outline-warning ml-2" type="submit">
                            <FontAwesomeIcon icon={faShoppingBag} />
                            <span className="ml-1">{props?.cart?.data?.length ? props.cart.data.length : 0}</span>
                        </button>
                    </Link>
                    {props.loginstatus ? (
                        <button onClick={logout} className="btn btn-outline-danger mx-2" type="submit">
                            logout
                        </button>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-outline-primary mx-2" type="submit">
                                Login
                            </button>
                        </Link>
                    )}
                </form>
            </div>
        </nav>
    );
}

export default connect(function (state, props) {
    return {
        user: state?.user?.name,
        loginstatus: state?.isloggedin,
        addtocart: state?.addtocart,
        cart: state?.cart,
    };
})(Navbar);
