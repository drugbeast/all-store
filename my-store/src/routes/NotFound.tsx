import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSearchValue } from "../store/productsSlice";

function NotFound() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addSearchValue(``));
    navigate("");
  };
  return (
    <div className="flex justify-center items-center flex-col pt-[15%]">
      <h1 className="text-indigo-400 text-6xl font-bold">404</h1>
      <h1 className="text-indigo-400 text-4xl font-medium">Page not found!</h1>
      <NavLink
        to="/"
        className="text-indigo-400 text-2xl font-normal pt-10 underline"
        onClick={handleClick}
      >
        Redirect to Main
      </NavLink>
    </div>
  );
}

export default NotFound;
