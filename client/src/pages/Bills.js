import React, { Component } from 'react'
import axios from "axios";
import { List, BillC } from "../components/billContainer"


export class Bills extends Component {
    state = {
        "chamber": "/api/getUpcomingS",
        "bills": []
    }
    componentDidMount() {
        axios.get("/api/getUpcomingS").then(res => console.log(res))
    }

    render() {
        return (
            <div>
                <List>
                    <BillC>

                    </BillC>
                </List>
            </div>
        )
    }
}

export default Bills
