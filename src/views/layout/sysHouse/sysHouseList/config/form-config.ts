const formConfig = {
  formProps: [
    {
      lable: "栋数名称",
      prop: "name",
      placeholder: "请输入栋数名称"
    },
    {
      lable: "单元名称",
      prop: "unitName",
      placeholder: "请输入单元名称"
    },
    {
      lable: "房屋编号",
      prop: "unitName",
      placeholder: "请输入房屋编号"
    },
    {
      lable: "使用状态",
      prop: "unitName",
      placeholder: "请选择",
      type: "select",
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
