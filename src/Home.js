import React from "react";
import axios from "axios";
import Cake from "./Cake";
import HomeSlider from "./HomeSlider";
import CakeDetails from "./CakeDetails";
import { useEffect, useState } from "react";

export const DiscountCotext = React.createContext();

function Home() {
    let [cakes, setCakes] = useState([]);
    let allcakesapi = "https://apibyashu.herokuapp.com/api/allcakes";
    useEffect(() => {
        axios({
            method: "get",
            url: allcakesapi,
        }).then(
            (response) => {
                console.log("response from cake api", response.data);
                setCakes(response.data.data);
            },
            (error) => {
                console.log("erro from cake api", error);
            }
        );
    }, []);
    return (
        <div>
            <HomeSlider />
            <div className="container-fluid px-5 py-2">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="py-3 border-bottom text-center">Most Popular Cakes</h2>
                    </div>
                </div>
                <div className="row py-3">
                    {cakes?.length > 0 &&
                        cakes.map((each, index) => {
                            return (
                                <div className="col-md-3 mb-4">
                                    {/* <DiscountCotext.Provider value="Discount value"> */}
                                    <Cake cakedata={each} index={index} />
                                    {/* </DiscountCotext.Provider> */}
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Home;
