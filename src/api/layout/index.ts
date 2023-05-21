import { service } from "@/service";

// 获取 列表数据
export const getList = (url: string, data: any) => {
  return service.request({
    url: `${url}/list`,
    method: "GET",
    params: data
  });
};

// 添加 接口
export const addList = (url: string, data: any) => {
  return service.request({
    url: `${url}`,
    method: "POST",
    data
  });
};
