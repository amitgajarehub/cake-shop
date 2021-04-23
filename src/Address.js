import { useState } from "react";

function Address() {
    var [formerrors, setFormerrors] = useState({});
    var validate = function (elements) {
        console.log(/^[a-zA-Z\s]+$/.test(!elements.name.value));
        var errors = {};
        if (!/^[a-zA-Z\s]+$/.test(elements.name.value)) {
            errors.name = "Please, enter valid Name";
        }
        if (!/^\S+@\S+\.\S+$/.test(elements.email.value)) {
            errors.email = "Please, enter valid Email";
        }
        if (!elements.address.value) {
            errors.address = "Addres is required";
        }
        if (!elements.city.value) {
            errors.city = "City is required";
        }
        if (!elements.state.value) {
            errors.state = "State is required";
        }
        if (!/^[1-9][0-9]{5}$/.test(elements.zip.value)) {
            errors.zip = "Please, enter valid ZIP code";
        }

        var errorKeys = Object.keys(errors);
        if (errorKeys.length > 0) return errors;
        else return false;
    };

    var placeOrder = function (event) {
        event.preventDefault();
        var form = document.getElementById("address-form");
        var errors = validate(form.elements);
        if (errors) {
            setFormerrors(errors);
        } else {
            setFormerrors({});
            alert("form validated & Saved");
        }
    };
    return (
        <div className="address">
            {/* <form id="address-form">
                <div className="form-group">
                    <label>Name</label>
                    <input name="name" />
                    <div className="text-danger">{formerrors?.name && <div>{formerrors.name}</div>}</div>
                </div>
            </form>
            <button onClick={placeOrder}>Place Order</button> */}

            <form id="address-form">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputName">Name</label>
                        <input type="text" name="name" className="form-control" id="inputText" />
                        <div className="text-danger">{formerrors?.name && <div>{formerrors.name}</div>}</div>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" name="email" className="form-control" id="inputEmail4" />
                        <div className="text-danger">{formerrors?.email && <div>{formerrors.email}</div>}</div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" name="address" className="form-control" id="inputAddress" />
                    <div className="text-danger">{formerrors?.address && <div>{formerrors.address}</div>}</div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label for="inputCity">City</label>
                        <input type="text" name="city" className="form-control" id="inputCity" />
                        <div className="text-danger">{formerrors?.city && <div>{formerrors.city}</div>}</div>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" name="state" className="form-control">
                            <option selected></option>
                            <option>Maharashtra</option>
                            <option>Delhi</option>
                            <option>UP</option>
                            <option>Gujarat</option>
                        </select>
                        <div className="text-danger">{formerrors?.state && <div>{formerrors.state}</div>}</div>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputZip">Zip</label>
                        <input type="text" name="zip" className="form-control" id="inputZip" />
                        <div className="text-danger">{formerrors?.zip && <div>{formerrors.zip}</div>}</div>
                    </div>
                </div>
                <div className="mt-3">
                    <button onClick={placeOrder} className="btn btn-outline-primary w-25">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Address;
