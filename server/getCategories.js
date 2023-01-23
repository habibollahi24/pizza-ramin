import http from "./httpServer";

export const getCategories = () => {
  return http.get("/categories");
};
