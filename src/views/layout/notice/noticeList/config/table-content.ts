import { ref } from "vue";

const form = ref({
  title: "",
  currentPage: 1,
  pageSize: 10,
  total: 0
});

const propList = ref([
  {
    label: "标题",
    prop: "title",
    type: "input"
  },
  {
    label: "内容",
    prop: "noticeContent",
    type: "input"
  },
  {
    label: "时间",
    prop: "createTime",
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
