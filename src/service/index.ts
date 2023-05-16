// import { BASE_URL, TIMEOUT } from "@/service/request/config";
import Request from "@/service/request";
// import LocalCache from "@/utils/cache";

export const service = new Request({
  baseURL: "/dev-api",
  timeout: 5000,
  interceptors: {
    requestInterceptor: (config) => {
      const token =
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJUeXBlIjoiMSIsImV4cCI6MTY4NDI0NDM1MywiaWF0IjoxNjg0MjQyNTUzNTE5fQ.X1Y3GhqgWaWOPOFJ7g8U_2P8-ScnmL7RglyHc-qQinj2Y4mxGjnlG80VCw924k_535wfkEqd9uLp1lqa5JRDPQ";
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
