import React, { Component } from 'react'
import Bills from "../pages/IntroducedBills"
import Statements from "../pages/Papers"
import Upcoming from "../pages/Bills"

export class PersonNav extends Component {
    state = {
        renderComponent: "Home",
        CongId: ""
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
                <ul className="nav nav-pills mr-auto nav-fill" id="personNav">
                    <li className="nav-item">
                        <button className="nav-link" name="Home" onClick={this.handleClick}>Home</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" name="Statements" onClick={this.handleClick}>Statements</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" name="introduced" onClick={this.handleClick}>Introduced Bills</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" name="updated" onClick={this.handleClick}>Co-Sponsored Bills</button>
                    </li>
                </ul>
                {
                    this.state.renderComponent === "Statements" ?
                        <Statements id={this.state.CongId} /> :
                        this.state.renderComponent === "introduced" ?
                            <Bills id={this.state.CongId} which={this.state.renderComponent} firstName={this.props.firstName} lastName={this.props.lastName} /> :
                            this.state.renderComponent === "updated" ?
                                <Bills id={this.state.CongId} which={this.state.renderComponent} firstName={this.props.firstName} lastName={this.props.lastName} /> :
                                <Upcoming />
                }
            </div>
        )
    }
}

export default PersonNav
