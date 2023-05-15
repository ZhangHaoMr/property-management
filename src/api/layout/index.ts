import { service } from "@/service";

export const getList = (data: any) =>
  service.get({
    url: "/list?loginName=&phone=&curentPage=1&pageSize=10&total=0"
  });
