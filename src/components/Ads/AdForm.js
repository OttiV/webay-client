import React from "react";
import "./AdForm.css";

export default class AdForm extends React.Component {
  render() {
    return (
      <form className={"AdForm"} onSubmit={this.props.onSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          name="title"
          value={this.props.adDetails ? this.props.values.title : undefined}
          onChange={this.props.onChange}
          className={"AdForm_input"}
        />
        <br />
        <label className="DescriptionLabel" htmlFor="description">
          Description:
        </label>
        <br />
        <input
          name="description"
          value={this.props.adDetails ? this.props.values.description : undefined}
          onChange={this.props.onChange}
          className={"AdForm_textarea"}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <br />
        <input
          name="price"
          value={this.props.adDetails ? this.props.values.price : undefined}
          onChange={this.props.onChange}
          className={"AdForm_input"}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          name="email"
          value={this.props.adDetails ? this.props.values.email : undefined}
          onChange={this.props.onChange}
          className={"AdForm_input"}
        />
        <br />
        <label htmlFor="phone">Phone number:</label>
        <br />
        <input
          name="phone"
          value={this.props.adDetails ? this.props.values.phone : undefined}
          onChange={this.props.onChange}
          className={"AdForm_input"}
        />
        <br />
        <label htmlFor="picture">Picture url:</label>
        <br />
        <input
          name="picture"
          value={this.props.adDetails ? this.props.values.picture : undefined}
          onChange={this.props.onChange}
          className={"AdForm_input"}
        />
        <br />
        {this.props.adsList ? (
          <button type="submit" className={"AdForm_submitButton"}>
            Add
          </button>
        ) : (
          <button type="submit" className={"AdForm_submitButton"}>
            Edit
          </button>
        )}
      </form>
    );
  }
}
