import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav"
import Bills from "./pages/Bills"
import Members from "./pages/congressmembers"
import Person from "./pages/person"
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/Bills" component={Bills} />
            <Route exact path="/Members" component={Members} />
            <Route path="/Person" component={Person} />
          </Switch>
        </div >
      </Router>
    );
  }
}
export default App;
