import { configureStore } from "@reduxjs/toolkit";

import rsvpReducer from "../features/rsvp/rsvpSlice";
import adminReducer from "../features/admin/adminSlice";

console.log("RSVP REDUCER", rsvpReducer);
console.log("ADMIN REDUCER", adminReducer);

export const store = configureStore({
  reducer: {
    rsvp: rsvpReducer,
    admin: adminReducer,
  },
});

console.log("STORE", store.getState());
