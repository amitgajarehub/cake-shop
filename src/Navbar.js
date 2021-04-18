import { Link } from "react-router-dom";
import { connect } from "react-redux";

// var [search, setsearchResult] = useState({});

// let Search = (event) => {
//     setsearchResult({
//         ...search,
//         search: event.target.value,
//     });
//     search.search = event.target.value;
// };

function Navabar(props) {
    // var count = 0;
    // let search = () => {
    //     event.preventDefault();
    //     let url = "search?searchtext-"document.getElementById('txtSearch').value;
    //     console.log("url")
    // }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/">
                <a className="navbar-brand">Cake</a>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Link
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                            Disabled
                        </a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    ></input>
                    <Link to="/search">
                        <button className="btn btn-outline-light" type="submit">
                            Search
                        </button>
                    </Link>
                    {props.loginstatus ? (
                        <button className="btn btn-outline-danger mx-2" type="submit">
                            logout
                        </button>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-outline-primary mx-2" type="submit">
                                Login
                            </button>
                        </Link>
                    )}
                </form>
            </div>
        </nav>
    );
}

export default Navabar;
