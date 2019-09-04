import React, { Component } from 'react'
import Bills from "../pages/Bills"
import Statements from "../pages/Papers"

export class PersonNav extends Component {
    state = {
        renderComponent: "Home",
        CongId: "   "
    }
    componentDidMount() {

    }
    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.setState({
                "CongId": this.props.id
            })
        }
    }
    handleClick = (e) => {
        const name = e.target.name;
        this.setState({
            "renderComponent": name
        })
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
                        <button className="nav-link active">Home</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" name="Statements" onClick={this.handleClick}>Statements</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" name="Bills" onClick={this.handleClick}>Upcoming Bills</button>
                    </li>
                </ul>
                {
                    this.state.renderComponent === "Statements" ?
                        <Statements id={this.state.CongId} /> :
                        this.state.renderComponent === "Bills" ?
                            <Bills id={this.stateCongId} /> :
                            <div></div>
                }

            </div>
            //     </nav >
            // </div >
        )
    }
}

export default PersonNav
