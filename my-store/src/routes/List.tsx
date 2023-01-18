import { url } from "../index";
import qs from "qs";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { RootState } from "../store";
import {
  addProducts,
  addSearchQuantity,
  setQueryString,
} from "../store/productsSlice";
import { IProduct } from "../interfaces";
import Product from "../components/Product";
import Search from "../components/Search";
import Sorts from "../components/Sorts";
import Filters from "../components/Filters";
import { SORTS, FILTERS } from "../filtersNSorts";

function List() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(addProducts(data)));
  };

  let message = "";
  const prods: IProduct[] = useSelector(
    (state: RootState) => state.products.products
  );
  const searchValue = useSelector(
    (state: RootState) => state.products.searchValue
  );

  useEffect(() => {
    void fetchProducts();
    dispatch(addSearchQuantity(prods.length));
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setQueryString(params.search));
    }
  }, []);

  const copyProds = prods;
  const filteredProds = copyProds.filter(
    (item) =>
      searchValue.trim() === "" ||
      item.brand
        .trim()
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase()) ||
      item.category
        .trim()
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase()) ||
      item.description
        .trim()
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase()) ||
      item.price === Number(searchValue) ||
      item.rating === Number(searchValue) ||
      item.stock === Number(searchValue) ||
      item.title.trim().toLowerCase().includes(searchValue.trim().toLowerCase())
  );

  if (!filteredProds.length) {
    message = `Sorry... we can't find anything:(`;
    dispatch(addSearchQuantity(0));
  }
  return (
    <div>
      <div className="container flex px-20 pt-10 flex-col">
        <Search />
        <div className="flex pt-5">
          <div className="w-[25%]">
            <Filters />
          </div>
          <div className="w-[75%]">
            <Sorts />
            <div className="w-[100%] grid grid-cols-4 pt-5 gap-10">
              {filteredProds.map((item) => {
                dispatch(addSearchQuantity(filteredProds.length));
                message = "";
                return <Product {...item} key={item.id} />;
              })}
              <span className="text-4xl block col-start-1 col-end-5 text-indigo-500 text-center mt-[30%]">
                {message}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
