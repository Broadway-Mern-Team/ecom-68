import axios from "axios"
import { AppConfig } from "../config/AppConfig";

const axiosSvc = axios.create({
  baseURL: AppConfig.apiBaseUrl,
  // baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 60000,
  timeoutErrorMessage: "Server timed out...",
  responseEncoding: "utf-8",
  responseType: "json",
  headers: {
    "Content-Type": "application/json"      // application/json(default), application/x-www-form-urlencoded, multipart/form-data
  }
});



// request configure  => interceptors

// response configure => interceptors
  // success, 
    // data: <any>
    // { data: }
  // failure


export default axiosSvc