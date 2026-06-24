import { createSlice } from "@reduxjs/toolkit";
import { createInvitation } from "./rsvpThunk";

const initialState = {
  loading: false,
  success: false,
  error: null,
  invitation: null,
};

const rsvpSlice = createSlice({
  name: "rsvp",

  initialState,

  reducers: {
    resetRSVPState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.invitation = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(createInvitation.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })

      .addCase(createInvitation.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;

        state.invitation = action.payload?.data || null;
      })

      .addCase(createInvitation.rejected, (state, action) => {
        state.loading = false;
        state.success = false;

        state.error = action.payload || "Une erreur est survenue";
      });
  },
});

export const { resetRSVPState } = rsvpSlice.actions;

export default rsvpSlice.reducer;
