import callApi from "./callApi";

export const getMenu = (resolvedUrl) => {
   return callApi().get(resolvedUrl);
};
