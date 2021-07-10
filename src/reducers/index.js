import { combineReducers } from "redux";
import userReducer from "./user";
import subtotalReducer from "./subtotal";

const allReducers = combineReducers({
  user: userReducer,
  subtotal: subtotalReducer,
});

export default allReducers;
