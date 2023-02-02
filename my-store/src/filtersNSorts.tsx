import { IProduct } from "./interfaces";

export const functionsObject = {
  searchSort(prods: IProduct[], searchValue: string) {
    return prods.filter(
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
        item.title
          .trim()
          .toLowerCase()
          .includes(searchValue.trim().toLowerCase())
    );
  },
  sorts(prods: IProduct[], sortName: string) {
    const copyProds = [...prods];
    if (sortName == "price-asc") {
      copyProds.sort((a, b) => a.price - b.price);
    }
    if (sortName == "rating-asc") {
      copyProds.sort((a, b) => a.price - b.price);
    }
    if (sortName == "price-desc") {
      return copyProds.sort((a, b) => b.price - a.price);
    }
    if (sortName == "rating-desc") {
      copyProds.sort((a, b) => b.rating - a.rating);
    }
    return copyProds;
  },
};
