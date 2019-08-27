import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
        </div >
      </Router>
    );
  }
}
export default App;
