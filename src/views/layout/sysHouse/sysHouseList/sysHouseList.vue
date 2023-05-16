<template>
  <div class="sysrolelist">
    <tab :propList="propList" :form="form" url="/houseList">
      <template #statusName="scope">
        <el-tag v-if="scope.row.status == 0" type="success"> 未使用 </el-tag>
        <el-tag v-if="scope.row.status == 1" type="danger"> 已使用 </el-tag>
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
import tab from "@/baseUI/table";
</script>

<style scoped></style>
