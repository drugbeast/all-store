/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import { useCopyToClipboard } from "../hooks/useCopy";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { useDispatch } from "react-redux";
import { addSearchValue } from "../store/productsSlice";
import { addSort } from "../store/filtersNSortsSlice";

function CopyNReset() {
  const navigate = useNavigate();
  const [value, copy] = useCopyToClipboard();

  const dispatch = useDispatch();
  const handleReset = () => {
    console.log(value);
    const params = qs.stringify({});
    dispatch(addSearchValue(""));
    dispatch(addSort(""));
    navigate(`?${params}`);
    const inp: HTMLInputElement | null = document.getElementById(
      "searchInput"
    ) as HTMLInputElement;
    if (inp) {
      inp.value = "";
    }
  };
  return (
    <div className="flex justify-center items-center gap-6">
      <button
        className="outline outline-1 py-2 px-2.5 rounded-md bg-indigo-400 text-[#ffffff] shadow-md outline-none hover:shadow-4xl ease-in transition-shadow"
        onClick={handleReset}
      >
        Reset filters
      </button>
      <button
        className="outline outline-1 py-2 px-2.5 rounded-md bg-indigo-400 text-[#ffffff] shadow-md outline-none hover:shadow-4xl ease-in transition-shadow"
        onClick={() => copy(window.location.href)}
      >
        Copy link
      </button>
    </div>
  );
}

export default CopyNReset;
