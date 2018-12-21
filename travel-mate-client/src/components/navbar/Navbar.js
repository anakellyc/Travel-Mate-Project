import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthService from "../auth/auth-service";
import "../../index.css";
import ScrollableAnchor from "react-scrollable-anchor";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    //debugger;
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  render() {
    if (this.state.loggedInUser) {
      //debugger;
      return (
        <div>
          <nav className="navbar navbar-light bg-light static-top">
            <li className="navbar-brand">
              <Link
                className="navbar-brand"
                to="/profile"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li className="navbar-brand">
              <Link
                className="navbar-brand"
                to="/profile/:id"
                style={{ textDecoration: "none" }}
              >
                Profile
              </Link>
            </li>
            <li className="navbar-brand">
              <Link
                className="navbar-brand"
                to="/trips"
                style={{ textDecoration: "none" }}
              >
                Trips
              </Link>
            </li>
            <li className="navbar-brand">
              <Link
                className="navbar-brand"
                to="/search"
                style={{ textDecoration: "none" }}
              >
                Search
              </Link>
            </li>
            <li className="list-style">
              <Link to="/">
                <button
                  className="btn btn-primary"
                  onClick={() => this.logoutUser()}
                >
                  Logout
                </button>
              </Link>
            </li>
          </nav>
          <Redirect to="/profile" />
        </div>
      );
    } else {
      return (
        <ScrollableAnchor id="home">
          <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
              <li className="navbar-brand">
                <Link className="navbar-brand" to="/">
                  Travel Mate
                </Link>
              </li>

              <a className="navbar-brand" href="/#section1">
                Benefits
              </a>
              <a className="navbar-brand" href="/#section2">
                Testimonials
              </a>
              {/* <a className="navbar-brand" href="/contact">
                Contact
              </a> */}
              <li className="list-style">
                <Link className="navbar-brand" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="list-style">
                <Link className="btn btn-primary" to="/login">
                  Sign In
                </Link>
              </li>
            </div>
          </nav>
        </ScrollableAnchor>
      );
    }
  }
}

export default Navbar;
