import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditUser from "./EditUser";
import "../../index.css";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.getSingleUser();
  };

  getSingleUser = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/profile/${params.id}`, {
        withCredentials: true
      })
      .then(responseFromApi => {
        const theUser = responseFromApi.data;
        this.setState(theUser);
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderEditForm = () => {
    // if (!this.state.destination) {
    //   this.getSingleTrip();
    // } else {
    return (
      <EditUser
        theUser={this.props.loggedInUser}
        getTheUser={this.getSingleUser}
      />
    );
    //}
  };

  // DELETE USER:
  // deleteUser = id => {
  //   const { params } = this.props.match;
  //   axios
  //     .delete(`http://localhost:5000/api/profile/${params.id}`, {
  //       withCredentials: true
  //     })
  //     .then(responseFromApi => {
  //       console.log(responseFromApi);
  //       this.props.history.push("/profile");
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  //ownershipCheck = trip => {
  //debugger;
  // if (this.props.loggedInUser && trip.owner === this.props.loggedInUser._id) {
  // return (
  //   <div>
  //     {/* <div>{this.renderEditForm()} </div> */}
  //     <button onClick={() => this.deleteTrip(this.state._id)}>
  //       Delete this trip
  //     </button>
  //   </div>
  // );
  //}
  //};

  render() {
    console.log(this.props.loggedInUser.avatarUrl);
    return (
      // <div>
      //   <img
      //     className="img-resize"
      //     src={this.props.loggedInUser.avatarUrl}
      //     alt="avatar"
      //   />
      //   <h1 className="black">{this.props.loggedInUser.firstName}</h1>
      //   <h1 className="black">{this.props.loggedInUser.lastName}</h1>
      //   <p>{this.props.loggedInUser.email}</p>
      //   <p>About me: {this.props.loggedInUser.about}</p>
      //   {/* <div>{this.ownershipCheck(this.props.loggedInUser)}</div> */}
      //   {/* <div>{this.renderEditForm()} </div> */}
      //   <Link to={"/profile"}>Back to Home</Link>
      // </div>

      <div class="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
        <div class="wrapper wrapper--w960">
          <div class="card card-2">
            <div class="card-heading">
              <img
                className="img-resize img-fluid rounded-circle mb-3"
                src={this.props.loggedInUser.avatarUrl}
                alt="avatar"
              />
              <h2 class="title darker-font">
                {this.props.loggedInUser.firstName}{" "}
              </h2>
              <h3 class="title darker-font">
                {this.props.loggedInUser.lastName}
              </h3>
            </div>
            <div class="card-body">
              <form method="POST">
                <div>
                  <p class="input--style-2 input--style-3">Email:</p>
                </div>
                <div class="input-group">
                  <p class="input--style-2">{this.props.loggedInUser.email}</p>
                </div>
                <div>
                  <p class="input--style-2 input--style-3">About me:</p>
                </div>
                <div class="input-group">
                  <p class="input--style-2">{this.props.loggedInUser.about}</p>
                </div>
                {/* <div class="row row-space">
                  <div class="col-2">
                    <div class="input-group">
                      <input
                        class="input--style-2 js-datepicker"
                        type="text"
                        placeholder="Birthdate"
                        name="birthday"
                      />
                      <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar" />
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="input-group">
                      <div class="rs-select2 js-select-simple select--no-search">
                        <select name="gender">
                          <option disabled="disabled" selected="selected">
                            Gender
                          </option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                        <div class="select-dropdown" />
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div class="input-group">
                  <div class="rs-select2 js-select-simple select--no-search">
                    <select name="class">
                      <option disabled="disabled" selected="selected">
                        Class
                      </option>
                      <option>Class 1</option>
                      <option>Class 2</option>
                      <option>Class 3</option>
                    </select>
                    <div class="select-dropdown" />
                  </div>
                </div> */}

                <div class="p-t-30">
                  <button class="btn btn--radius btn--green" type="submit">
                    <Link style={{ textDecoration: "none" }} to={"/profile"}>
                      Back to Home
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetails;
