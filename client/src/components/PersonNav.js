import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class PersonNav extends Component {
    state = {

    }
    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-light bg-light navbar-expand-sm">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#personNav"
                        aria-controls="personNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="personNav"> */}
                <ul className="nav nav-pills mr-auto nav-fill">
                    <li className="nav-item">
                        <span className="nav-link active">Home</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">Papers</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">Upcoming Bills</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">Statements</span>
                    </li>
                </ul>
            </div>
            //     </nav >
            // </div >
        )
    }
}

export default PersonNav
