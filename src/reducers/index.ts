import { combineReducers } from "redux";
import ticket from "./ticket";
import comment from "./comment";
import user from "./user";

export default combineReducers({ ticket, comment, user });
