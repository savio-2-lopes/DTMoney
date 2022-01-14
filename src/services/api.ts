import axios from "axios";

export const api = axios.create({
  baseURL: "https://dtmonie-frontend.netlify.app/api",
});
