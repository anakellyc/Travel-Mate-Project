import React, { Component } from "react";
import axios from "axios";
import config from "../../config.json";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.theUser.firstName,
      lastName: this.props.theUser.lastName,
      email: this.props.theUser.email,
      about: this.props.theUser.about,
      password: this.props.theUser.password,
      confirmPassword: this.props.theUser.confirmPassword
    };
  }

  handleFormSubmit = event => {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const about = this.state.about;
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;

    event.preventDefault();

    axios
      .put(
        `${config.baseUrl}/api/profile/${this.props.theUser._id}`,
        {
          firstName,
          lastName,
          email,
          about,
          password,
          confirmPassword
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.getTheUser();
      })
      .catch(error => console.log(error));
  };

  handleChangefirstName = event => {
    this.setState({
      firstName: event.target.value
    });
  };
  handleChangelastName = event => {
    this.setState({
      lastName: event.target.value
    });
  };
  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  handleChangeAbout = event => {
    this.setState({
      about: event.target.value
    });
  };
  handleChangePass = event => {
    this.setState({
      password: event.target.value
    });
  };
  handleChangePass = event => {
    this.setState({
      confirmPassword: event.target.value
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>Edit Profile</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={e => this.handleChangefirstName(e)}
          />

          <label>Surname:</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={e => this.handleChangelastName(e)}
          />

          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={e => this.handleChangeEmail(e)}
          />

          <label>About:</label>
          <input
            type="text"
            name="about"
            value={this.state.about}
            onChange={e => this.handleChangeAbout(e)}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChangePass(e)}
          />
          <label>Confir password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={e => this.handleChangePass(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditUser;
