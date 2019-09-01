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
    getSenateMembers = () => Axios.get("/api/getSenateMembers")
        .then(res => {
            this.setState({ congress: res.data })
        })

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
    filterState = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }
    onStateChange = (state) => {
        this.setState({ usState: state })
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
                    {/* <div class="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {this.state.usState}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="stateSelect" onClick={this.filterState}>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>

                        </div>
                    </div> */}
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
