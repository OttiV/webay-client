import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./NavigationBar.css"

class NavigationBar extends Component {
  render() {
    return (
      <header className="navBar">
        <nav className="navbar navBar_navigation">
        <div className="navBar_logo">
            <h2>
              WeBay
            </h2>
          </div>
        <div className="spacer" />
        <div className="navBar_navigation-items">
            <ul>
              <li>
              <NavLink to="/">
              Home
            </NavLink>
              </li>
              {/* {!this.props.currentUser && (
                <li>
                  <NavLink to="/login">Login</NavLink>{" "}
                </li>
              )} */}
              {!this.props.currentUser && (
                <li>
                  <NavLink to="/signup">Signup</NavLink>{" "}
                </li>
              )}
              {/* {this.props.currentUser && (
                <li>
                  <NavLink to="/logout">Logout</NavLink>{" "}
                </li>
              )} */}
            </ul>
          </div>
        </nav>
       
      </header>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  {}
)(NavigationBar);
