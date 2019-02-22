import React, { Component } from 'react';
import { Route, Router } from "react-router";
import './App.css';
import Home from './views/Home';
import UserDetail from "./views/UserDetail";
import  PropTypes  from "prop-types";

class App extends Component {
  render() {
    return (
      <Router history={ this.props.history } >
        <div className="App">
          <Route exact path="/" component={ Home } />
          <Route exact path ="/detail/:userId" component={ UserDetail } />
        </div>
      </Router>
    );
  }
}

App.propTypes = { 
  history : PropTypes.any.isRequired
}

export default App;
