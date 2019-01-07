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
      confirmPassword: "",
      avatarUrl: null,
      message: ""
    };
    this.service = new AuthService();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = event => {
    var thisContext = this;
    event.preventDefault();
    api
      .signup({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        about: this.state.about,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        avatarUrl: this.state.avatarUrl
      })
      .then(() => {
        //thisContext.forceUpdate();
        thisContext.props.loginUser();
      })
      .catch(error => {
        console.log(error);
        this.setState({
          message: error
        });
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
      <header className="masthead text-white text-center reduce-padding">
        <div className="overlay" />
        <div className="main-w3layouts wrapper">
          <h2>SingUp and start exploring!</h2>
          <div className="main-agileinfo">
            <div className="agileits-top">
              <p>{this.state.message}</p>
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
                <label />
                <input
                  className="text"
                  name="confirmPassword"
                  type="password"
                  value={this.state.confirmPassword}
                  placeholder="Confirm password"
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
