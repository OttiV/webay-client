import { ADS_FETCHED, ADD_AD } from "../actions/ads";

export default (state = null, { type, payload }) => {
  switch (type) {
    case ADS_FETCHED:
      return payload.reduce((ads, ad) => {
        ads[ad.id] = ad;
        return ads;
      }, {});

    case ADD_AD:
      return {
        ...state,
        [payload.id]: payload
      };

    default:
      return state;
  }
};
