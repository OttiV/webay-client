import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/users";
import SignupForm from "./SignupForm";

class SignupContainer extends PureComponent {
  handleSubmit = data => {
    this.props.postSignup(data.email, data.password);
  };

  render() {
    if (this.props.signup.success) return <Redirect to="/login" />;

    return (
      <div className="signup-form">
        <h2>Sign up</h2>

        <SignupForm onSubmit={this.handleSubmit} />
        {this.props.signup.error && (
          <p style={{ color: "red" }}>
              {this.props.signup.error}
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    signup: state.signup
  };
};

export default connect(
  mapStateToProps,
  { postSignup: signup }
)(SignupContainer);