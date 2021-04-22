import { useEffect, useState } from "react";
import axios from "axios";
import Cake from "./Cake";
import queryString from "query-string";
// import { useLocation } from "react-router-dom";

function Search(props) {
    const parsed = queryString.parse(props.location.search);
    console.log("Parsed....", parsed);
    let [cakesresult, setCakes] = useState([]);

    //let searchCakeApi = "https://apibyashu.herokuapp.com/api/searchcakes?q=" + "cake";
    let searchCakeApi = "https://apibyashu.herokuapp.com/api/searchcakes?q=" + parsed.searchtext;

    useEffect(() => {
        axios({
            method: "get",
            url: searchCakeApi,
        }).then(
            (response) => {
                console.log("response from search cake api", response.data);
                setCakes(response.data.data);
            },
            (error) => {
                console.log("erro from cake api", error);
            }
        );
    }, [props.location.search]);
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
