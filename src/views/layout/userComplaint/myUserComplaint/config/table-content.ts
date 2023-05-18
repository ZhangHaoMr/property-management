import { ref } from "vue";

const form = ref({
  loginName: "",
  phone: "",
  curentPage: 1,
  pageSize: 10,
  total: 0
});

const propList = ref([
  {
    label: "姓名",
    prop: "loginName",
    type: "input"
  },
  {
    label: "电话",
    prop: "phone",
    type: "input"
  },
  {
    label: "身份证",
    prop: "idCard",
    type: "input"
  },
  {
    label: "性别",
    prop: "sex",
    align: "center",
    slotName: "sex",
    type: "input"
  },
  {
    label: "是否离职",
    prop: "isAdmin",
    align: "center",
    slotName: "isAdmin",
    type: "input"
  },
  {
    label: "是否启用",
    prop: "authorities",
    align: "center",
    slotName: "authorities",
    type: "input"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "350"
  }
]);

export { propList, form };
