function Payment() {
    return (
        <div className="payment-page">
            <div className="container py-4">
                <div className="row border-bottom border-dark">
                    <div className="col-md-6 h3">Select Payment Methods:</div>
                    <div className="d-inline alert alert-info col-md-6">
                        Now, Only Cash On Delivery Method Available
                    </div>
                </div>
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
                    <button className="btn btn-outline-primary w-25 mt-5">Next</button>
                </div>
            </div>
        </div>
    );
}

export default Payment;
