import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AddTrip from "./AddTrip";

class TripList extends Component {
  constructor() {
    super();
    this.state = { listOfTrips: [] };
  }

  getAllTrips = () => {
    axios.get(`http://localhost:5000/api/trips`).then(responseFromApi => {
      this.setState({
        listOfTrips: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllTrips();
  }

  render() {
    return (
      <div>
        <div style={{ width: "60%", float: "left" }}>
          {this.state.listOfTrips.map((trip, index) => {
            return (
              <div key={trip._id}>
                <h3>{trip.destination}</h3>
                <Link to={`/trips/${trip._id}`}>
                  <button>Details</button>
                </Link>
                {/* <p style={{ maxWidth: "400px" }}>{trip.startDate} </p>
                <p style={{ maxWidth: "400px" }}>{trip.endDate} </p> */}
              </div>
            );
          })}
        </div>
        <div style={{ width: "40%", float: "right" }}>
          <AddTrip getData={() => this.getAllTrips()} />
        </div>
      </div>
    );
  }
}

export default TripList;
