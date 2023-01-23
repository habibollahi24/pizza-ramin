import http from "./httpServer";

export const getProductsTab = () => {
  return http.get("/products/products-tabs");
};
