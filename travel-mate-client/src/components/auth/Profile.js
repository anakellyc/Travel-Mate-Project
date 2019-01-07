import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/auth-service";
//import TripList from "../trips/TripList";
import SearchTrip from "../trips/SearchTrip";
//import { Route } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  render() {
    //debugger;
    return (
      <React.Fragment>
        <header className="masthead2 text-white text-center">
          <div>
            <h1 className="black">
              Welcome {this.props.loggedInUser.firstName}
            </h1>
          </div>
          <div className="overlay" />

          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="heading heading-correct-pronounciation">
                  What's your next destination?
                </h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <p className="list-style">
                  <Link
                    className="btn btn-primary"
                    to="/trips"
                    // component={TripList}
                    user={this.props.loggedInUser}
                  >
                    Trips
                  </Link>
                </p>
                {/* <p className="list-style">
                  <Link
                    className="btn btn-primary"
                    to="/search"
                    user={this.props.loggedInUser}
                    component={SearchTrip}
                  >
                    Search
                  </Link>
                </p> */}
                <p className="list-style">
                  <Link
                    className="btn btn-primary"
                    to={{
                      pathname: "/search",
                      state: { user: this.props.loggedInUser }
                    }}
                    render={props => (
                      <SearchTrip {...props} state={this.props.loggedInUser} />
                    )}
                  >
                    Search
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Profile;
