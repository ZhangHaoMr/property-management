const modelConfig = {
  formProps: [
    {
      lable: "姓名",
      prop: "loginName"
    },
    {
      lable: "性别",
      prop: "sex",
      type: "radio",
      options: [
        {
          lable: "男",
          value: "1"
        },
        {
          lable: "女",
          value: "0"
        }
      ]
    },
    {
      lable: "电话",
      prop: "phone"
    },
    {
      lable: "身份证",
      prop: "idCard"
    },
    {
      lable: "登录名",
      prop: "username"
    },
    {
      lable: "密码",
      prop: "password"
    },
    {
      lable: "离职",
      prop: "isAdmin",
      type: "radio",
      options: [
        {
          lable: "是",
          value: "0"
        },
        {
          lable: "否",
          value: "1"
        }
      ]
    },
    {
      lable: "启用",
      prop: "authorities",
      type: "radio",
      options: [
        {
          lable: "否",
          value: "1"
        },
        {
          lable: "是",
          value: "0"
        }
      ]
    }
  ],
  align: "center",
  deleteIcon: "Delete"
};

export { modelConfig };
