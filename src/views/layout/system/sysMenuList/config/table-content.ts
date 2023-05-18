import { ref } from "vue";

const form = ref({});

const propList = ref([
  {
    label: "菜单名称",
    prop: "menuLabel",
    width: "200",
    type: "input"
  },
  {
    label: "菜单类型",
    prop: "type",
    slotName: "menuType",
    type: "select"
  },
  {
    label: "菜单图标",
    prop: "icon",
    type: "input"
  },
  {
    label: "路由名称",
    prop: "name",
    type: "input"
  },
  {
    label: "路由地址",
    prop: "path",
    type: "input"
  },
  {
    label: "组件路径",
    prop: "url",
    type: "input"
  },
  {
    label: "权限字段",
    prop: "menuCode",
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
