// import { BASE_URL, TIMEOUT } from "@/service/request/config";
import Request from "@/service/request";
// import LocalCache from "@/utils/cache";

export const service = new Request({
  baseURL: "",
  timeout: 5000,
  interceptors: {
    requestInterceptor: (config) => {
      const token =
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5YW5nbXIiLCJ1c2VyVHlwZSI6IjEiLCJleHAiOjE2ODQxNjAyNzAsImlhdCI6MTY4NDE1ODQ3MDU3OX0.tcMDYON587tT7Dm7tGXsWmpUZSnBbSDAw4s9JjUxLbw9OCffxrM-J29xH8V3-5dvnGi7OM9-_gJbcFwh_oOhxg";
      // console.log("token", token);

      // console.log("局部请求成功拦截器");
      if (token) config.headers.token = token;
      return config;
    },
    requestInterceptorCatch: (error) => {
      // console.log("局部请求失败拦截器");
      return error;
    },
    responseInterceptor: (config) => {
      // console.log("局部响应成功拦截器");
      return config;
    },
    responseInterceptorCatch: (error) => {
      // console.log("局部响应失败拦截器");
      return error;
    }
  }
});
