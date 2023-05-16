<template>
  <div class="usercomplaintlist">
    <tab :propList="propList" :form="form" url="/userComplaint">
      <template #comStatus="scope">
        <el-tag v-if="scope.row.status == 1" type="success"> 已处理 </el-tag>
        <el-tag v-if="scope.row.status == 0" type="danger"> 未处理 </el-tag>
      </template>
      <template #button>
        <el-button icon="Delete" type="success">处理</el-button>
      </template>
    </tab>
  </div>
</template>

<script lang="ts" setup>
import { propList, form } from "./config/table-content";
import tab from "@/baseUI/table";
</script>

<style scoped></style>
