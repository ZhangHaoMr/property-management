<template>
  <div class="sysuserlist">
    <fo
      v-bind="formConfig"
      :formItem="form"
      @search="search"
      @Plus="Plus"
      ref="addData"
    >
    </fo>

    <tab ref="configTab" :propList="propList" :form="form" url="/user">
      <template #sex="scope">
        <el-tag :type="scope.row.sex == 1 ? '' : 'success'">
          {{ scope.row.sex == 1 ? "男" : "女" }}
        </el-tag>
      </template>
      <template #isAdmin="scope">
        <el-switch
          v-model="scope.row.isAdmin"
          active-text="是"
          inactive-text="否"
          active-value="0"
          inactive-value="1"
        />
      </template>
      <template #authorities="scope">
        <el-switch
          v-model="scope.row.authorities"
          active-text="是"
          inactive-text="否"
          active-value="0"
          inactive-value="1"
        />
      </template>
      <template #button="scope">
        <el-button type="primary" icon="EditPen" @click="Plus(scope.row)">
          编辑
        </el-button>
        <el-button type="success" icon="EditPen" @click="Plus(scope.row)">
          分配角色
        </el-button>
        <el-button type="danger" icon="Delete">删除</el-button>
      </template>
    </tab>

    <Dialog
      :modelConfig="modelConfig"
      :dialogVisible="dialogVisible"
      @close="Plus"
      @add="add"
      :formData="formData"
    />
  </div>
</template>

<script lang="ts" setup>
import { propList, form } from "./config/table-content";
import { formConfig } from "./config/form-config";
import { modelConfig } from "./config/model-confing";
import tab from "@/baseUI/table";
import fo from "@/baseUI/form";
import Dialog from "@/baseUI/Dialog";
import { ref } from "vue";

const configTab = ref();
const addData = ref();

const search = (e: any) => {
  // console.log(e);
  for (const key in e) {
    form.value[key] = e[key];
  }
  // console.log(form.value);
  configTab.value.getTableList(form.value);
};

const dialogVisible = ref(false);
const formData = ref({});
const Plus = (e?: any) => {
  // console.log("plus");
  console.log(e);
  formData.value = e;

  dialogVisible.value = !dialogVisible.value;
};

const add = () => {
  addData.value.add("/user");
  search({});
};
</script>

<style scoped></style>
