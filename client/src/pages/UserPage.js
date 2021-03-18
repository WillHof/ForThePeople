import React, { Component } from 'react'
import Axios from 'axios';
import UserMembers from '../components/UserMembers'

export class UserPage extends Component {
    state = {
        congress: [{
            'SenateMemberId': ''
        }],
        chamber: 'Senate'
    }
    componentDidMount() {
        this.getPeople('Senate')
    }
    handleClick = (e) => {
        e.preventDefault()
        if (this.state.chamber === "Senate") {
            this.getPeople('House')
            this.setState({ chamber: 'House' })
        }
        else {

            this.getPeople('Senate')
            this.setState({ chamber: 'Senate' })
        }
    }
    getPeople = (chamber) => {
        let userId = sessionStorage.getItem("id");
        if (userId) {
            Axios.post("/api/getUserCong", {
                userId,
                chamber
            }).then(response => {
                if (response.data.length) {
                    this.setState({
                        congress: response.data,
                    })
                }
                else {
                    this.setState({
                        congress: [{
                            SenateMemberId: null,
                            HouseMemberId: null
                        }]
                    })
                }
            }
            ).catch(err => console.log(err))
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-0 col-sm-2 col-md-3">
                            <div className="btn-group btn-padding">
                                <button className="btn btn-secondary btn-md" type="button" onClick={this.handleClick} >
                                    Toggle Chamber
                                     </button>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-8 col-md-6">
                            <h3 className="section-title text-center vertical-align">Followed {this.state.chamber} Members:</h3>
                        </div>
                        <div className="col-xs-0 col-sm-2 col-md-3">
                        </div>
                    </div>

                    <div>
                        <UserMembers chamber={this.state.chamber} congress={this.state.congress} />
                    </div>
                </div>
            </div>

        )
    }
}

export default UserPage
