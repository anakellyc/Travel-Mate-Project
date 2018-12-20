import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import config from "../../config.json";

import "react-datepicker/dist/react-datepicker.css";

class AddTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      startDate: "",
      endDate: "",
      pointsOfInterest: [],
      owner: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const destination = this.state.destination;
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;
    const pointsOfInterest = this.state.pointsOfInterest;
    const owner = this.state.owner;
    //debugger;
    axios
      .post(
        `${config.baseUrl}/api/trips`,
        {
          destination,
          startDate,
          endDate,
          pointsOfInterest,
          owner
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.getData();
        this.setState({
          destination: "",
          startDate: "",
          endDate: "",
          pointsOfInterest: "",
          owner: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleStartDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleEndDateChange = date => {
    this.setState({
      endDate: date
    });
  };

  render() {
    return (
      <div className="main-w3layouts wrapper">
        <div className="extra-agileinfo">
          <div className="agileits-extra">
            <h2>Add a Trip:</h2>
            <form onSubmit={this.handleFormSubmit}>
              <label className="white-text">Destination:</label>
              <br />
              <input
                className="btn-block"
                type="text"
                name="destination"
                value={this.state.destination}
                onChange={e => this.handleChange(e)}
              />
              <br />
              <label className="white-text">Start Date:</label>
              <br />
              <DatePicker
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                className="btn-block"
                selected={this.state.startDate}
                onChange={this.handleStartDateChange}
              />
              <br />

              <br />
              <label className="white-text">End Date:</label>
              <br />

              <DatePicker
                dateFormat="dd/MM/yyyy"
                minDate={new Date(this.state.startDate)}
                className="btn-block"
                selected={this.state.endDate}
                onChange={this.handleEndDateChange}
              />

              <br />
              <br />
              <label className="white-text">Points of Interest:</label>
              <br />
              <textarea
                className="btn-block"
                type="text"
                name="pointsOfInterest"
                value={this.state.pointsOfInterest}
                onChange={e => this.handleChange(e)}
              />

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTrip;
