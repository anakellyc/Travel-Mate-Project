import React, { Component } from "react";
import axios from "axios";

class AddTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      startDate: "",
      endDate: "",
      pointsOfInterest: []
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const destination = this.state.destination;
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;
    const pointsOfInterest = this.state.pointsOfInterest;
    axios
      .post("http://localhost:5000/api/trips", {
        destination,
        startDate,
        endDate,
        pointsOfInterest
      })
      .then(() => {
        this.props.getData();
        this.setState({
          destination: "",
          startDate: "",
          endDate: "",
          pointsOfInterest: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="add-trip">
        <form onSubmit={this.handleFormSubmit}>
          <label>Destination:</label>
          <input
            type="text"
            name="destination"
            value={this.state.destination}
            onChange={e => this.handleChange(e)}
          />
          <label>Start Date:</label>
          <input
            type="text"
            name="startDate"
            value={this.state.startDate}
            onChange={e => this.handleChange(e)}
          />
          <label>End Date:</label>
          <input
            type="text"
            name="endDate"
            value={this.state.endDate}
            onChange={e => this.handleChange(e)}
          />
          <label>Points of Interest:</label>
          <textarea
            name="pointsOfInterest"
            value={this.state.pointsOfInterest}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddTrip;
