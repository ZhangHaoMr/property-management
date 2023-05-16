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
    prop: "roleName"
  },
  {
    label: "备注",
    prop: "remark"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "350"
  }
]);

export { propList, form };
