const formConfig = {
  formProps: [
    {
      lable: "车位名称",
      prop: "parkName",
      placeholder: ""
    },
    {
      lable: "车位类型",
      prop: "parkType",
      placeholder: "请选择",
      options: [
        {
          label: "地上",
          value: "1"
        },
        {
          label: "地下",
          value: "0"
        }
      ]
    },
    {
      lable: "使用状态",
      prop: "parkStatus",
      placeholder: "请选择",
      options: [
        {
          label: "未使用",
          value: "0"
        },
        {
          label: "已使用",
          value: "1"
        }
      ]
    }
  ]
};

export { formConfig };
