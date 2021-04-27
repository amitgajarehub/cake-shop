import { useEffect, useState } from "react";
import axios from "axios";
import Cake from "./Cake";
import queryString from "query-string";
// import { useLocation } from "react-router-dom";

function Search(props) {
    const parsed = queryString.parse(props.location.search);
    let [cakesresult, setCakes] = useState([]);

    //let searchCakeApi = "https://apibyashu.herokuapp.com/api/searchcakes?q=" + "cake";
    let searchCakeApi = "https://apibyashu.herokuapp.com/api/searchcakes?q=" + parsed.searchtext;

    useEffect(() => {
        axios({
            method: "get",
            url: searchCakeApi,
        }).then(
            (response) => {
                setCakes(response.data.data);
            },
            (error) => {
                console.log("erro from cake api", error);
            }
        );
    }, [props.location.search]);
    return (
        <div className="bg-light">
            <div className="container pt-4 border-bottom">
                <div className="row">
                    <div className="col-12 h4">Search result...</div>
                </div>
            </div>
            <div className="container  py-5">
                <div className="row">
                    {cakesresult?.length > 0 ? (
                        cakesresult.map((each, index) => {
                            return (
                                <div className="col-md-3 mb-4">
                                    <Cake cakedata={each} index={index} />
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-6 mx-auto text-center ">
                            <p className="alert alert-info ">No result found for search, Please try other cakes...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;
