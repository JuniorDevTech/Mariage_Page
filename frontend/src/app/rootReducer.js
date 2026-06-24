import { combineReducers } from "@reduxjs/toolkit";

import rsvpReducer from "../features/rsvp/rsvpSlice";

const rootReducer = combineReducers({
  rsvp: rsvpReducer,
});

export default rootReducer;
