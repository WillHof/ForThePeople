import React, { Component } from 'react'
import Axios from 'axios';
import { URLSearchParams } from 'url';

export class Person extends Component {
    state = {

    }
    setQueryParam = () => {
        var regexS1 = "[\\?&]name=([^&#]*)",
            regex = new RegExp(regexS1),
            id = regex.exec(document.URL)[1];
        var regexS2 = "[\\?&]chamber=([^&#]*)",
            regex = new RegExp(regexS2),
            chamber = regex.exec(document.URL)[1];

        if (id === null || (id && typeof (id[1]) !== 'string' && id[1].length)) {
            console.log("didn't work")
        } else {
            this.setState({
                'id': id,
                'chamber': chamber
            });
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
            <div>

            </div>
        )
    }
}

export default Person
