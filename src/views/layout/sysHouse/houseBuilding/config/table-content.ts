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
    prop: "name",
    type: "input"
  },
  {
    label: "序号",
    prop: "buildId",
    type: "input"
  },
  {
    label: "栋数类型",
    prop: "type",
    slotName: "houseType",
    type: "select",
    options: [
      {
        lable: "普通房",
        value: "0"
      },
      {
        lable: "电梯房",
        value: "1"
      }
    ]
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "350"
  }
]);

export { propList, form };
