import React from "react";
import "../Signup/SignupForm.css";

export default function LoginForm(props) {
  return (
    <form className="loginForm" onSubmit={props.onSubmit}>
      <label>Email:</label>
      <input
        className="input"
        type="text"
        name="email"
        value={props.values.email}
        onChange={props.onChange}
      />

      <label >Password:</label>
      <input
        className="input"
        type="password"
        name="password"
        value={props.values.password}
        onChange={props.onChange}
      />
      <button className="submitButton" type="submit">
        Log in
      </button>
    </form>
  );
}
