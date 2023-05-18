import { ref } from "vue";

const form = ref({
  parkName: "",
  parkStatus: "",
  parkType: "",
  currentPage: 1,
  pageSize: 10,
  total: 0
});

const propList = ref([
  {
    label: "车位名称",
    prop: "parkName",
    type: "input"
  },
  {
    label: "车位类型",
    prop: "parkType",
    type: "input"
  },
  {
    label: "使用状态",
    prop: "parkStatus",
    type: "input"
  },
  {
    label: "序号",
    prop: "parkNum",
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
