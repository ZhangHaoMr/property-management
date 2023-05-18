import { ref } from "vue";

const form = ref({
  roleName: "",
  currentPage: 1,
  pageSize: 10,
  total: 0
});

const propList = ref([
  {
    label: "角色名称",
    prop: "roleName",
    type: "input"
  },
  {
    label: "备注",
    prop: "remark",
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
