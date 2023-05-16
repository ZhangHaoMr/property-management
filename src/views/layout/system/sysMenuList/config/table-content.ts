import { ref } from "vue";

const form = ref({});

const propList = ref([
  {
    label: "菜单名称",
    prop: "menuLabel",
    width: "200"
  },
  {
    label: "菜单类型",
    prop: "type",
    slotName: "menuType"
  },
  {
    label: "菜单图标",
    prop: "icon"
  },
  {
    label: "路由名称",
    prop: "name"
  },
  {
    label: "路由地址",
    prop: "path"
  },
  {
    label: "组件路径",
    prop: "url"
  },
  {
    label: "权限字段",
    prop: "menuCode"
  },
  {
    label: "操作",
    align: "center",
    slotName: "button",
    width: "350"
  }
]);

export { propList, form };
