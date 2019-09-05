import React, { Component } from 'react'
import axios from "axios";
import { List, BillC } from "../components/billContainer"
//include ability to search for bills
export class searchBills extends Component {
    state = {
        "search": "",
        "bills": []
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
    render() {
        return (
            <div>
                <div className="container border">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="input-group mb-3">
                                <span className="nameText">Search all bills by category:</span>
                                <input type="text" className="form-control" name="search" value={this.state.search} onChange={this.handleChange} aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" onClick={this.handleSearch} id="button-addon2">Search</button>
                                </div>
                            </div>
                        </div>
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
                                                <a href={bill.url} className="btn btn-primary">Go to Bill</a>
                                            </div>
                                        </div>
                                    )
                                ) : <h3 className="nameText heading-style">Enter search terms above.</h3>
                            }
                        </BillC>
                    </List >
                </div >
            </div>

        )
    }
}

export default searchBills
