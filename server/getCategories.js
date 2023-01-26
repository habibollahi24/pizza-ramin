import callApi from "./callApi";

export const getCategories = () => {
   return callApi().get("/categories");
};
