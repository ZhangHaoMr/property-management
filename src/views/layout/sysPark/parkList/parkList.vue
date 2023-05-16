<template>
  <div class="sysrolelist">
    <tab :propList="propList" :form="form" url="/parkList">
      <template #parkType="scope">
        <el-tag v-if="scope.row.parkType == 1" type="success"> 地下</el-tag>
        <el-tag v-if="scope.row.parkType == 0" type="danger"> 地上 </el-tag>
      </template>
      <template #parkStatus="scope">
        <el-tag v-if="scope.row.parkStatus == 0" type="danger"> 未使用 </el-tag>
        <el-tag v-if="scope.row.parkStatus == 1" type="success">
          已使用
        </el-tag>
      </template>
      <template #button>
        <el-button type="primary">编辑</el-button>
        <el-button type="danger">删除</el-button>
      </template>
    </tab>
  </div>
</template>

<script lang="ts" setup>
import { propList, form } from "./config/table-content";
import tab from "@/baseUI/table";
</script>

<style scoped></style>
