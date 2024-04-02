import axios from "axios";

const BACKEND_URL = "";

export const apis = {
  checkApi: async (url) => {
    const response = await axios.post(`${BACKEND_URL}/CheckUrl/${url}`);
    return response;
  },
};
