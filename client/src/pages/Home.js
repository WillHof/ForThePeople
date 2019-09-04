import React, { Component } from 'react'
import bgImage from "../assets/images/white_house.jpg"
export class Home extends Component {
    render() {
        return (
            <div>
                <img src={bgImage} className="img-fluid" alt="Responsive"></img>
            </div>
        )
    }
}

export default Home
