import React, { Component } from 'react'


export class PersonDetails extends Component {
    state = {

    }
    componentDidUpdate(prevProps) {
        if (this.props.info !== prevProps.info) {
            this.setState({
                member: this.props.info
            })
        }
    }
    render() {
        const gotData = this.state.member
        return (
            <div>
                {gotData ? (
                    <div className="card frontside mainflip">
                        <div className="card-body text-center">
                            <p><img className="img-fluid border-radius-image" src={`https://theunitedstates.io/images/congress/225x275/${this.state.member.id}.jpg`} alt="congressmember" /></p>
                            <h4 className="card-title nameText"> {this.state.member.firstname} {this.state.member.lastname}</h4>
                            <h4 className="card-title nameText"> {this.state.member.title}, {this.state.member.party}</h4>
                            <a className="card-title" href={this.state.member.contact}>Contact Me directly by clicking here</a>
                            <h5 className="card-title">Social Media:</h5>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" href={`http://www.facebook.com/${this.state.member.facebook}`}>
                                        <i className="fa fa-facebook fa-2x"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" href={`http://www.twitter.com/${this.state.member.twitter}`}>
                                        <i className="fa fa-twitter fa-2x"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" href={this.state.member.website}>
                                        <i className="fa fa-google fa-2x"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
                    : (<div></div>)
                }

            </div>
        )
    }
}

export default PersonDetails
