import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="./">For the People</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Papers"
                            className={window.location.pathname === "/Papers" ? "nav-link active" : "nav-link"}
                        >
                            Papers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Bills"
                            className={window.location.pathname === "/Bills" ? "nav-link active" : "nav-link"}
                        >
                            Upcoming Bills
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="./" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            User Account
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="./">Log In</a>
                            <a className="dropdown-item" href="./">Sign Up</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="./">Log Out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
