import { createSlice } from "@reduxjs/toolkit";

import { fetchStats, fetchInvitations, loginAdmin } from "./adminThunk";

const initialState = {
  stats: {},
  invitations: [],
  loading: false,
  error: null,

  token: localStorage.getItem("adminToken") || null,

  isAuthenticated: !!localStorage.getItem("adminToken"),
};

const adminSlice = createSlice({
  name: "admin",

  initialState,

  reducers: {
    logout: (state) => {
      localStorage.removeItem("adminToken");

      state.token = null;

      state.isAuthenticated = false;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchStats.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload.data;
      })

      .addCase(fetchInvitations.fulfilled, (state, action) => {
        state.invitations = action.payload.data;
      })

      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.token = action.payload.token;
        state.isAuthenticated = true;

        localStorage.setItem("adminToken", action.payload.token);
      })

      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      .addCase(fetchStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminSlice.reducer;
export const { logout } = adminSlice.actions;
