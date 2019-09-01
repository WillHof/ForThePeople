import React, { Component } from 'react'
//import PersonCard from "../components/PersonCard"
import UsState from "../components/usState.js"
import Axios from 'axios';
export class CongressMembers extends Component {
    componentDidMount() {
        this.getSenateMembers()
    }
    state = {
        chamber: "Senate",
        congress: [],
        usState: "Select a State"
    }
    //gets senators
    getSenateMembers = () => Axios.get("/api/getSenateMembers")
        .then(res => {
            this.setState({ congress: res.data })
        })
    //when the us state changes it will query the database for the filtered values
    componentDidUpdate(prevProps, prevState) {
        if (prevState.usState !== this.state.usState) {
            this.getFilteredMembers(this.state.chamber, this.state.usState)
        }
    }
    //swaps chambers
    handleClick = (e) => {
        e.preventDefault()
        if (this.state.chamber === "Senate") {
            this.setState({ chamber: "House" })
            Axios.get("/api/getHouseMembers")
                .then(res =>
                    this.setState({ congress: res.data }))
        }
        else {
            this.setState({ chamber: "Senate" })
            this.getSenateMembers()
        }
    }
    //sets the state to the selected us state when they change the value list
    onStateChange = (state) => {
        this.setState({ usState: state })
    }
    //Queries the database for the current selection of state & chamber
    getFilteredMembers(govchamber, usState) {
        Axios.post("/api/getSenateMembers", {
            state: usState,
            chamber: govchamber
        })
            .then(response => this.setState({ congress: response.data }))
            .catch(err => console.log(err))
    }
    render() {

        return (
            <div>
                <div className="container">
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" onClick={this.handleClick} >
                            Toggle Chamber
                        </button>
                    </div>
                    <UsState currState={this.state.usState} onStateChange={this.onStateChange} />

                    <h5 className="section-title h1">{this.state.chamber}</h5>
                    <div>
                        <div className="row">
                            {this.state.congress.map(dude => (
                                <div key={dude.id} id={dude.id} className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" src="" alt="congressmember" /></p>
                                                        <h4 className="card-title">{dude.firstname} {dude.lastname}, {dude.party}</h4>
                                                        <p className="card-text">{dude.state}, {dude.title}</p>
                                                        <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">{dude.firstname} {dude.lastname}, {dude.party}</h4>
                                                        <p className="card-text">I am a Senator and its pretty cool. I need to put stuff here to fill it out.</p>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" href={`http://www.facebook.com/${dude.facebook}`}>
                                                                    <i className="fa fa-facebook"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" href={`http://www.twitter.com/${dude.twitter}`}>
                                                                    <i className="fa fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" href={dude.website}>
                                                                    <i className="fa fa-google"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CongressMembers
