import { ref } from "vue";

const form = ref({
  buildNme: "",
  status: "",
  unitName: "",
  houseNum: "",
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
    label: "单元名称",
    prop: "unitName"
  },
  {
    label: "房屋编号",
    prop: "houseNum"
  },
  {
    label: "使用面积",
    prop: "houseArea"
  },
  {
    label: "使用状态",
    prop: "status",
    slotName: "statusName",
    options: [
      {
        lable: "未使用",
        value: "0"
      },
      {
        lable: "已使用",
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
