import { ADS_FETCHED, AD_UPDATE_SUCCESS, ADD_AD } from "../actions/ads";

export default (state = null, { type, payload }) => {
  console.log("payload", payload);
  console.log("state", state);
  switch (type) {
    case ADS_FETCHED:
      return payload.reduce((ads, ad) => {
        ads[ad.id] = ad;
        return ads;
      }, {});

    case AD_UPDATE_SUCCESS:
      return payload.ad;

    case ADD_AD:
      return {
        ...state,
        [payload.id]: payload
      };

    default:
      return state;
  }
};
