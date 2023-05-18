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
    prop: "name",
    type: "input"
  },
  {
    label: "单元",
    prop: "unitName",
    type: "input"
  },
  {
    label: "房屋编号",
    prop: "houseNum",
    type: "input"
  },
  {
    label: "使用面积",
    prop: "houseArea",
    type: "input"
  },
  {
    label: "车位",
    prop: "parkName",
    type: "input"
  },
  {
    label: "是否启用",
    prop: "useStatus",
    slotName: "useStatus",
    type: "input"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "600"
  }
]);

export { propList, form };
