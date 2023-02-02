import { url } from "../index";
import qs from "qs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { RootState } from "../store";
import {
  addFiltered,
  addProducts,
  addSearchQuantity,
  addSearchValue,
} from "../store/productsSlice";
import { IProduct } from "../interfaces";
import Product from "../components/Product";
import Search from "../components/Search";
import Sorts from "../components/Sorts";
import Filters from "../components/Filters";
import { functionsObject } from "../filtersNSorts";
import { addSort } from "../store/filtersNSortsSlice";
import Loader from "../components/Loader";

function List() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data: IProduct[]) => {
        setLoading(false);
        dispatch(addProducts(data));
        if (window.location.search) {
          const params = qs.parse(window.location.search.substring(1));
          if (params.search && !params.sort) {
            dispatch(addFiltered(data));
            dispatch(addSearchValue(String(params.search)));
          }
          if (params.sort && !params.search) {
            dispatch(addFiltered(data));
            dispatch(addSort(String(params.sort)));
          }
          if (params.sort && params.search) {
            dispatch(addFiltered(data));
            dispatch(addSearchValue(String(params.search)));
            dispatch(addSort(String(params.sort)));
          }
          if (!params.sort || !params.search) {
            dispatch(addFiltered(data));
          }
        } else {
          dispatch(addFiltered(data));
        }
      });
  };

  let message = "";

  const sortedProds: IProduct[] = useSelector(
    (state: RootState) => state.products.sortedNFilteredProds
  );

  useEffect(() => {
    void fetchProducts();
    dispatch(addSearchQuantity(sortedProds.length));
  }, []);

  const copyProds: IProduct[] = JSON.parse(JSON.stringify(sortedProds));

  const sortName = useSelector(
    (state: RootState) => state.filtersNSorts.sortName
  );

  const searchValue: string = useSelector(
    (state: RootState) => state.products.searchValue
  );

  const filteredProds: IProduct[] = functionsObject.searchSort(
    functionsObject.sorts(copyProds, sortName),
    String(searchValue)
  );

  if (!filteredProds.length) {
    message = `Sorry... we can't find anything:(`;
    dispatch(addSearchQuantity(0));
  }
  return (
    <div>
      {loading && <Loader loading={true} />}
      <div className="container flex px-20 pt-10 flex-col">
        {!loading && <Search />}
        <div className="flex pt-5">
          <div className="w-[25%]">{!loading && <Filters />}</div>
          <div className="w-[75%]">
            {!loading && <Sorts />}
            {!loading && (
              <div className="w-[100%] grid grid-cols-4 pt-5 gap-10">
                {filteredProds.map((item) => {
                  dispatch(addSearchQuantity(filteredProds.length));
                  message = "";
                  return <Product {...item} key={item.id} />;
                })}
                {!loading && (
                  <span className="text-4xl block col-start-1 col-end-5 text-indigo-500 text-center mt-[30%]">
                    {message}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
