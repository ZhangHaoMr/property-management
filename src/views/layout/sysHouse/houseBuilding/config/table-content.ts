import { ref } from "vue";

const form = ref({
  name: "",
  type: "",
  currentPage: 1,
  pageSize: 10,
  total: 0
});

const propList = ref([
  {
    label: "栋数名称",
    prop: "name"
  },
  {
    label: "序号",
    prop: "buildId"
  },
  {
    label: "栋数类型",
    prop: "type",
    slotName: "houseType"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "350"
  }
]);

export { propList, form };
