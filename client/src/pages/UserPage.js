import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

export class UserPage extends Component {
    state = {
        congress: []
    }
    componentDidMount() {
        this.getPeople()
    }
    getPeople = () => {
        let userId = sessionStorage.getItem("id");
        if (userId) {
            Axios.post("/api/getUserCong", {
                userId
            }).then(response => this.setState({
                congress: response.data
            }))
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-0 col-sm-2 col-md-3">
                        </div>
                        <div className="col-xs-12 col-sm-8 col-md-6">
                            <h3 className="section-title text-center vertical-align">Followed Congress Members:</h3>
                        </div>
                        <div className="col-xs-0 col-sm-2 col-md-3">
                        </div>
                    </div>

                    <div>
                        <div className="row">
                            {this.state.congress.map(dude => (
                                <div key={dude.Senate_Member.id} id={dude.Senate_Member.id} className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" src={`https://theunitedstates.io/images/congress/225x275/${dude.Senate_Member.id}.jpg`} alt="congressmember" /></p>
                                                        <h4 className="card-title">{dude.Senate_Member.firstname} {dude.Senate_Member.lastname}, {dude.Senate_Member.party}</h4>
                                                        <p className="card-text">{dude.Senate_Member.state}, {dude.Senate_Member.title}</p>
                                                        {/* <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">{dude.Senate_Member.firstname} {dude.Senate_Member.lastname}, {dude.Senate_Member.party}</h4>
                                                        <Link to={`/Person?name=${dude.Senate_Member.id}&chamber=Senate`} className={window.location.pathname === "/Members" ? "nav-link active" : "nav-link"}>
                                                            <p className="card-text" href="">Click here for detailed information on the congressperson.</p>
                                                        </Link>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" href={`http://www.facebook.com/${dude.Senate_Member.facebook}`}>
                                                                    <i className="fa fa-facebook fa-2x"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" href={`http://www.twitter.com/${dude.Senate_Member.twitter}`}>
                                                                    <i className="fa fa-twitter fa-2x"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a className="social-icon text-xs-center" href={dude.Senate_Member.website}>
                                                                    <i className="fa fa-google fa-2x"></i>
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

export default UserPage
