import { createSlice } from "@reduxjs/toolkit";

import informations from "../../Data/Informations";

const initialState = {
  data: JSON.parse(informations()),
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData(state, action) {
      state.data = [action.payload, ...state.data];
    },
  },
});

export const { updateData } = dataSlice.actions;

export default dataSlice.reducer;
