import React, { Component } from "react";
import axios from "axios";
import config from "../../config.json";
//import { Redirect } from "react-router-dom";

class SearchTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "search",
      trips: [],
      tripsAdded: []
    };
    this.add = this.add.bind(this);
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  add = e => {
    console.log("user", this.props);
    var thisTrip = e.target.attributes[1].nodeValue;
    const user = this.props.user;

    axios
      .post(`${config.baseUrl}/api/profile/${user._id}`, {
        withCredentials: true,
        thisTrip: thisTrip
      })
      .then(responseFromApi => {
        //console.log("this trip", responseFromApi);
        this.props.history.push("/trips");
        return responseFromApi.data;
      })
      .catch(error => {
        //debugger;
        this.props.history.push("/trips");
      });
  };

  componentDidMount = () => {
    axios
      .get(`${config.baseUrl}/api/search`, { withCredentials: true })
      .then(responseFromApi => {
        //debugger;
        //console.log("list of trips", responseFromApi);
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

    var fixedtripsDate = date => {
      let newstartDate = new Date(date);
      let day = newstartDate.getDate();
      let month = newstartDate.getMonth();
      let year = newstartDate.getFullYear();
      return `${day}/${month + 1}/${year}`;
    };

    var trips = tripsDisplayed.map((trip, index) => (
      <React.Fragment>
        <h1 class="black">{trip.destination}</h1>
        <p>From: {fixedtripsDate(trip.startDate)}</p>
        <p>To: {fixedtripsDate(trip.endDate)}</p>
        <button
          className="btn btn-sm btn-primary"
          thisTrip={trip._id}
          onClick={this.add}
          key={index}
        >
          Add Trip
        </button>
        <br />
        <br />
      </React.Fragment>
    ));
    return (
      <div class="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
        <div className="main-w3layouts wrapper">
          <div class="extra-agileinfo">
            <div class="agileits-extra">
              <h3 className="white-text">Search your next destination:</h3>
              <input
                type="text"
                onChange={this.handleChange}
                name="search"
                placeholder={this.state.search}
              />
              <br />
              {trips}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchTrip;
