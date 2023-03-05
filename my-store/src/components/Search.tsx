import React from "react";
import qs from "qs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchValue } from "../store/productsSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";

function Search () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = qs.parse(window.location.search.substring(1));
  const searchValue = useSelector(
    (state: RootState) => state.products.searchValue
  );
  const [value, setValue] = useState(
    params.search ? String(params.search) : searchValue
  );
  const sortName = useSelector(
    (state: RootState) => state.filtersNSorts.sortName
  );

  const handleSetValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleClick = () => {
    dispatch(addSearchValue(value));
    if (value !== "" && !sortName) {
      const params = qs.stringify({
        search: value,
      });
      navigate(`?${params}`);
    } else if (value !== "" && sortName !== "") {
      const params = qs.stringify({
        search: value,
        sort: sortName,
      });
      navigate(`?${params}`);
    } else if (!value && sortName !== "") {
      const params = qs.stringify({
        sort: sortName,
      });
      navigate(`?${params}`);
    } else {
      navigate(``);
    }
  };
  return (
    <div className="w-[100%]">
      <input
        type="text"
        placeholder="Please, write something..."
        className="w-[90%] outline outline-[1.5px] rounded-md p-1.5 outline-indigo-400 shadow-md pl-4"
        onChange={handleSetValue}
        id="searchInput"
      />
      <button
        type="submit"
        className="outline outline-1 w-[9%] ml-2 p-1.5 rounded-md bg-indigo-400 text-[#ffffff] shadow-md outline-none hover:shadow-3xl ease-in transition-shadow"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
