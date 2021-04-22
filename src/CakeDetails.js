import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

function CakeDetails(props) {
    let [cakedetails, setCakedetails] = useState({});
    let params = useParams();
    console.log("params are", params);

    useEffect(() => {
        let cakedetailsid = "https://apibyashu.herokuapp.com/api/cake/" + params.cakeid;
        axios({
            method: "get",
            url: cakedetailsid,
        }).then(
            (response) => {
                setCakedetails(response.data.data);
            },
            (error) => {
                console.log("Error from cake details api", error);
            }
        );
    }, []);

    let addToCart = (data) => {
        let addCakeToCart = "https://apibyashu.herokuapp.com/api/addcaketocart";
        axios({
            url: addCakeToCart,
            method: "post",
            headers: { authtoken: localStorage.token },
            data: { name: data.name, image: data.image, cakeid: data.cakeid, price: data.price, weight: data.weight },
        }).then(
            (response) => {
                console.log("Response from Add To Cart api...", response.data);
                if (response.data.message == "Added to cart") {
                    console.log("dispatch success ==>", response.data);
                    props.dispatch({
                        type: "ADD_TO_CART",
                        payload: response.data,
                    });
                    alert("Your cake added to cart");
                    //props.history.push("/");
                } else {
                    alert("Please, login first and then add cake to cart");
                }
            },
            (error) => {
                console.log("Error from Add To Cart api", error);
            }
        );
        console.log("User is trying to add cake to cart...");
    };

    return (
        <div className="container py-5">
            <div className="row">
                <div className="car-img col-md-5">
                    <div className="border border-secondary text-center p-2">
                        <img src={cakedetails.image} alt="" style={{ height: "420px", width: "420px" }} />
                    </div>
                </div>
                <div className="car-detail col-md-7 pl-5">
                    <h2 className="mt-2 mb-4">{cakedetails.name}</h2>
                    <p>
                        <b>Reviews :</b>
                        <span>
                            <FontAwesomeIcon icon={faStar} color="gray" />
                            41 Review
                        </span>
                    </p>
                    <p>
                        <b>Current Price :</b> <span>{cakedetails.price}</span>
                    </p>
                    <p>
                        <b>Flavour :</b> <span>Hazelunt Cake</span>
                    </p>
                    <p>
                        <b>Weight :</b>
                        <span>3 kg</span>
                    </p>
                    <p>
                        <b>Description: </b>
                        {cakedetails.description}
                    </p>
                    <div className="mt-5">
                        <button className="btn btn-warning text-white" onClick={() => addToCart(cakedetails)}>
                            Add To Card
                        </button>
                        <button className="btn btn-warning text-white ml-4">
                            <FontAwesomeIcon icon={faHeart} />
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
    };
})(CakeDetails);
