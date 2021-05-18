import { connect } from "react-redux";
import { useEffect, useState } from "react";

function CartSummary(props) {
    let [subtotal, setSubtotal] = useState(false);

    useEffect(() => {
        let total = 0;
        props.cart?.data?.length > 0 &&
            props.cart.data.map((each) => {
                total = total + each.price;
            });
        setSubtotal(total);
    }, props.cart);

    var goNext = () => {
        props.history.push("/checkout/address");
    };

    return (
        <div className="cart-summary-page">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-12">
                        <table class="table table-borderless">
                            <tbody>
                                {props.cart?.data?.length > 0 &&
                                    props.cart.data.map((each, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{each.name}</th>
                                                <td>{each.price}</td>
                                            </tr>
                                        );
                                    })}
                                <tr className="">
                                    <th scope="row">Shipping charges </th>
                                    <td>FREE</td>
                                </tr>
                                <tr className="border-top border-secondary">
                                    <th scope="row">Total :</th>
                                    <td>{subtotal}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-outline-primary  w-25 shadow" onClick={goNext}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(function (state, props) {
    return {
        cart: state?.cart,
        loginstatus: state?.isloggedin,
    };
})(CartSummary);
