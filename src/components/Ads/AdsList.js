import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AdsList.css";

export default class AdsList extends Component {
  renderAd(ad) {
    return (
      <li className="Ads" key={ad.id}>
        <Link to={`/ads/${encodeURIComponent(ad.id)}`}>
          <img className="images" src={ad.picture} alt={ad.description} />
          {ad.title}
          <br /> <i>$ {ad.price}</i> <br />
        </Link>
      </li>
    );
  }

  render() {
    const { ads } = this.props;

    return (
      <div className="AdsList">
        {!ads && "Loading..."}

        {ads && <ul>{ads.map(ad => this.renderAd(ad))}</ul>}
      </div>
    );
  }
}
