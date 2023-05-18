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
    prop: "loginName",
    type: "input"
  },
  {
    label: "电话",
    prop: "phone",
    type: "input"
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
    label: "缴费金额",
    prop: "payWaterMoney",
    type: "input"
  },
  {
    label: "所属月份",
    prop: "payWaterMonth",
    type: "input"
  },
  {
    label: "表显",
    prop: "waterrNum",
    type: "input"
  },

  {
    label: "缴费状态",
    prop: "payWaterStatus",
    slotName: "payWaterStatus",
    type: "input"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "300"
  }
]);

export { propList, form };
