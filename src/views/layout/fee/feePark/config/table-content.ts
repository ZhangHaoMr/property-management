import { ref } from "vue";

const form = ref({
  userName: "",
  parkName: "",
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
    label: "电话",
    prop: "phone"
  },
  {
    label: "车位",
    prop: "parkName"
  },
  {
    label: "车位类型",
    prop: "parkType",
    slotName: "parkType"
  },
  {
    label: "所属月份",
    prop: "payParkMonth"
  },
  {
    label: "缴费金额",
    prop: "payParkMoney"
  },
  {
    label: "缴费状态",
    prop: "payParkStatus",
    slotName: "payParkStatus"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "300"
  }
]);

export { propList, form };
