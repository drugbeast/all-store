import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [] as IProduct[],
    sortedNFilteredProds: [] as IProduct[],
    searchValue: "",
    searchQuantity: 0,
  },
  reducers: {
    addProducts(state, action) {
      const prod: IProduct[] = action.payload;
      state.products = prod;
    },
    addFiltered(state, action) {
      const prod: IProduct[] = action.payload;
      state.sortedNFilteredProds = prod;
    },
    addSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    addSearchQuantity(state, action) {
      state.searchQuantity = action.payload;
    },
    setQueryString(state, action) {
      const str: string = action.payload;
      state.searchValue = str;
    },
  },
});

export const {
  addProducts,
  addFiltered,
  addSearchValue,
  addSearchQuantity,
  setQueryString
} = productSlice.actions;

export default productSlice.reducer;
