import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    countryCode: "",
  },
  reducers: {
    countryCode: (state, { payload }) => ({ ...state, countryCode: payload }),
  },
});

export const { countryCode } = userSlice.actions;
