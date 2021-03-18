import React, { Component } from 'react'
import axios from "axios"
import { List, BillC } from "../components/billContainer"
export class IntroducedBills extends Component {
    state = {
        billType: "introduced",
        bills: []
    }
    componentDidMount() {
        axios.post("/api/getIntroducedBills", {
            'memberId': this.props.id,
            'type': this.props.which
        })
            .then(res => this.setState({ "bills": res.data }))
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.which !== this.state.billType) {
            axios.post("/api/getIntroducedBills", {
                'memberId': this.props.id,
                'type': this.props.which
            })
                .then(res => this.setState({
                    "bills": res.data,
                    "billType": this.props.which
                }))
        }
    }
    render() {
        return (
            <div>
                <div className="container border round">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="nameText heading-style">Bills {this.props.which} by {this.props.firstName} {this.props.lastName}</h3>
                        </div>
                    </div>
                    <List>
                        <BillC>
                            {
                                this.props.which === "introduced" ? (
                                    this.state.bills.map(bill =>
                                        <div className="card" key={bill.bill_id}>
                                            <h5 className="card-header nameText">{bill.short_title}</h5>
                                            <div className="card-body">
                                                <h5 className="card-title">{bill.title}</h5>
                                                <p className="card-text">Introduced on {bill.introduced_date}</p>
                                                <a href={bill.govtrack_url} className="btn btn-primary">Go to Bill</a>
                                            </div>
                                        </div>
                                    )
                                ) : this.props.which === "updated" ? (
                                    this.state.bills.map(bill =>
                                        <div className="card" key={bill.bill_id}>
                                            <h5 className="card-header nameText">{bill.short_title}</h5>
                                            <div className="card-body">
                                                <h5 className="card-title">{bill.title}</h5>
                                                <p className="card-text">Introduced on {bill.introduced_date}</p>
                                                <a href={bill.govtrack_url} className="btn btn-primary">Go to Bill</a>
                                            </div>
                                        </div>
                                    )
                                ) : <h3 className="nameText heading-style">This congressperson has not introduced any bills.</h3>
                            }
                        </BillC>
                    </List >
                </div >
            </div>
        )

    }
}
export default IntroducedBills


