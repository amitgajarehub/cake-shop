import HomeSlider from "./HomeSlider";
import Cake from "./Cake";
import CakeDetails from "./CakeDetails";
// import cakes from "./data.js";
import { useEffect, useState } from "react";
import axios from "axios";

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
            <div className="container-fluid bg-light">
                <div className="row">
                    {cakes?.length > 0 &&
                        cakes.map((each, index) => {
                            return <Cake cakedata={each} index={index} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default Home;
