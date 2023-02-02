import React from "react";
import "./Filters.css";
import DoubleSlider from "./DoubleSlider";
import Categories from "./Categories";
import CopyNReset from "./CopyNReset";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IProduct } from "../interfaces";

function countAmount(set: Set<string>, products: IProduct[], checker: string) {
  const categoriesAmounts: number[] = [];
  const countArr = Array.from(set);

  countArr.map((item) => {
    let c = 0;
    const check = item;
    products.map((inner) => {
      const myArr = Object.entries(inner).flat( )
      const index = myArr.indexOf(checker)
      if (myArr[index + 1] == check) c++;
    });
    categoriesAmounts.push(c);
  });

  return categoriesAmounts;
}

function Filters() {
  const prods = useSelector((state: RootState) => state.products.products);

  const minStock = prods.reduce((acc, curr) =>
    acc.stock < curr.stock ? acc : curr
  );
  const maxStock = prods.reduce((acc, curr) =>
    acc.stock > curr.stock ? acc : curr
  );
  const maxPrice = prods.reduce((acc, curr) =>
    acc.price > curr.price ? acc : curr
  );
  const minPrice = prods.reduce((acc, curr) =>
    acc.price < curr.price ? acc : curr
  );

  const categories = new Set<string>();
  const brands = new Set<string>();

  for (const item of prods) {
    if (!categories.has(item.category)) categories.add(item.category);
    if (!brands.has(item.brand)) brands.add(item.brand);
  }

  const brandsAmounts: number[] = countAmount(brands, prods, "brand");
  const categoriesAmounts: number[] = countAmount(categories, prods, "category");

  return (
    <div className="flex flex-col pr-8">
      <CopyNReset />
      <DoubleSlider
        propsMin={minPrice.price}
        propsMax={maxPrice.price}
        name={"Price"}
      />
      <Categories
        set={categories}
        name={"Category"}
        amount={categoriesAmounts}
      />
      <Categories set={brands} name={"Brand"} amount={brandsAmounts} />
      <DoubleSlider
        propsMin={minStock.stock}
        propsMax={maxStock.stock}
        name={"Stock"}
      />
    </div>
  );
}

export default Filters;
