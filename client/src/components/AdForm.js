import React from "react";

export default class AdForm extends React.Component {
  render() {
    return (
      <form className={"AdForm"} onSubmit={this.props.onSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          name="title"
          value={this.props.title}
          onChange={this.props.onChange}
          className={"AdForm_input"}
        />
        <br />
        <label className="DescriptionLabel" htmlFor="description">
          Description:
        </label>
        <br />
        <textarea
          name="description"
          value={this.props.description}
          onChange={this.props.onChange}
          className={"EventForm__textarea"}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <br />
        <input
          name="price"
          value={this.props.price}
          onChange={this.props.onChange}
          className={"AdForm_input"}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          name="email"
          value={this.props.email}
          onChange={this.props.onChange}
          className={"AdForm_input"}
        />
        <br />
        <label htmlFor="phone">Phone number:</label>
        <br />
        <input
          name="phone"
          value={this.props.phone}
          onChange={this.props.onChange}
          className={"AdForm_input"}
        />
        <br />
        <label htmlFor="picture">Picture url:</label>
        <br />
        <input
          name="phone"
          value={this.props.picture}
          onChange={this.props.onChange}
          className={"AdForm_input"}
        />
        <br />
        <button
          type="submit"
          className={"AdForm_submitButton"}
          onSubmit={this.props.onSubmit}
        >
          Add
        </button>
      </form>
    );
  }
}