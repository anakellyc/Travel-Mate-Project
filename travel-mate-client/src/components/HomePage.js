import React from "react";
import { Link, Route } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";
import Contact from "./Contact";

//var Mailto = require("react-mailto");
//import AuthService from "../auth/auth-service";

const home = () => {
  //   return (
  //     <div>
  //       <h1>Welcome to Travel Mate</h1>
  //     </div>
  //   );
  // };

  return (
    <React.Fragment>
      {/* <!-- Masthead --> */}
      <header className="masthead text-white text-center">
        <div className="overlay" />

        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="heading heading-correct-pronounciation">
                Find your
                <em>Travel Mate</em>
                Happiness is better when shared
              </h1>
              {/* <h4 className="mb-5">Find now your</h4>
              <h1 className="mb-5">Travel Mate</h1>
              <h3 className="mb-5">Because happiness is better when shared</h3> */}
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              {/* <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email..."
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <button
                      type="submit"
                      className="btn btn-block btn-lg btn-primary"
                    >
                      Sign up!
                    </button>
                  </div>
                </div>
              </form> */}
              <p className="list-style">
                <Link className="btn btn-primary" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* </ScrollableAnchor> */}
      </header>

      {/* <!-- Icons Grid --> */}
      <ScrollableAnchor id={"section1"}>
        <section className="features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-globe-alt m-auto text-primary" />
                  </div>
                  <h3>Add Your Trips</h3>
                  <p className="lead mb-0">
                    Create your trips and keep track of them!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-magnifier m-auto text-primary" />
                  </div>
                  <h3>Search Trips</h3>
                  <p className="lead mb-0">
                    Find trips from other users and add to your list!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-people m-auto text-primary" />
                  </div>
                  <h3>Connect</h3>
                  <p className="lead mb-0">
                    Connect to your travel buddies and define details of your
                    trip together!
                  </p>
                </div>
              </div>
            </div>
            <br />
            <a href="#home">Back to Top</a>
          </div>
        </section>
      </ScrollableAnchor>
      {/* <!-- Image Showcases --> */}
      {/* <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              // style={{"background-image": url('img/bg-showcase-1.jpg')}}
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Fully Responsive Design</h2>
              <p className="lead mb-0">
                When you use a theme created by Start Bootstrap, you know that
                the theme will look great on any device, whether it's a phone,
                tablet, or desktop the page will behave responsively!
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 text-white showcase-img"
              // style="background-image: url('img/bg-showcase-2.jpg');"
            />
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Updated For Bootstrap 4</h2>
              <p className="lead mb-0">
                Newly improved, and full of great utility classes, Bootstrap 4
                is leading the way in mobile responsive web development! All of
                the themes on Start Bootstrap are now using Bootstrap 4!
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              // style="background-image: url('img/bg-showcase-3.jpg');"
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Easy to Use &amp; Customize</h2>
              <p className="lead mb-0">
                Landing Page is just HTML and CSS with a splash of SCSS for
                users who demand some deeper customization options. Out of the
                box, just add your content and images, and your new landing page
                will be ready to go!
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Testimonials --> */}
      <ScrollableAnchor id={"section2"}>
        <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5 darker-font">What people are saying...</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="img/user1.jpg"
                    alt=""
                  />
                  <h5>Skra D.</h5>
                  <p className="font-weight-light mb-0">
                    "Wow! This is amazing! Thanks so much!"
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="img/user2.jpg"
                    alt=""
                  />
                  <h5>Dea K.</h5>
                  <p className="font-weight-light mb-0">
                    "Travel Mate is amazing. I've met the best travel buddies
                    who are now my good friends."
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src="img/users.jpg"
                    alt=""
                  />
                  <h5>Amel & Lyuda</h5>
                  <p className="font-weight-light mb-0">
                    "We found more than a travel mate, we found love!"
                  </p>
                </div>
              </div>
            </div>
            <br />
            <a href="#home">Back to Top</a>
          </div>
        </section>
      </ScrollableAnchor>
      {/* <!-- Call to Action --> */}
      <section className="call-to-action text-white text-center">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h2 className="mb-4">Ready to get started? Sign up now!</h2>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <p className="list-style">
                <Link className="btn btn-primary" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href="/">About</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  {/* <a href="/contact">Contact</a> */}

                  {/* <Contact exact path="/contact" render={() => <Contact />} /> */}
                  <p className="list-style">
                    <Link to="/contact">Contact</Link>
                  </p>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="/">Terms of Use</a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">
                &copy; Ana Kelly 2018. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mr-3">
                  <a href="/">
                    {" "}
                    <i className="fab fa-facebook fa-2x fa-fw" />{" "}
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a href="/">
                    {" "}
                    <i className="fab fa-instagram fa-2x fa-fw" />{" "}
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a
                    href="https://github.com/anakellyc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github fa-2x fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/ana-kelly-campos-9a469429/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin fa-2x fa-fw" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default home;
