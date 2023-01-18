import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [] as IProduct[],
    searchValue: "",
    searchQuantity: 0,
  },
  reducers: {
    addProducts(state, action) {
      const prod: IProduct[] = action.payload;
      state.products = prod;
    },
    addSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    addSearchQuantity(state, action) {
      state.searchQuantity = action.payload;
    },
    setQueryString(state, action) {
      console.log(action.payload);
      state.searchValue = action.payload;
    },
  },
});

export const {
  addProducts,
  addSearchValue,
  addSearchQuantity,
  setQueryString,
} = productSlice.actions;

export default productSlice.reducer;
