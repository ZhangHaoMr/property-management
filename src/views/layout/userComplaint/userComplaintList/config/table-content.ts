import { ref } from "vue";

const form = ref({
  title: "",
  complaintContent: "",
  currentPage: 1,
  pageSize: 10,
  total: 0
});

const propList = ref([
  {
    label: "标题",
    prop: "title"
  },
  {
    label: "内容",
    prop: "complaintContent"
  },
  {
    label: "处理状态",
    prop: "status",
    slotName: "comStatus"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "300"
  }
]);

export { propList, form };
