import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import NavigationBar from "./components/Navigation/NavigationBar";
import AdsListContainer from "./components/Ads/AdsListContainer";
import AdDetailsContainer from "./components/Ads/AdDetailsContainer";
import SignupContainer from "./components/Signup/SignupContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <nav>
          <NavigationBar />
        </nav>
        <div>
          <Route path="/" exact component={AdsListContainer} />
          <Route path="/ads/:id" component={AdDetailsContainer} />
          <Route path="/signup" component={SignupContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
