import React, { Component } from "react";
import "./App.css";
import "./index.css";
import { Switch, Route } from "react-router-dom";

//start oauth test
//import io from "socket.io-client";
//import { baseUrl } from "./config.json";
//end oauth test

//import { goToAnchor } from "react-scrollable-anchor";
//import ScrollableAnchor from "react-scrollable-anchor";

import TripList from "./components/trips/TripList";
import Navbar from "./components/navbar/Navbar";
import TripDetails from "./components/trips/TripDetails";
import Signup from "./components/auth/Signup";
import AuthService from "./components/auth/auth-service";
import Login from "./components/auth/Login";
import HomePage from "./components/HomePage";
import Profile from "./components/auth/Profile";
import UserDetails from "./components/auth/UserDetails";
import SearchTrip from "./components/trips/SearchTrip";
import Contact from "./components/Contact";

//start oauth test
//const socket = io(baseUrl);
//const providers = ["twitter", "google", "facebook", "github"];
//end oauth test

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.fetchUser = this.fetchUser.bind(this);
  }
  loginUser = () => {
    this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        });
      });
  };

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          debugger;
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    this.fetchUser();
    if (this.state.loggedInUser) {
      var user = this.state.loggedInUser;
      return (
        <div className="App">
          <Navbar
            userInSession={this.state.loggedInUser}
            getUser={this.getTheUser}
          />

          <Switch>
            <Route exact path="/trips" component={TripList} />

            <Route
              exact
              path="/search"
              render={props => <SearchTrip {...props} user={user} />}
              loggedInUser={user}
            />
            <Route
              exact
              path="/trips/:id"
              render={props => (
                <TripDetails
                  {...props}
                  loggedInUser={user}
                  getUser={this.getTheUser}
                />
              )}
            />
          </Switch>

          <Route
            exact
            path="/profile/:id"
            render={props => (
              <UserDetails
                {...props}
                loggedInUser={user}
                getUser={this.getTheUser}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={props => <Profile {...props} loggedInUser={user} />}
          />
          {/* <Profile
            userInSession={this.state.loggedInUser}
            getUser={this.getTheUser}
          /> */}
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar
            userInSession={this.state.loggedInUser}
            getUser={this.getTheUser}
          />
          <Switch>
            <Route
              exact
              path="/signup"
              render={() => (
                <Signup loginUser={this.loginUser} getUser={this.getTheUser} />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => <Login getUser={this.getTheUser} />}
            />
            {/* start oauth test, uncomment paragraph below
            {providers.map(provider => (
              <Login
                getUser={this.getTheUser}
                provider={provider}
                key={provider}
                socket={socket}
              />
            ))}
            end oauth test */}
            <Route
              exact
              path="/contact"
              render={() => <Contact getUser={this.getTheUser} />}
            />
            <Route exact path="/" component={HomePage} />
            <HomePage title="Benefits" id="section1" />
          </Switch>

          {/* <Route exact path="/" component={HomePage} /> */}
        </div>
      );
    }
  }
}

export default App;
