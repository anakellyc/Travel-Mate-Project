import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
import "../../index.css";
//import api from "../../api";
// import config from "../../config.json";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
    this.service = new AuthService();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = event => {
    //debugger;
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    this.service
      .login(email, password)
      .then(response => {
        //debugger;
        this.setState({ email: "", password: "" }, () => {
          //debugger;
        });
        this.props.getUser(response);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          message: "Invalid credentials"
        });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <header className="masthead text-white text-center">
        <div className="overlay" />
        <div className="main-w3layouts wrapper">
          <div className="main-agileinfo">
            <div className="agileits-top">
              <p>{this.state.message}</p>
              <form onSubmit={this.handleFormSubmit}>
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
                <input
                  className="text"
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={e => this.handleChange(e)}
                />

                <input type="submit" value="Login" />
              </form>
              <p>
                Don't have account?
                <Link to={"/signup"}> Signup</Link>
              </p>
              {/* <p>Or</p> */}
              {/* <button className="btn btn-primary" type="submit">
                <a
                  className="link-style white-text icon-social-facebook"
                  href="/auth/facebook"
                >
                  <span className="white-text-font">Login with Facebook</span>
                </a>
              </button> */}
              {/* <button>
                <a href={`${config.baseUrl}/api/auth/facebook`}>
                  Login with Facebook
                </a>
              </button> */}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Login;
