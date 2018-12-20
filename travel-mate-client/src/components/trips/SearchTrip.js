import React, { Component } from "react";
import axios from "axios";
//import { Redirect } from "react-router-dom";

//import Profile from "../auth/Profile";

class SearchTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "search",
      trips: []
    };
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  add = e => {
    //debugger;
    var thisTrip = e.target.attributes[0].nodeValue;
    const { user } = this.props.location.state;
    // const { params } = this.props.match.params.value;
    // console.log(params);
    //var oldTrips = this.props.loggedInUser.trips;
    //oldTrips.push(addTrip);
    //debugger;
    axios
      .post(`http://localhost:5000/api/profile/${user._id}`, {
        withCredentials: true,
        thisTrip: thisTrip
      })
      .then(responseFromApi => {
        //console.log("this trip", responseFromApi);
        return responseFromApi.data;
      });
  };

  componentDidMount = () => {
    axios
      .get(`http://localhost:5000/api/search`, { withCredentials: true })
      .then(responseFromApi => {
        //debugger;
        console.log("list of trips", responseFromApi);
        this.setState({
          trips: responseFromApi.data
        });
      });
  };

  render() {
    //debugger;
    var tripsDisplayed = this.state.trips.filter(trip => {
      //console.log(trip);
      var triplowcase = trip.destination.toLowerCase();
      return triplowcase.includes(this.state.search.toLowerCase());
    });
    var trips = tripsDisplayed.map((trip, index) => (
      <React.Fragment>
        <h1 class="black">{trip.destination}</h1>
        <p>{trip.startDate}</p>
        <p>{trip.endDate}</p>
        <button thisTrip={trip._id} onClick={this.add} key={index}>
          Add Trip
        </button>
      </React.Fragment>
    ));
    return (
      <div class="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
        <label>Search your next destination:</label>
        <input
          type="text"
          onChange={this.handleChange}
          name="search"
          placeholder={this.state.search}
        />
        {trips}
      </div>
    );
  }
}

export default SearchTrip;
