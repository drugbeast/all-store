import {createSlice} from '@reduxjs/toolkit'
import { IProduct } from '../interfaces'

const productSlice = createSlice({
  name: 'products',
  initialState:{
    products: [] as IProduct[]
  },
  reducers: {
    addProducts (state, action) {
      const prod: IProduct[] = action.payload
      state.products = prod
    }
  } 
})

export const {addProducts} = productSlice.actions

export default productSlice.reducer