import { service } from "@/service";

export const getList = (url: string, data: any) => {
  return service.request({
    url: `${url}/list`,
    method: "GET",
    params: data
  });
};
