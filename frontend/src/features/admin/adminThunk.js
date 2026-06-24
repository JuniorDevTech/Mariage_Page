import { createAsyncThunk } from "@reduxjs/toolkit";

import * as adminService from "./services/adminService";

export const loginAdmin = createAsyncThunk(
  "admin/login",
  async (payload, thunkAPI) => {
    try {
      console.log("LOGIN PAYLOAD", payload);

      const response = await adminService.login(payload);

      console.log("LOGIN RESPONSE", response);

      return response;
    } catch (error) {
      console.log("LOGIN ERROR", error);
      console.log("LOGIN ERROR RESPONSE", error.response?.data);

      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Erreur de connexion",
      );
    }
  },
);

export const fetchStats = createAsyncThunk(
  "admin/fetchStats",
  async (_, thunkAPI) => {
    try {
      return await adminService.getStats();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  },
);

export const fetchInvitations = createAsyncThunk(
  "admin/fetchInvitations",
  async (_, thunkAPI) => {
    try {
      return await adminService.getInvitations();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  },
);
