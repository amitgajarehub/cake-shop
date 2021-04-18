import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CakeDetails() {
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
                console.log("response data>>>>>>", response.data);
            },
            (error) => {
                console.log("Error from cake details api", error);
            }
        );
    }, []);
    return (
        <div className="container bg-light py-5">
            <div className="row">
                <div className="car-img col-md-6">
                    <img src={cakedetails.image} alt="" style={{ height: "400px" }} />
                </div>
                <div className="car-detail col-md-6 text-center">
                    <h2>{cakedetails.name}</h2>
                    <p>
                        <b>Category</b> : Chocolate
                    </p>
                    <p>
                        <b>Price :</b> {cakedetails.price}
                    </p>
                    <p>
                        <b>Description: </b>
                        {cakedetails.description}
                    </p>
                    <button className="btn btn-outline-dark">Add To Card</button>
                </div>
            </div>
        </div>
    );
}

export default CakeDetails;
