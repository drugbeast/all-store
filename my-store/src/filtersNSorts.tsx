import React from "react";

export const FILTERS = ["price", "category", "brand", "stock"];
export const SORTS = ["price-asc", "price-desc", "rating-asc", "rating-desc"];

export const functionsObject = {
  ASC: function priceASCSort (a: number, b: number) {
    return a - b
  },
  DESC: function priceDESCSort (a: number, b: number) {
    return b - a
  }
}