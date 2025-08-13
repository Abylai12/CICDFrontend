import axios from "axios";
import { apiURL } from "./api-url";

export const axiosInstance = axios.create({
  baseURL: `${apiURL}`,
});
