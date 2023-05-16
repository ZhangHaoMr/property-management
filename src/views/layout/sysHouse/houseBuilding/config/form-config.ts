const formConfig = {
  formProps: [
    {
      lable: "栋数名称",
      prop: "name"
    },
    {
      lable: "单元名称",
      prop: "type",
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
