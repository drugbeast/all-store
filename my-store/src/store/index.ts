import { configureStore } from "@reduxjs/toolkit";
import filtersNSortsReducer from "./filtersNSortsSlice";
import productReducer from "./productsSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    filtersNSorts: filtersNSortsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
