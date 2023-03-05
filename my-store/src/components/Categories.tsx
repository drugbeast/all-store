import React from "react";

type CategoriesType = {
  set: Set<string>;
  name: string;
  amount: number[];
};

function Categories(props: CategoriesType) {
  const { set, name, amount } = props;
  const array = Array.from(set);
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold text-indigo-400 italic">{name}</h1>
      <div className="categories">
        {array.map((item, index) => {
          return (
            <div className="flex justify-between px-2">
              <div>
                <input
                  type="checkbox"
                  name="checkbox-input"
                  className="mt-[7px] custom-checkbox"
                ></input>
                <label></label>
                <span className="ml-2 text-indigo-400 font-medium">{item}</span>
              </div>
              <span className="italic text-indigo-300">0/{amount[index]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
