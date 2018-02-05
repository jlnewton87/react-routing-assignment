import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import NotFound from './containers/NotFound';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/courses">Courses</NavLink>
          </nav>
          <Switch>
            <Route path="/" exact render={() => <h1>Home</h1>} />
            <Route path="/users" exact component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" to="/courses"/>
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
