import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
//import api from "../../api";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
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
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      //     <div className="login-page ng-scope ui-view">
      //       <div className="row">
      //         <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
      //           <img src={require("../../common/images/flat-avatar.png")} className="user-avatar" />
      //           <h1>Ani Theme <small>Free React.js Edition</small></h1>
      //           <form role="form" onSubmit={this.handleLogin} className="ng-pristine ng-valid">
      //             <div className="form-content">
      //               <div className="form-group">
      //                 <input type="text" className="form-control input-underline input-lg" placeholder="Email" />
      //               </div>
      //               <div className="form-group">
      //                 <input type="password" className="form-control input-underline input-lg" placeholder="Password" />
      //               </div>
      //             </div>
      //             <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Login</button>
      //           </form>
      //         </div>
      //       </div>
      //     </div>

      // );
      <header className="masthead text-white text-center">
        <div className="overlay" />
        <div className="main-w3layouts wrapper">
          <div className="main-agileinfo">
            <div className="agileits-top">
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
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Login;
