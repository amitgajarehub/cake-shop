import { useState } from "react";

function Address() {
    var [formerrors, setFormErrors] = useState({});
    var validate = function (elements) {
        var errors = {};
        console.log("Elemets recevied for validation", elements, elements.name);
        if (!elements.name.value) {
            errors.name = "Name is required";
        }
        var errorkeys = Object.keys(errors);
        if (errorkeys.length > 0) return errors;
        else return false;
    };

    var placeOrder = function () {
        var form = document.getElementById("addressform");
        console.log("form elemntsin this ", form.elements, form.controls);
        var errors = validate(form.elements);
        if (errors) {
            setFormErrors(errors);
        } else {
            setFormErrors({});
            alert("form validate successfully");
        }
    };

    return (
        <div>
            <form id="addressform">
                <div className="form-group">
                    <label>Name</label>
                    <input name="name"></input>
                    <div className="form-error">{formerrors?.name && <div>{formerrors.name}</div>}</div>
                </div>
                <button onClick={placeOrder} className="btn btn-primary">
                    Place Order
                </button>
            </form>
        </div>
    );
}

export default Address;
