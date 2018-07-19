import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Home from "./Components/Home";
import Upgrade from "./Components/Upgrade";
import ErrorPage from "./Components/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    exact
                    to="/"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/upgrade"
                    activeClassName="active"
                  >
                    Upgrade
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/redirect"
                    activeClassName="active"
                  >
                    404 test
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/upgrade" component={Upgrade} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
