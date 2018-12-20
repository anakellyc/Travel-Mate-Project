import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthService from "../auth/auth-service";
import "../../index.css";
// import { goToAnchor } from "react-scrollable-anchor";
import ScrollableAnchor from "react-scrollable-anchor";
//import HomePage from "../HomePage";
//import { animateScroll as scroll } from "react-scroll";

// const navbar = () => {
//   return (
//     <nav className="nav-style">
//       <ul>
//         <li>
//           <Link to="/trips" style={{ textDecoration: "none" }}>
//             My Trips
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default navbar;

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
    //debugger;
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
              <li className="list-style">
                <Link className="btn btn-primary" to="/login">
                  Sign In
                </Link>
              </li>
            </div>
          </nav>
        </ScrollableAnchor>
        /* <nav className="navbar navbar-light bg-light static-top">
          <div className={("container", "nav-style")}>
            <ul>
              <li class="list-style">
                <Link class="navbar-brand" to="/">
                  Travel Mate
                </Link>
              </li>
              <li class="list-style">
                <Link to="/login" class="btn btn-primary">
                  Login
                </Link>
              </li>
              <li class="list-style">
                <Link to="/signup" class="btn btn-primary">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </nav> */
      );
    }
  }
}

export default Navbar;
