import callApi from "./callApi";

export const getProductsTab = () => {
   return callApi().get("/products/products-tabs");
};
