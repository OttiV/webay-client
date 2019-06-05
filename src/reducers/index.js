import { combineReducers } from "redux";
import ads from "./ads";
import ad from "./ad";
import users from "./users";
import login from "./login";
import signup from "./signup";

export default combineReducers({
  ads,
  ad,
  login,
  signup,
  users
});
