import { useEffect, useState } from "react";
import { connect } from "react-redux";

function OrderSummery(props) {
    let [subtotal, setSubtotal] = useState(false);

    useEffect(() => {
        let total = 0;
        props.cart?.data?.length > 0 &&
            props.cart.data.map((each) => {
                total = total + each.price;
            });
        setSubtotal(total);
        if (!props.address) {
            alert("Please select first Payment method or Address");
            props.history.push("/checkout/address");
        }
    }, props.cart);

    var placeOrder = () => {
        alert("Your order placed");
        props.history.push("/");
    };
    return (
        <div className="order-page">
            <div className="container py-4">
                <div className="row border shadow px-2 py-4 mt-4">
                    <div className="col-md-7 ">
                        <label for="totalprice">
                            <strong>Item Price :</strong>
                        </label>
                        <span className="ml-4">{subtotal}</span>
                    </div>
                    <div className="col-md-5 ">
                        <label for="payment">
                            <strong>Delivery Date :</strong>
                        </label>
                        <span className="ml-4">2 Days later</span>
                    </div>
                    <div className="col-md-12 ">
                        <label for="payment">
                            <strong>Payment Method :</strong>
                        </label>
                        <span className="ml-4">COD</span>
                    </div>
                    <div className="col-md-12 ">
                        <label for="payment">
                            <strong>Delivery Address :</strong>
                        </label>
                        <span className="ml-4">
                            {props.address?.name},{props.address?.address} {props.address?.city}, {props.address?.state}
                            , {props.address?.zip},{" India"}
                        </span>
                    </div>
                </div>
                <button className="btn btn-outline-primary mt-5 w-25 shadow" onClick={placeOrder}>
                    Place Order
                </button>
            </div>
        </div>
    );
}

//export default Order;
export default connect(function (state, props) {
    return {
        user: state?.user,
        address: state?.address,
        cart: state?.cart,
    };
})(OrderSummery);
