import { createAsyncThunk } from "@reduxjs/toolkit";
import * as rsvpService from "./services/rsvpService";

export const createInvitation = createAsyncThunk(
  "rsvp/createInvitation",
  async (payload, thunkAPI) => {
    try {
      const response = await rsvpService.createInvitation(payload);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Erreur serveur",
      );
    }
  },
);
