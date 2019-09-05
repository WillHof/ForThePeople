import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
class Nav extends React.Component {
    state = {
        username: "",
        password: ""
    }
    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }
    signUp = (e) => {
        e.preventDefault()
        axios.post("/auth/signup", {
            username: this.state.username,
            password: this.state.password
        }).then(response => console.log(response))
            .catch(err => alert(err))
    }
    submitForm = (e) => {
        e.preventDefault()
        axios.post("/auth/login", {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            sessionStorage.setItem('id', response.data.user.id)
            alert("You have been logged in")
        })
            .catch(err => alert("Username or password incorrect"))
    }
    logOut = (e) => {
        e.preventDefault()
        axios.post("/auth/logout", {
            user: sessionStorage.getItem('id')
        }).then(response => {
            sessionStorage.removeItem('id');
            alert("You have been logged out")
        })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="./">For the People</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                    Home
                        </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/Papers"
                                    className={window.location.pathname === "/Papers" ? "nav-link active" : "nav-link"}
                                >
                                    Congressional Statements
                        </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/Bills"
                                    className={window.location.pathname === "/Bills" ? "nav-link active" : "nav-link"}
                                >
                                    Bills
                        </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Members" className={window.location.pathname === "/Bills" ? "nav-link active" : "nav-link"}>Congress Members</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="./" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    User Account
                        </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <button type="button" className="dropdown-item" data-toggle="modal" data-target="#LoginModal">Log In</button>
                                    <button type="button" className="dropdown-item" data-toggle="modal" data-target="#SignUpModal">Sign Up</button>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" onClick={this.logOut}>Log Out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="modal fade" id="LoginModal" tabIndex="-1" role="dialog" aria-labelledby="LoginModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="LoginModalLabel">Log In</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="/auth/login" method="post">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.username} onChange={this.handleChange} />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" value="submit" onClick={this.submitForm} className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="SignUpModal" tabIndex="-1" role="dialog" aria-labelledby="SignUpModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="SignUpModalLabel">Sign Up</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="/auth/login" method="post">
                                    <div className="form-group">
                                        <label htmlFor="signupemail">Email address</label>
                                        <input type="email" name="username" className="form-control" id="signupemail" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.username} onChange={this.handleChange} />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="signuppassword">Password</label>
                                        <input type="password" name="password" className="form-control" id="signuppassword" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" value="submit" onClick={this.signUp} className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
