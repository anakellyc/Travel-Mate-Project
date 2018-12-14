import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import TripList from "./components/trips/TripList";
import Navbar from "./components/navbar/Navbar";
import TripDetails from "./components/trips/TripDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/trips" component={TripList} />
          <Route exact path="/trips/:id" component={TripDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
