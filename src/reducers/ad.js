import { AD_FETCHED, AD_UPDATE_SUCCESS } from "../actions/ads";

export default (state = null, { type, payload }) => {
  switch (type) {
    case AD_FETCHED:
      return payload;

    case AD_UPDATE_SUCCESS:
      if (state.id === payload.id) {
        return payload;
      }

      return state;

    default:
      return state;
  }
};
