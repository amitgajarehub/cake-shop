import { useEffect, useState } from "react";
import axios from "axios";
import Cake from "./Cake";

function Search() {
    let [cakesresult, setCakes] = useState([]);

    let swearchcakeapi = "https://apibyashu.herokuapp.com/api/searchcakes?q=" + "cheese";
    useEffect(() => {
        axios({
            method: "get",
            url: swearchcakeapi,
        }).then(
            (response) => {
                console.log("response from search cake api", response.data);
                setCakes(response.data.data);
            },
            (error) => {
                console.log("erro from cake api", error);
            }
        );
    }, []);
    return (
        <div>
            <div className="container-fluid bg-light">
                <div className="row">
                    {cakesresult?.length > 0 ? (
                        cakesresult.map((each, index) => {
                            return <Cake cakedata={each} index={index} />;
                        })
                    ) : (
                        <div>
                            <span className="alert alert-warning">
                                No result found for search, Please try other cakes...
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;
