// import { BASE_URL, TIMEOUT } from "@/service/request/config";
import Request from "@/service/request";
// import LocalCache from "@/utils/cache";

export const service = new Request({
  baseURL: "/dev-api",
  timeout: 5000,
  interceptors: {
    requestInterceptor: (config) => {
      const token =
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJUeXBlIjoiMSIsImV4cCI6MTY4NDI4OTg0NCwiaWF0IjoxNjg0Mjg4MDQ0MjI2fQ.OObbOpsxJR9oR4FEPQZjaZ5E_lzIqNxr0obzJNR22u0o2qBvjjVEdi0BX7T3NxKaj3TASn9b4pxa_20l7JbO-g";
      // console.log("token", token);

      // console.log("局部请求成功拦截器");
      if (token) config.headers.Token = token;
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
