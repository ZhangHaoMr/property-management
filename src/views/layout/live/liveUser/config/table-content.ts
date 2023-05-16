import { ref } from "vue";

const form = ref({
  loginName: "",
  phone: "",
  currentPage: 1,
  pageSize: 10,
  total: 0
});

const propList = ref([
  {
    label: "姓名",
    prop: "loginName"
  },
  {
    label: "性别",
    prop: "sex",
    slotName: "liveSex"
  },
  {
    label: "电话",
    prop: "phone"
  },
  {
    label: "栋数",
    prop: "name"
  },
  {
    label: "单元",
    prop: "unitName"
  },
  {
    label: "房屋编号",
    prop: "houseNum"
  },
  {
    label: "使用面积",
    prop: "houseArea"
  },
  {
    label: "车位",
    prop: "parkName"
  },
  {
    label: "是否启用",
    prop: "useStatus",
    slotName: "useStatus"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "600"
  }
]);

export { propList, form };
