<template>
  <div class="sysrolelist">
    <tab :propList="propList" :form="form" url="/sysNotice">
      <template #button>
        <el-button icon="EditPen" type="primary">编辑</el-button>
        <el-button icon="Delete" type="danger">删除</el-button>
      </template>
    </tab>
  </div>
</template>

<script lang="ts" setup>
import { propList, form } from "./config/table-content";
import tab from "@/baseUI/table";
</script>

<style scoped></style>
