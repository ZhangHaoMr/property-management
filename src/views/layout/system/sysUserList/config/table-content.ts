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
    prop: "loginName"
  },
  {
    label: "电话",
    prop: "phone"
  },
  {
    label: "身份证",
    prop: "idCard"
  },
  {
    label: "性别",
    prop: "sex",
    align: "center",
    slotName: "sex"
  },
  {
    label: "是否离职",
    prop: "isAdmin",
    align: "center",
    slotName: "isAdmin",
    type: "select"
  },
  {
    label: "是否启用",
    prop: "authorities",
    align: "center",
    slotName: "authorities",
    type: "select"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "350"
  }
]);

export { propList, form };
