import http from "./httpServer";

export const contactusData = (data) => {
  return http.post("/contact-us", data);
};
