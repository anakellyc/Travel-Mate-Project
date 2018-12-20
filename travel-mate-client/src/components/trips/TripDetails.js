import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditTrip from "./EditTrip";
import config from "../../config.json";

class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // trip: {}
      // destination: true
    };
  }

  componentDidMount = () => {
    debugger;
    this.getSingleTrip();
  };

  getSingleTrip = () => {
    const { params } = this.props.match;
    axios
      .get(`${config.baseUrl}/api/trips/${params.id}`, {
        withCredentials: true
      })

      .then(responseFromApi => {
        const theTrip = responseFromApi.data;

        // let newstartDate = new Date(responseFromApi.data.startDate);
        // let day = newstartDate.getDate();
        // let month = newstartDate.getMonth();
        // let year = newstartDate.getFullYear();
        // let startDate = `${day}/${month + 1}/${year}`;

        // let newEndDate = new Date(responseFromApi.data.endDate);
        // let dayEnd = newEndDate.getDate();
        // let monthEnd = newEndDate.getMonth();
        // let yearEnd = newEndDate.getFullYear();
        // let endDate = `${dayEnd}/${monthEnd + 1}/${yearEnd}`;

        // this.setState({ trip: theTrip });
        this.setState(theTrip);
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderEditForm = () => {
    if (!this.state.destination) {
      this.getSingleTrip();
    } else {
      return <EditTrip theTrip={this.state} getTheTrip={this.getSingleTrip} />;
    }
  };

  // DELETE PROJECT:
  deleteTrip = id => {
    const { params } = this.props.match;
    axios
      .delete(`${config.baseUrl}/api/trips/${params.id}`, {
        withCredentials: true
      })
      .then(responseFromApi => {
        //console.log(responseFromApi);
        this.props.history.push("/trips");
      })
      .catch(err => {
        console.log(err);
      });
  };

  ownershipCheck = trip => {
    debugger;
    if (
      this.props.loggedInUser &&
      trip.owner &&
      trip.owner._id === this.props.loggedInUser._id
    ) {
      return (
        <div>
          <div>{this.renderEditForm()} </div>
          <button
            className="btn btn-danger"
            onClick={() => this.deleteTrip(this.state._id)}
          >
            Delete this trip
          </button>
        </div>
      );
    } else {
      //debugger;
      return (
        <div>
          <h4>Contact your travel buddy:</h4>
          {this.state.owner ? (
            <p>{this.state.owner.email}</p>
          ) : (
            <img src="/public/Loading-icon.gif" alt="loading" />
          )}
          <Link to={"/trips"}>Back to trips</Link>
        </div>
      );
    }
  };

  render() {
    let newstartDate = new Date(this.state.startDate);
    let day = newstartDate.getDate();
    let month = newstartDate.getMonth();
    let year = newstartDate.getFullYear();
    let startDateString = `${day}/${month + 1}/${year}`;

    let newendDate = new Date(this.state.endDate);
    let dayEnd = newendDate.getDate();
    let monthEnd = newendDate.getMonth();
    let yearEnd = newendDate.getFullYear();
    let endDateString = `${dayEnd}/${monthEnd + 1}/${yearEnd}`;

    return (
      <div>
        <h1 className="black">{this.state.destination}</h1>
        <p>From: {startDateString}</p>
        <p>To: {endDateString}</p>
        <p>Attractions: {this.state.pointsOfInterest}</p>
        <div>{this.ownershipCheck(this.state)}</div>
        {/* <Link to={"/trips"}>Back to trips</Link> */}
      </div>
    );
  }
}

export default TripDetails;
