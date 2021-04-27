import { faTrash, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Cart(props) {
    let [removed, setRemoved] = useState(false);
    let [subtotal, setSubtotal] = useState(false);

    let removefromcart = (data) => {
        alert("remove cake");
        axios({
            method: "post",
            url: "https://apibyashu.herokuapp.com/api/removecakefromcart",
            headers: { authtoken: localStorage.token },
            data: { cakeid: data },
        }).then(
            (response) => {
                console.log("API HIT: Cart Removed Success", response.data);
                setRemoved(true);
                if (response.data.message === "Removed  item from cart") {
                    props.dispatch({
                        type: "ADD_TO_CART",
                        payload: false,
                    });
                }
            },
            (error) => {
                console.log("error", error);
            }
        );
    };

    useEffect(() => {
        let total = 0;
        console.log("cart js >>>>>>>>", props.cart);
        props.cart?.data?.length > 0 &&
            props.cart.data.map((each) => {
                total = total + each.price;
            });
        setSubtotal(total);
    }, props.cart);

    return (
        <div className="shopping-cart">
            <div className="container py-4">
                <div className="row">
                    <div className="text-center">
                        <h2>Shopping Cart</h2>
                    </div>
                </div>
            </div>
            {props.loginstatus ? (
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-9 pr-5">
                            <table class="table table-hover table-borderless">
                                <thead className="border-bottom border-secondary">
                                    <tr>
                                        <th scope="col" className="w-25">
                                            Image
                                        </th>
                                        <th scope="col" className="w-25">
                                            Cake Details
                                        </th>
                                        <th scope="col" className="w-25">
                                            Price
                                        </th>
                                        <th scope="col" className="w-25">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.cart?.data?.length > 0 &&
                                        props.cart.data.map((each, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <img
                                                            src={each.image}
                                                            className="cart-img"
                                                            style={{ height: "80px", width: "100px" }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <b>{each.name}</b>
                                                        <p>Weight: {each.weight}</p>
                                                    </td>
                                                    <td>{each.price}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => removefromcart(each.cakeid)}
                                                            className="btn btn-outline-warning"
                                                        >
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center">
                                <h2>CART SUMMARY</h2>
                            </div>
                            <div className="p-3 table-secondary shadow">
                                <table class="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Subtotal</th>
                                            <td>{subtotal}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Shipping </th>
                                            <td>FREEE</td>
                                        </tr>
                                        <tr className="border-top border-secondary">
                                            <th scope="row">Total :</th>
                                            <td>{subtotal}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="text-center">
                                    <Link to="/checkout">
                                        <button className="btn btn-block btn-warning">
                                            <strong>Checkout</strong>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 text-center border-bottom">
                            <div className="text-secondary">
                                <h2>Your Are Not Logged In</h2>
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

export default connect(function (state, props) {
    return {
        cart: state?.cart,
        loginstatus: state?.isloggedin,
    };
})(Cart);
