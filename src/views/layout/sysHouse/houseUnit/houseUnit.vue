<template>
  <div class="sysrolelist">
    <fo v-bind="formConfig" :formItem="form"> </fo>
    <tab :propList="propList" :form="form" url="/houseUnit">
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
