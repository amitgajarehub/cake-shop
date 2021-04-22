import { Link } from "react-router-dom";

function Cake(props) {
    return (
        <div className="card" style={{ width: "100%" }}>
            <Link to={"/cake/" + props.cakedata.cakeid}>
                <img src={props.cakedata.image} className="card-img-top" style={{ height: "200px" }} />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{props.cakedata.name} </h5>
                <p className="card-text">This abstract painting chocolate cake by is pure fine art.</p>
            </div>
        </div>
    );
}

export default Cake;
