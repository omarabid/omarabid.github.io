import * as React from "react";
import { Component } from "react";
import { Router, Link } from "@reach/router";

import Home from "./pages/home";
import Profile from "./pages/profile";
import Contact from "./pages/contact";

class App extends Component {
  render() {
    return(
      <div className="App">
          <div className="container">
              <div className="row">
                  <div className="col-sm">
                     <Link to="/">Home</Link>
                  </div>
                  <div className="col-sm">
                     <Link to="profile">Profile</Link>
                  </div>
                  <div className="col-sm">
                     <Link to="contact">Contact</Link>
                  </div>
              </div>
          </div>

          <Router>
              <Home path="/" />
              <Profile path="profile" />
              <Contact path="contact" />
          </Router>

      </div>
    );
  }
}

export default App;
