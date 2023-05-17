<template>
  <div class="sysrolelist">
    <fo v-bind="formConfig" :formItem="form"> </fo>

    <tab :propList="propList" :form="form" url="/menu">
      <template #menuType="scope">
        <el-tag v-if="scope.row.type == 0">目录</el-tag>
        <el-tag v-if="scope.row.type == 1" type="success"> 菜单 </el-tag>
        <el-tag v-if="scope.row.type == 2" type="danger"> 按钮 </el-tag>
      </template>
      <template #button>
        <el-button type="primary" icon="EditPen">编辑</el-button>
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
