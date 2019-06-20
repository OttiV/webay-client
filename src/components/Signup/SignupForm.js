import React, { PureComponent } from "react";
import "./SignupForm.css";

export default class SignupForm extends PureComponent {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form className="signupForm" onSubmit={this.handleSubmit}>
        <label>
          Name
          <br />
          <input
            className="input"
            type="firstName"
            name="firstName"
            value={this.state.firstName || ""}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Last Name
          <br />
          <input
            className="input"
            type="lastName"
            name="lastName"
            value={this.state.lastName || ""}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Email
          <br />
          <input
            className="input"
            type="email"
            name="email"
            value={this.state.email || ""}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Password
          <br />
          <input
            className="input"
            type="password"
            name="password"
            value={this.state.password || ""}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Confirm password
          <br />
          <input
            className="input"
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword || ""}
            onChange={this.handleChange}
          />
        </label>
        <br />
        {this.state.password &&
          this.state.confirmPassword &&
          this.state.password !== this.state.confirmPassword && (
            <p style={{ color: "red" }}>The passwords do not match!</p>
          )}
        <br />
        <button className="submitButton" type="submit">
          Sign up
        </button>
      </form>
    );
  }
}
