import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import config from "../../config.json";

import AddTrip from "./AddTrip";
//import UserDetails from "../auth/UserDetails";
//import Profile from "../auth/Profile";

class TripList extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfTrips: [] };
  }

  // ownershipCheck = trip => {
  //   //debugger;
  //   if (this.props.loggedInUser && trip.owner === this.props.loggedInUser._id) {
  //     return (
  //       <div>
  //         <div>{this.renderEditForm()} </div>
  //         <button onClick={() => this.deleteTrip(this.state._id)}>
  //           Delete this trip
  //         </button>
  //       </div>
  //     );
  //   }
  // };

  getAllTrips = () => {
    axios
      .get(`${config.baseUrl}/api/trips`, { withCredentials: true })
      .then(responseFromApi => {
        //debugger;
        //console.log("check list of trips", responseFromApi);
        // if (responseFromApi.data.owner === this.props.user._id)
        this.setState({
          listOfTrips: responseFromApi.data
        });
      });
    //})
  };

  componentDidMount() {
    this.getAllTrips();
  }

  render() {
    return (
      <div class="page-wrapper bg-blue p-t-50 p-b-100 font-robo">
        {/* <div> */}
        {/* <div style={{ width: "50%", float: "left" }}> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {this.state.listOfTrips.map((trip, index) => {
                return (
                  <div className="border-bottom" key={trip._id}>
                    <h3>{trip.destination}</h3>
                    <Link to={`/trips/${trip._id}`}>
                      <button className="btn btn-sm btn-primary">
                        Details
                      </button>
                    </Link>
                    {/* <p style={{ maxWidth: "400px" }}>{trip.startDate} </p>
                <p style={{ maxWidth: "400px" }}>{trip.endDate} </p> */}
                  </div>
                );
              })}
            </div>
            {/* <div style={{ width: "50%", float: "right" }}> */}
            <div className="col-lg-6">
              <AddTrip getData={() => this.getAllTrips()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TripList;
