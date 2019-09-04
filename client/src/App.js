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
class App extends Component {
  componentDidMount() {
    axios.get("/auth/user").then(response => console.log(response.data))
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Bills" component={Bills} />
            <Route exact path="/Papers" component={Papers} />
            <Route exact path="/Members" component={Members} />
            <Route path="/Person" component={Person} />
          </Switch>
        </div >
      </Router>
    );
  }
}
export default App;
