import axios from "axios";
import config from "./config.json";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : `${config.baseUrl}/api`,
  withCredentials: true
});

const errHandler = err => {
  // console.error(err);

  if (err.response && err.response.data) {
    // console.error("API response", err.response.data);
    throw err.response.data.message;
  }
  throw err;
};

export default {
  signup(inputData) {
    const formData = new FormData();
    formData.append("firstName", inputData.firstName);
    formData.append("lastName", inputData.lastName);
    formData.append("email", inputData.email);
    formData.append("about", inputData.about);
    formData.append("password", inputData.password);
    formData.append("avatarUrl", inputData.avatarUrl);
    return service
      .post(`${config.baseUrl}/api/signup`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => {
        return res.data;
      })
      .catch(errHandler);
  }
};
