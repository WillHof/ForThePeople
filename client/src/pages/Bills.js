import React, { Component } from 'react'
import axios from "axios";
import { List, BillC } from "../components/billContainer"
//include ability to search for bills. 

export class Bills extends Component {
    state = {
        "chamber": "Senate",
        "bills": [],
        "CongId": "",
        "billType": "introduced",
        "search": "",
        "renderComponent": "Bills"
    }
    componentDidMount() {
        this.props.id ? this.renderPersonBills() :
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
    handleSearch = (e) => {
        e.preventDefault();
        axios.post("/api/getBills", { "search": this.state.search }).then(res => this.setState({ bills: res.data }))
    }
    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }
    renderPersonBills = () => {
        axios.post("/api/getIntroducedBills", {
            'memberId': this.props.id,
            'type': this.state.billType
        })
            .then(res => this.setState({ "bills": res.data }))
    }
    //component recieves props when called from individual congressperson page
    componentDidUpdate(prevProps) {
        if (this.props.CongId !== prevProps.CongId) {
            this.renderPersonBills()
        }
    }
    render() {
        const dataLength = this.state.bills.length
        return (
            <div className="container border round">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="nameText heading-style">{this.state.chamber} Bills</h3>
                    </div>
                </div>
                <div className="btn-group">
                    <button className="btn btn-secondary btn-md dropdown-toggle" type="button" onClick={this.handleClick} >
                        Toggle Chamber
                        </button>
                </div>
                {/* <div className="row">
                    <div className="col-md-12">
                        <div className="input-group mb-3">
                            <span className="nameText">Search all bills by category:</span>
                            <input type="text" className="form-control" name="search" value={this.state.search} onChange={this.handleChange} aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" onClick={this.handleSearch} id="button-addon2">Search</button>
                            </div>
                        </div>
                    </div>
                </div> */}
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
                                            <a href={bill.url} className="btn btn-primary">Go to Bill</a>
                                        </div>
                                    </div>
                                )
                            ) : <h3 className="nameText heading-style">There are no upcoming bills for the {this.state.chamber} in the next two weeks.</h3>
                        }
                    </BillC>
                </List >
            </div >
        )
    }
}

export default Bills
