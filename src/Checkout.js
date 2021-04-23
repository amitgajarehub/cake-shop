import { Rout, Route, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Payment from "./Payment";
import CartSummary from "./CartSummary";
import Order from "./Order";
import Address from "./Address";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

function Checkout(props) {
    var route = useRouteMatch();
    var url = route.url;
    var path = route.path;
    return (
        <div className="checkout">
            <div className="container py-4 border-bottom">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Checkout</h2>
                    </div>
                </div>
            </div>
            {props.loginstatus ? (
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-2 shadow-lg bg-dark py-4" style={{ height: "300px" }}>
                            <ul class="nav flex-column">
                                <Link to={url}>
                                    <li class="nav-item text-white pl-2 py-3">
                                        <h5>Cart Summery</h5>
                                    </li>
                                </Link>
                                <Link to={url + "/address"}>
                                    <li class="nav-item text-white pl-2 py-3">
                                        <h5>Address</h5>
                                    </li>
                                </Link>
                                <Link to={url + "/payment"}>
                                    <li class="nav-item text-white pl-2 py-3">
                                        <h5>Payment</h5>
                                    </li>
                                </Link>
                                <Link to={url + "/order"}>
                                    <li class="nav-item text-white pl-2 py-3">
                                        <h5>Order</h5>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className="col-md-10 px-5">
                            <Route exact path={path} component={CartSummary} />
                            <Route exact path={path + "/address"} component={Address} />
                            <Route exact path={path + "/payment"} component={Payment} />
                            <Route exact path={path + "/order"} component={Order} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container py-5">
                    <div className="row">
                        <div className="col-6 mx-auto border-bottom d-inline">
                            <div className="text-secondary text-center">
                                <h2 className="">You Are Not Log In</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center py-5">
                            <div className="mb-5">
                                <FontAwesomeIcon icon={faUser} color="gray" size="6x" />
                            </div>
                            <Link to="/login">
                                <button className="btn btn-outline-primary mx-2 w-25" type="submit">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

//export default Checkout;
export default connect(function (state, props) {
    return {
        //cart: state?.cart,
        loginstatus: state?.isloggedin,
    };
})(Checkout);
