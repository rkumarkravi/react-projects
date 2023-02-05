import axios from "axios";
import { setErrorMsg, setLoading } from "../redux-conf/slices/generalSlice";
import { store } from './../redux-conf/store';
import { urls } from './../consts/consts';

const axiosInstance = axios.create({
  baseURL: `${urls.BASE_URL}`,
});
axiosInstance.interceptors.request.use((config) => {
  store.dispatch(setLoading(true));
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch(setLoading(false));
    return response;
  },
  (error) => {
    store.dispatch(setLoading(false));
    store.dispatch(setErrorMsg({message:error.message,severity:'error'}));
    return Promise.reject(error);
  }
);

export { axiosInstance as axios };

//`album/getTacks/${aid}`
