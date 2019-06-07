import React from "react";
import { loadAds, createAd } from "../../actions/ads";
import { connect } from "react-redux";
import AdsList from "./AdsList";
import AdForm from "./AdForm";

class AdsListContainer extends React.Component {
  state = { editMode: false, adsList: true };

  componentDidMount() {
    this.props.loadAds();
  }

  editMode = () => {
    this.setState({
      editMode: true
    });
  };

  onChange = event => {
    // update the formValues property with the new data from the input field
    this.setState({
      ...this.state,
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      editMode: false
    });
    this.props.createAd(this.state.formValues);
  };

  render() {
    return (
      <>
        {this.props.ads && <AdsList ads={this.props.ads} />}
        {!this.state.editMode && <button onClick={this.editMode}>Add Ad</button>}
        {this.state.editMode && (
          <AdForm
            adsList={this.state.adsList}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            formValues={this.state.formValues}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  ads: state.ads === null ? null : Object.values(state.ads).sort((a, b) => b.id - a.id)
  // ads: state.ads
});

export default connect(
  mapStateToProps,
  { loadAds, createAd }
)(AdsListContainer);
