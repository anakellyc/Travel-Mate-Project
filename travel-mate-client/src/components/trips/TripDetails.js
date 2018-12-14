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
    this.getSingleTrip();
  };

  getSingleTrip = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/trips/${params.id}`)
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
      .delete(`http://localhost:5000/api/trips/${params.id}`)
      .then(responseFromApi => {
        console.log(responseFromApi);
        this.props.history.push("/trips");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>{this.state.destination}</h1>
        <p>{this.state.startDate}</p>
        <p>{this.state.endDate}</p>
        <p>{this.state.pointsOfInterest}</p>
        <div>{this.renderEditForm()} </div>
        <button onClick={() => this.deleteTrip(this.state._id)}>
          Delete trip
        </button>
        <Link to={"/trips"}>Back to trips</Link>
      </div>
    );
  }
}

export default TripDetails;
