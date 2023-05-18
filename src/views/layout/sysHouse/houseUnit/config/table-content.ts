import { ref } from "vue";

// const showEdit = false;

const form = ref({
  name: "",
  unitName: "",
  currentPage: 1,
  pageSize: 10,
  total: 0
});

const propList = ref([
  {
    label: "栋数名称",
    prop: "name",
    type: "input"
  },
  {
    label: "单元名称",
    prop: "unitName",
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
