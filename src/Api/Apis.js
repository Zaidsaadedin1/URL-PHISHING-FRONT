import axios from "axios";

const BACKEND_URL = "http://127.0.0.1:5000";

export const apis = {
  checkApi: async (url) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/CheckUrl`, { url });
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
};
