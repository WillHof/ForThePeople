import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav"
import Bills from "./pages/Bills"
import Members from "./pages/congressmembers"
import Person from "./pages/person"
import Papers from "./pages/Papers.js"
import Home from "./pages/Home"
import axios from "axios";
import UserPage from './pages/UserPage';
import bg from "./assets/images/capitolbuilding.jpeg"
class App extends Component {
  componentDidMount() {
    axios.get("/auth/user").then(response => console.log(response.data))
  }
  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <div className="home-wrapper">
          <div className="fp-wrapper">
            <div className="home-wrapper">
              <img src={bg} alt="background" id="home"></img>
            </div>
          </div>
        </div>
      
        <Router>
          <div id="overallMain">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Home" component={UserPage} />
              <Route exact path="/Bills" component={Bills} />
              <Route exact path="/Papers" component={Papers} />
              <Route exact path="/Members" component={Members} />
              <Route path="/Person" component={Person} />
            </Switch>
          </div >
        </Router>
      </div>
    );
  }
}
export default App;
