import http from "./httpServer";

export const getMenu = () => {
  return http.get("/menu");
};
