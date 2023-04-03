import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://web-dev.dev.kimo.ai/v1",
});

export default axios;
