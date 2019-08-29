import React, { Component } from 'react'
import PersonCard from "../components/PersonCard"
import Axios from 'axios';
export class CongressMembers extends Component {
    componentDidMount() {
        Axios.get("/api/getSenators")
            .then(res => {
                this.setState({ congress: res.data })
            })
    }
    render() {
        state = {
            chamber: "Senate",
            congress: []
        }
        return (
            <div>
                <div className="container">
                    <h5 className="section-title h1">{this.state.chamber}</h5>
                    <PersonCard congress={this.state.congress}></PersonCard>
                </div>
            </div>
        )
    }
}

export default CongressMembers
