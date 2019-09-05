import React, { Component } from 'react'
import Axios from 'axios';
import PersonDetails from "../components/personDetails"
import PersonNav from "../components/PersonNav"
export class Person extends Component {
    state = {
        id: 'something',
        chamber: 'whatever',
        member: {}
    }
    setQueryParam = () => {
        var regexS1 = "[\\?&]name=([^&#]*)",
            regex = new RegExp(regexS1),
            id = regex.exec(document.URL)[1];
        var regexS2 = "[\\?&]chamber=([^&#]*)",
            regex2 = new RegExp(regexS2),
            chamber = regex2.exec(document.URL)[1];

        if (id === null || (id && typeof (id[1]) !== 'string' && id[1].length)) {
            return ''
        } else {
            this.setState({
                'id': id,
                'chamber': chamber
            },
                this.getCongressMem(id, chamber)
            )
        }
    }
    getCongressMem(id, chamber) {
        Axios.post("/api/getOne", {
            id,
            chamber
        })
            .then(response => this.setState({ member: response.data }))
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.setQueryParam();
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <PersonDetails info={this.state.member} />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <h3 className="nameText heading-style">{this.state.member.firstname} {this.state.member.lastname}</h3>
                        <PersonNav id={this.state.id} firstName={this.state.member.firstname} lastName={this.state.member.lastname} />
                    </div>

                </div>
            </div>
        )
    }
}

export default Person
