import React, { Component } from 'react'


export class PersonDetails extends Component {
    state = {
        fuckingwork: "what"
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
                            <h4 className="card-title nameText">{this.state.member.firstname} {this.state.member.lastname}, {this.state.member.party}</h4>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" href={`http://www.facebook.com/${this.state.member.facebook}`}>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" href={`http://www.twitter.com/${this.state.member.twitter}`}>
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" href={this.state.member.website}>
                                        <i className="fa fa-google"></i>
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
