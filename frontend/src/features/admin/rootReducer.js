import { combineReducers } from "@reduxjs/toolkit";

import rsvpReducer from "../rsvp/rsvpSlice";
import adminReducer from "../../features/admin/adminSlice";

console.log("ADMIN =", adminReducer);

const rootReducer = combineReducers({
  rsvp: rsvpReducer,
  admin: adminReducer,
});

export default rootReducer;
