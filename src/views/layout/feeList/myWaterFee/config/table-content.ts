import { ref } from "vue";

const form = ref({
  userName: "",
  houseNum: "",
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
    label: "缴费金额",
    prop: "payWaterMoney"
  },
  {
    label: "所属月份",
    prop: "payWaterMonth"
  },
  {
    label: "表显",
    prop: "waterrNum"
  },

  {
    label: "缴费状态",
    prop: "payWaterStatus",
    slotName: "payWaterStatus"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "300"
  }
]);

export { propList, form };
