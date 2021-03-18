import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

export class UserMembers extends Component {
    state = {
        congress: [{
            SenateMemberId:null,
            HouseMemberId:null
        }]
    }
    componentDidUpdate(prevProps) {
        if (this.props.congress !== prevProps.congress) {
            this.setState({
                congress: this.props.congress
            })
            console.log(this.props.congress)
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.state.congress[0].SenateMemberId !== null ? (
                        this.state.congress.map(dude => (
                            <div key={dude.Senate_Member.id} id={dude.Senate_Member.id} className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid" src={`https:theunitedstates.io/images/congress/225x275/${dude.Senate_Member.id}.jpg`} alt="congressmember" /></p>
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
                                                            <a className="social-icon text-xs-center" href={`http:www.facebook.com/${dude.Senate_Member.facebook}`}>
                                                                <i className="fa fa-facebook fa-2x"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" href={`http:www.twitter.com/${dude.Senate_Member.twitter}`}>
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

                    ) : (
                            this.state.congress[0].HouseMemberId !== null ? (
                                this.state.congress.map(dude => (
                                   
                                      <div key={dude.HouseMemberId} id={dude.HouseMemberId} className="col-xs-12 col-sm-6 col-md-4">
                                          <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                                              <div className="mainflip">
                                                  <div className="frontside">
                                                      <div className="card">
                                                          <div className="card-body text-center">
                                                              <p><img className=" img-fluid" src={`https:theunitedstates.io/images/congress/225x275/${dude.House_Member.id}.jpg`} alt="congressmember" /></p>
                                                              <h4 className="card-title">{dude.House_Member.firstname} {dude.House_Member.lastname}, {dude.House_Member.party}</h4>
                                                              <p className="card-text">{dude.House_Member.state}, {dude.House_Member.title}</p>
                                                              {/* <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a> */}
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="backside">
                                                      <div className="card">
                                                          <div className="card-body text-center mt-4">
                                                              <h4 className="card-title">{dude.House_Member.firstname} {dude.House_Member.lastname}, {dude.House_Member.party}</h4>
                                                              <Link to={`/Person?name=${dude.House_Member.id}&chamber=Senate`} className={window.location.pathname === "/Members" ? "nav-link active" : "nav-link"}>
                                                                  <p className="card-text" href="">Click here for detailed information on the congressperson.</p>
                                                              </Link>
                                                              <ul className="list-inline">
                                                                  <li className="list-inline-item">
                                                                      <a className="social-icon text-xs-center" href={`http:www.facebook.com/${dude.House_Member.facebook}`}>
                                                                          <i className="fa fa-facebook fa-2x"></i>
                                                                      </a>
                                                                  </li>
                                                                  <li className="list-inline-item">
                                                                      <a className="social-icon text-xs-center" href={`http:www.twitter.com/${dude.House_Member.twitter}`}>
                                                                          <i className="fa fa-twitter fa-2x"></i>
                                                                      </a>
                                                                  </li>
                                                                  <li className="list-inline-item">
                                                                      <a className="social-icon text-xs-center" href={dude.House_Member.website}>
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
                             ) 
                            : (
                                    <div>
                                        Nothing Here
                                 </div>
                                )

                        )
                    }
                </div>
            </div>
        )
    }
}

export default UserMembers
