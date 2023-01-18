import { createSlice } from "@reduxjs/toolkit";

const filtersNSorts = createSlice({
  name: "filtersNSorts",
  initialState: {
    Sort: {},
  },
  reducers: {
    addSort(state, action) {
      console.log(state);
      console.log(action);
    },
  },
});

export const { addSort } = filtersNSorts.actions;

export default filtersNSorts.reducer;
