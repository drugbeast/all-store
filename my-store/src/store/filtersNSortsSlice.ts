import { createSlice } from "@reduxjs/toolkit";

const filtersNSorts = createSlice({
  name: "filtersNSorts",
  initialState: {
    sortName: "",
  },
  reducers: {
    addSort(state, action) {
      state.sortName = action.payload;
    },
  },
});

export const { addSort } = filtersNSorts.actions;

export default filtersNSorts.reducer;
