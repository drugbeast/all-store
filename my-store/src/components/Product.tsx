import React from "react";
import { IProduct } from "../interfaces";

interface productProps extends IProduct {
  key: string;
}

function Product(props: productProps) {
  const product: IProduct = props;
  return (
    <div className="flex flex-col w-[100%] cursor-pointer">
      <div className="outline-1 outline outline-indigo-400 h-[230px] rounded-md shadow-md overflow-hidden">
        <img
          src={product.thumbnail}
          alt="thumbnail"
          className="w-[100%] h-[100%]"
        ></img>
      </div>
      <h1 className="font-semibold text-[1.6rem] text-indigo-400 pt-2">
        {product.brand}
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="font-medium">{product.category}</p>
          <p className="text-[0.9rem]">Stock: {product.stock}</p>
        </div>
        <div className="flex items-center">
          <p className="font-bold text-[1.4rem] text-indigo-400">
            {product.price}$
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
