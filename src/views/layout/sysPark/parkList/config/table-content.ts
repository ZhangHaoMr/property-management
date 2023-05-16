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
    prop: "parkName"
  },
  {
    label: "车位类型",
    prop: "parkType",
    slotName: "parkType"
  },
  {
    label: "使用状态",
    prop: "parkStatus",
    slotName: "parkStatus"
  },
  {
    label: "序号",
    prop: "parkNum"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "350"
  }
]);

export { propList, form };
