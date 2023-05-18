const formConfig = {
  formProps: [
    {
      lable: "栋数名称",
      prop: "name",
      type: "input"
    },
    {
      lable: "栋数类型",
      prop: "type",
      type: "select",
      options: [
        {
          label: "普通房",
          value: "0"
        },
        {
          label: "电梯房",
          value: "1"
        }
      ]
    }
  ]
};

export { formConfig };
