import React, { Component } from 'react'
import axios from 'axios'
export class Papers extends Component {
    state = {
        statements: []
    }
    componentDidMount() {
        this.getRecentStatements()
    }
    getRecentStatements = () => {
        axios.get("/api/getStatements").then(res => this.setState({ statements: res.data }))
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        {
                            this.state.statements.map(element =>
                                <p>{element.title}</p>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Papers
