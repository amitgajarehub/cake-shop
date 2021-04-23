import { connect } from "react-redux";

function CartSummary(props) {
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
                                                <td>{each.price}Rs</td>
                                            </tr>
                                        );
                                    })}
                                <tr className="border-top border-secondary">
                                    <th scope="row">Total :</th>
                                    <td>12000</td>
                                </tr>
                            </tbody>
                        </table>
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
