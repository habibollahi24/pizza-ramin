import callApi from "./callApi";

export const contactusData = (data) => {
   return callApi().post("/contact-us", data);
};
