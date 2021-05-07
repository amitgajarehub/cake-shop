import queryString from "query-string";

function PlayVideo(props) {
    const parsed = queryString.parse(props.location.search);

    return (
        <div className="main-play-section">
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <video controls muted height="520">
                            <source
                                src={"http://localhost:5000/api/playvideo?filename=" + parsed.v}
                                type="video/mp4"
                            ></source>
                        </video>
                        <h2>{parsed.v}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayVideo;
