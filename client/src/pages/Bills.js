import React, { Component } from 'react'
import axios from "axios";
import { List, BillC } from "../components/billContainer"


export class Bills extends Component {
    state = {
        "chamber": "Senate",
        "bills": []
    }
    componentDidMount() {
        axios.get("/api/getUpcomingS").then(res => this.setState({ "bills": res.data }))
    }
    handleClick = (e) => {
        e.preventDefault();
        if (this.state.chamber === "Senate") {
            this.setState({ "chamber": "House" })
            axios.get("/api/getUpcomingS").then(res => this.setState({ "bills": res.data }))
        }
        else {
            this.setState({ "chamber": "Senate" })
            axios.get("/api/getUpcomingH").then(res => this.setState({ "bills": res.data }))
        }
    }

    render() {
        const dataLength = this.state.bills.length
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="nameText heading-style">{this.state.chamber} Bills</h3>
                    </div>
                </div>
                <div className="btn-group">
                    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" onClick={this.handleClick} >
                        Toggle Chamber
                        </button>
                </div>

                <List>
                    <BillC>
                        {
                            dataLength ? (
                                this.state.bills.map(bill =>
                                    <div className="card">
                                        <h5 className="card-header nameText">{bill.description}</h5>
                                        <div className="card-body">
                                            <h5 className="card-title">{bill.bill_id}</h5>
                                            <p className="card-text">Scheduled on{bill.legislative_day}</p>
                                            <a href={bill.url} className="btn btn-primary">Go to Statement</a>
                                        </div>
                                    </div>
                                )
                            ) : <h3 className="nameText heading-style">There are no upcoming bills for the {this.state.chamber} in the next week. Try searching for a bill category to show something here.</h3>
                        }
                    </BillC>
                </List >
            </div >
        )
    }
}

export default Bills
