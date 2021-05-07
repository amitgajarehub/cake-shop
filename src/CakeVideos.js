import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CakeVideos() {
    let [cakeVideos, setCakeVideos] = useState([]);

    useEffect(() => {
        let videoApi = "http://localhost:5000/api/allassets";
        axios({
            method: "GET",
            url: videoApi,
        }).then(
            (response) => {
                setCakeVideos(response.data.videos);
                console.log("response came from videos api", response);
            },
            (error) => {
                console.log("Error occur in video straming...", error);
            }
        );
    }, []);
    return (
        <div>
            <h2>Cake Making Videos</h2>
            <div className="container-fluid p-5">
                <div className="row">
                    {cakeVideos?.length > 0 &&
                        cakeVideos.map((each, index) => {
                            return (
                                <div className="col-md-3 mb-4">
                                    <Link to={"/play?v=" + each}>
                                        <span className="text-capitalize">{each}</span>
                                    </Link>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default CakeVideos;
