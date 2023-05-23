<!-- 登录页面 -->
<template>
  <div class="login">
    <div class="login_box">
      <h2>梦学谷会员管理系统</h2>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleFormref"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleFormref')">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Login } from "@/api/layout";
import { FormInstance } from "element-plus/es/components/form";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const ruleFormref = ref<FormInstance>();

const ruleForm = ref({
  username: "",
  password: ""
});
const rules = {
  username: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }]
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      Login(ruleForm.value).then((res: any) => {
        router.push("/");
        localStorage.setItem("token", res.data.token);
      });
    } else {
      console.log("error submit!!");
      return false;
    }
  });
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  background: url("http://vue.mengxuegu.com/img/login.b665435f.jpg");
  background-size: 100% 100%;
  display: flex;
  .login_box {
    width: 400px;
    margin: auto;
    background-color: hsla(0, 0%, 100%, 0.8);
    padding: 28px;
    border-radius: 20px;
    h2 {
      text-align: center;
      font-size: 1.5em;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
  }
}
</style>
