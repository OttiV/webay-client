import request from "superagent";
import { baseUrl } from "../constants";

export const ADS_FETCHED = "ADS_FETCHED";
export const ADD_AD = "ADD_AD";
// export const AD_CREATE_SUCCESS = "AD_CREATE_SUCCESS";
// export const AD_DELETE_SUCCESS = "AD_DELETE_SUCCESS";
export const AD_FETCHED = "AD_FETCHED";
export const AD_UPDATE_SUCCESS = "AD_UPDATE_SUCCESS";

const adsFetched = ads => ({
  type: ADS_FETCHED,
  payload: ads
});

const addAd = ad => ({
  type: ADD_AD,
  payload: ad
});

export const loadAds = () => dispatch => {
  request(`${baseUrl}/ads`)
    .then(response => {
      dispatch(adsFetched(response.body));
    })
    .catch(console.error);
};

export const adFetched = ad => ({
  type: AD_FETCHED,
  payload: ad
});

export const loadAd = id => dispatch => {
  request
    .get(`${baseUrl}/ads/${id}`)
    .then(response => {
      console.log(response.body);
      dispatch(adFetched(response.body));
    })
    .catch(console.error);
};
export const adUpdateSuccess = ad => ({
  type: AD_UPDATE_SUCCESS,
  payload: ad
});

export const updateAd = (id, formValues) => dispatch => {
  console.log(id, formValues);
  const newAd = formValues;
  newAd.id = id;

  request
    .put(`${baseUrl}/ads/${id}`)
    .send(newAd)
    .then(() => {
      dispatch(adUpdateSuccess(newAd));
    })
    .catch(console.error);
};

export const createAd = data => (dispatch, getState) => {
  // const state = getState();
  // const jwt = state.currentUser.jwt;

  // if (isExpired(jwt)) return dispatch(logout());

  request
    .post(`${baseUrl}/ads`)
    // .set("Authorization", `Bearer ${jwt}`)
    .send(data)
    .then(result => {
      dispatch(addAd(result.body));
    })
    .catch(err => console.error(err));
};
