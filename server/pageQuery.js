import callApi from "./callApi";

export const pageQuery = (query) => {
   return callApi().get(`/menu?${query}`);
};
