import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditTrip from "./EditTrip";
import config from "../../config.json";

class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {},
      subject: "",
      message: "",
      replyto: ""
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

        this.setState({ trip: theTrip });
        // this.setState(theTrip);
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderEditForm = () => {
    if (!this.state.trip.destination) {
      this.getSingleTrip();
    } else {
      return (
        <EditTrip theTrip={this.state.trip} getTheTrip={this.getSingleTrip} />
      );
    }
  };

  // DELETE trip:
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

  //remove trip:
  removeTrip = id => {
    axios
      .put(`${config.baseUrl}/api/profile/${this.props.loggedInUser._id}`, {
        withCredentials: true,
        trip: this.state.trip
      })
      .then(responseFromApi => {
        //console.log(responseFromApi);
        this.props.history.push("/trips");
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/trips");
      });
  };

  //send message
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  sendmessage = () => {
    axios.post(`${config.baseUrl}/api/send-email`, {
      email: this.state.trip.owner.email,
      subject: this.state.subject,
      message: this.state.message,
      replyto: this.props.loggedInUser.email
    });
  };

  ownershipCheck = trip => {
    // debugger;
    // console.log(trip);
    // console.log(trip.owner);
    // console.log(this.props.loggedInUser);
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
            onClick={() => this.deleteTrip(this.state.trip._id)}
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
          {this.state.trip.owner ? (
            /* <p>{this.state.trip.owner.email}</p> */
            <React.Fragment>
              <div className="main-w3layouts wrapper">
                <div class="small-agileinfo">
                  <div class="agileits-extra">
                    <form onSubmit={this.sendmessage}>
                      <br />
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={this.state.subject}
                        onChange={e => this.handleChange(e)}
                      />
                      <br />

                      <label>Message</label>

                      <textarea
                        type="text"
                        name="message"
                        value={this.state.message}
                        onChange={e => this.handleChange(e)}
                      />
                      <input type="submit" value="Submit" />
                    </form>
                    <Link to={"/trips"}>Back to trips</Link>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => this.removeTrip(this.state.trip._id)}
              >
                Remove this trip
              </button>
              <br />
            </React.Fragment>
          ) : (
            <p>Loading</p>
            /* <img src="/public/Loading-icon.gif" alt="loading" /> */
          )}
        </div>
      );
    }
  };

  render() {
    let newstartDate = new Date(this.state.trip.startDate);
    let day = newstartDate.getDate();
    let month = newstartDate.getMonth();
    let year = newstartDate.getFullYear();
    let startDateString = `${day}/${month + 1}/${year}`;

    let newendDate = new Date(this.state.trip.endDate);
    let dayEnd = newendDate.getDate();
    let monthEnd = newendDate.getMonth();
    let yearEnd = newendDate.getFullYear();
    let endDateString = `${dayEnd}/${monthEnd + 1}/${yearEnd}`;

    return (
      <div>
        <h1 className="black">{this.state.trip.destination}</h1>
        <p>From: {startDateString}</p>
        <p>To: {endDateString}</p>
        <p>Attractions: {this.state.trip.pointsOfInterest}</p>
        <div>{this.ownershipCheck(this.state.trip)}</div>
        {/* <Link to={"/trips"}>Back to trips</Link> */}
      </div>
    );
  }
}

export default TripDetails;
