import { combineReducers } from "redux";
import ads from "./ads";
import ad from "./ad";
import currentUser from "./currentUser";
import users from "./users";
import login from "./login";
import signup from "./signup";

export default combineReducers({
  ads,
  ad,
  currentUser,
  login,
  signup,
  users
});
