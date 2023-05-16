<template>
  <div class="sysuserlist">
    <fo v-bind="formConfig" :formItem="form"> </fo>

    <tab :propList="propList" :form="form" url="/user">
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
      <template #button>
        <el-button type="primary" icon="EditPen">编辑</el-button>
        <el-button type="success" icon="EditPen">分配角色</el-button>
        <el-button type="danger" icon="Delete">删除</el-button>
      </template>
    </tab>
  </div>
</template>

<script lang="ts" setup>
import { propList, form } from "./config/table-content";
import { formConfig } from "./config/form-config";
import tab from "@/baseUI/table";
import fo from "@/baseUI/form";
</script>

<style scoped></style>
