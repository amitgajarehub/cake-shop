import { useState } from "react";

function Payment(props) {
    var [formerrors, setFormerrors] = useState({});
    var getPayment = (event) => {
        var errors = {};
        var form = document.getElementById("payment");

        if (!form.paymentMethod.value) {
            event.preventDefault();
            setFormerrors(errors);
            errors.paymentMethod = "Please select payement method";
            var errorKeys = Object.keys(errors);
            console.log("errors payment", errorKeys);
            if (errorKeys.length > 0) return errors;
            else return false;
        } else {
            setFormerrors({});
            props.history.push("/checkout/ordersummery");
        }
    };

    return (
        <div className="payment-page">
            <div className="container py-4">
                <div className="row border-bottom border-dark">
                    <div className="col-md-6 h3">Select Payment Methods:</div>
                    <div className="d-inline alert alert-info col-md-6">
                        Now, Only Cash On Delivery Method Available
                    </div>
                </div>
                <form id="payment">
                    <div className="row">
                        <div className="col-md-12 py-4">
                            <input type="radio" name="paymentMethod" />
                            <label className="ml-4">Cash On Delivery</label>
                        </div>
                        <div className="col-md-12">
                            <input type="radio" name="paymentMethod" disabled />
                            <label className="ml-4">
                                UPI <mark>(Temporary, Not Available)</mark>
                            </label>
                        </div>
                        <div className="col-md-12 text-danger mt-4">
                            {formerrors?.paymentMethod && <div>{formerrors.paymentMethod}</div>}
                        </div>
                        <button onClick={getPayment} className="btn btn-outline-primary w-25 mt-4">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Payment;
