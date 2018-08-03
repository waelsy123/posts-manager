import React, { Component } from 'react';
import logo from './../../logo.svg';
import './Layout.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Homepage from '../Homepage';
import Post from '../Post';

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cool Posts</h1>
        </header>
        <Router>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/posts/:postId" component={Post} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Layout;
