import Axios from "axios";

export const getService = (route) => {
  return Axios.get(`${route}`);
};
