import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditTrip from "./EditTrip";

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
      .get(`http://localhost:5000/api/trips/${params.id}`, {
        withCredentials: true
      })

      .then(responseFromApi => {
        const theTrip = responseFromApi.data;
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
      .delete(`http://localhost:5000/api/trips/${params.id}`, {
        withCredentials: true
      })
      .then(responseFromApi => {
        console.log(responseFromApi);
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
          <button onClick={() => this.deleteTrip(this.state._id)}>
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
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h1 class="black">{this.state.destination}</h1>
        <p>From: {this.state.startDate}</p>
        <p>To: {this.state.endDate}</p>
        <p>Attractions: {this.state.pointsOfInterest}</p>
        <div>{this.ownershipCheck(this.state)}</div>
        <Link to={"/trips"}>Back to trips</Link>
      </div>
    );
  }
}

export default TripDetails;
