import React, { Component } from 'react'
import axios from 'axios'
export class Papers extends Component {
    state = {
        statements: [],
        search: ""
    }
    componentDidMount() {
        this.getRecentStatements()
    }
    getRecentStatements = () => {
        axios.get("/api/getStatements").then(res => this.setState({ statements: res.data }))
    }
    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }
    handleSearch = (e) => {
        e.preventDefault();
        axios.post("/api/getStatements", { "search": this.state.search }).then(res => this.setState({ statements: res.data }))
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="nameText heading-style">Congressional Statements</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="input-group mb-3">
                            <span className="nameText">Search by category:</span>
                            <input type="text" className="form-control" name="search" value={this.state.search} onChange={this.handleChange} aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" onClick={this.handleSearch} id="button-addon2">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {
                            this.state.statements.map(element =>
                                <div className="card">
                                    <h5 className="card-header nameText">{element.statement_type}</h5>
                                    <div className="card-body">
                                        <h5 className="card-title">{element.title}</h5>
                                        <p className="card-text">From the Office of {element.name}</p>
                                        <a href={element.url} className="btn btn-primary">Go to Statement</a>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div >
            </div >
        )
    }
}

export default Papers
