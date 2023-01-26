import axios from "axios";

export class ValidationsErrorFields {
   constructor(errorMessages) {
      this.errorMessages = errorMessages;
   }
}

const callApi = () => {
   const axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
   });

   axiosInstance.interceptors.request.use(
      (config) => config,
      (err) => Promise.reject(err)
   );

   axiosInstance.interceptors.response.use(
      (res) => res,
      (err) => {
         //handle all 422 errors
         if (err.response.status === 422) {
            throw new ValidationsErrorFields(err.response.data.message);
         }
         return Promise.reject(err);
      }
   );

   return axiosInstance;
};

export default callApi;
