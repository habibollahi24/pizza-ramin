import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

export default http;
