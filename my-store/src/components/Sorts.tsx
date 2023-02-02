import React from "react";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { addSort } from "../store/filtersNSortsSlice";

function Sorts() {
  const sorts = [
    "initial-sort",
    "price-asc",
    "price-desc",
    "rating-asc",
    "rating-desc",
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quantity = useSelector(
    (state: RootState) => state.products.searchQuantity
  );
  const searchValue = useSelector(
    (state: RootState) => state.products.searchValue
  );

  let sortName = "";
  const params = qs.parse(window.location.search.substring(1));
  sortName = params.sort ? String(params.sort) : "";
  const handleChooseSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (
      event.currentTarget.options[
        event.currentTarget.selectedIndex
      ].value.toLowerCase() == "price-desc"
    ) {
      dispatch(addSort("price-desc"));
      sortName = "price-desc";
    }

    if (
      event.currentTarget.options[
        event.currentTarget.selectedIndex
      ].value.toLowerCase() == "price-asc"
    ) {
      dispatch(addSort("price-asc"));
      sortName = "price-asc";
    }

    if (
      event.currentTarget.options[
        event.currentTarget.selectedIndex
      ].value.toLowerCase() == "rating-asc"
    ) {
      dispatch(addSort("rating-asc"));
      sortName = "rating-asc";
    }

    if (
      event.currentTarget.options[
        event.currentTarget.selectedIndex
      ].value.toLowerCase() == "rating-desc"
    ) {
      dispatch(addSort("rating-desc"));
      sortName = "rating-desc";
    }

    if (
      event.currentTarget.options[
        event.currentTarget.selectedIndex
      ].value.toLowerCase() == "initial-sort"
    ) {
      dispatch(addSort("initial-sort"));
      sortName = "initial-sort";
    }

    if (searchValue && sortName) {
      const params = qs.stringify({
        sort: sortName,
        search: searchValue,
      });
      navigate(`?${params}`);
    }
    if (!searchValue && sortName) {
      const params = qs.stringify({
        sort: sortName,
      });
      navigate(`?${params}`);
    }
    if (searchValue && !sortName) {
      const params = qs.stringify({
        search: searchValue,
      });
      navigate(`?${params}`);
    }
  };

  return (
    <div className="w-[100%] flex justify-between">
      <div>
        <select
          onChange={handleChooseSort}
          name="sorts-select"
          className="outline-none border border-indigo-400 text-indigo-500 text-sm rounded-md focus:bg-[#ffffff] focus:border-indigo-400 block w-full p-2.5 cursor-pointer"
        >
          <option value={sorts[0]} selected={sortName == sorts[0]}>
            Sort By...
          </option>
          <option value={sorts[1]} selected={sortName == sorts[1]}>
            By Price (increasing)
          </option>
          <option value={sorts[2]} selected={sortName == sorts[2]}>
            By Price (decreasing)
          </option>
          <option value={sorts[3]} selected={sortName == sorts[3]}>
            By Rating (increasing)
          </option>
          <option value={sorts[4]} selected={sortName == sorts[4]}>
            By Rating (decreasing)
          </option>
        </select>
      </div>
      <div className="flex items-center text-indigo-400 font-semibold">
        Found {quantity} products
      </div>
      <div className="flex items-center cursor-pointer">
        <div className="border py-1.5 px-1.5 rounded-tl-md rounded-bl-md border-indigo-400">
          <div className="grid grid-cols-2 grid-rows-2 gap-1">
            <div className="border border-indigo-400 p-[4px] rounded-sm bg-indigo-400"></div>
            <div className="border border-indigo-400 p-[4px] rounded-sm bg-indigo-400"></div>
            <div className="border border-indigo-400 p-[4px] rounded-sm bg-indigo-400"></div>
            <div className="border border-indigo-400 p-[4px] rounded-sm bg-indigo-400"></div>
          </div>
        </div>
        <div className="border py-1.5 px-1.5 rounded-tr-md rounded-br-md  border-indigo-400">
          <div className="flex flex-col gap-[4px] py-[1.5px]">
            <div className="bg-indigo-400 h-[1px] w-[80%] px-[13px] py-[2px] rounded-sm"></div>
            <div className="bg-indigo-400 h-[1px] w-[80%] px-[13px] py-[2px] rounded-sm"></div>
            <div className="bg-indigo-400 h-[1px] w-[80%] px-[13px] py-[2px] rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sorts;
