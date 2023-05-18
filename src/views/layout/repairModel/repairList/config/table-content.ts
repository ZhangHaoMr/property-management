import { ref } from "vue";

const form = ref({
  userId: "",
  repairContent: "",
  currentPage: 1,
  pageSize: 10,
  total: 0
});

const propList = ref([
  {
    label: "报修内容",
    prop: "repairContent",
    type: "input"
  },
  {
    label: "报修地址",
    prop: "repairAddress",
    type: "input"
  },
  {
    label: "联系电话",
    prop: "phone",
    type: "input"
  },
  {
    label: "处理状态",
    prop: "status",
    slotName: "comStatus",
    type: "select"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "300"
  }
]);

export { propList, form };
