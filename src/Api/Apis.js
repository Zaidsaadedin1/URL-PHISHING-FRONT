import axios from "axios";

export const apis = {
  checkApi: async (url) => {
    const response = await axios.post(`http://127.0.0.1:5000/CheckUrl`, url);
    return response.data;
  },
};
