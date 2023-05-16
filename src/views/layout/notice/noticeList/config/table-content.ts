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
    prop: "title"
  },
  {
    label: "内容",
    prop: "noticeContent"
  },
  {
    label: "时间",
    prop: "createTime"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "350"
  }
]);

export { propList, form };
