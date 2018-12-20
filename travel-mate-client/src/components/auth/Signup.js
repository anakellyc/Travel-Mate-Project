import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
import api from "../../api";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      about: "",
      password: "",
      avatarUrl: null
    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    debugger;
    event.preventDefault();
    api.signup({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      about: this.state.about,
      password: this.state.password,

      avatarUrl: this.state.avatarUrl
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAvatarChange(e) {
    this.setState({
      avatarUrl: e.target.files[0]
    });
  }

  render() {
    return (
      <header className="masthead text-white text-center">
        <div className="overlay" />
        <div className="main-w3layouts wrapper">
          <h2>SingUp and start exploring!</h2>
          <div class="main-agileinfo">
            <div class="agileits-top">
              <form onSubmit={this.handleFormSubmit}>
                <label />
                <input
                  className="text"
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  placeholder="Name"
                  onChange={e => this.handleChange(e)}
                />

                <label />
                <input
                  className="text"
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  placeholder="Surname"
                  onChange={e => this.handleChange(e)}
                />

                <label />
                <input
                  className="text email"
                  type="text"
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={e => this.handleChange(e)}
                />

                <label />
                <textarea
                  className="text"
                  type="text"
                  name="about"
                  value={this.state.about}
                  placeholder="Tell us more about you"
                  onChange={e => this.handleChange(e)}
                />

                <label />
                <input
                  className="text"
                  name="password"
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={e => this.handleChange(e)}
                />
                <br />
                <label>Upload picture:</label>
                <input
                  name="avatarUrl"
                  type="file"
                  // value={this.state.avatarUrl}
                  onChange={e => this.handleAvatarChange(e)}
                />

                <input type="submit" value="Sign Up" />
              </form>

              <p className="link-style">
                Already have account?
                <Link className="link-style" to={"/login"}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Signup;
