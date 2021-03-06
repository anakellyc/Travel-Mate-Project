import React, { Component } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import config from "../config.json";
//import history from "../history.js";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      message: "",
      replyto: "",
      postmessage: ""
    };
  }

  //send message
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  sendmessage = e => {
    e.preventDefault();

    axios
      .post(`${config.baseUrl}/api/send-email`, {
        email: "yournewtravelmates@gmail.com",
        subject: this.state.subject,
        message: this.state.message,
        replyto: this.state.replyto
      })
      .then(responseFromApi => {
        debugger;
        //console.log("this trip", responseFromApi);
        this.setState({
          subject: "",
          message: "",
          replyto: "",
          postmessage: "Your message has been sent"
        });
      })
      .catch(error => {
        debugger;
        console.log(error);
        this.setState({
          postmessage: "An error ocurred, try again"
        });
      });
  };

  render() {
    return (
      <header className="masthead text-white text-center reduce-padding">
        <div className="overlay" />
        <div className="main-w3layouts wrapper">
          <h2>Send your message and we'll be in touch soon</h2>
          <div class="main-agileinfo">
            <div class="agileits-top">
              <p>{this.state.postmessage}</p>
              <form
                onSubmit={e => {
                  this.sendmessage(e);
                }}
              >
                <label />
                <input
                  className="text"
                  type="text"
                  name="replyto"
                  value={this.state.replyto}
                  placeholder="Your Email"
                  onChange={e => this.handleChange(e)}
                />
                <br />
                <label />
                <input
                  className="text"
                  type="text"
                  name="subject"
                  value={this.state.subject}
                  placeholder="Subject"
                  onChange={e => this.handleChange(e)}
                />
                <br />

                <label />

                <textarea
                  className="text"
                  type="text"
                  name="message"
                  value={this.state.message}
                  placeholder="Message"
                  onChange={e => this.handleChange(e)}
                />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Contact;
