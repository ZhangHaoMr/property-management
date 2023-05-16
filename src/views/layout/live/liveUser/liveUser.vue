<template>
  <div class="sysrolelist">
    <tab :propList="propList" :form="form" url="/liveUser">
      <template #liveSex="scope">
        <el-tag v-if="scope.row.sex == 0" type="success"> 男 </el-tag>
        <el-tag v-if="scope.row.sex == 1" type="danger"> 女 </el-tag>
      </template>
      <template #useStatus="scope">
        <el-tag v-if="scope.row.useStatus == 0" type="success"> 启用 </el-tag>
        <el-tag v-if="scope.row.useStatus == 1" type="danger"> 禁用 </el-tag>
      </template>
      <template #button>
        <el-button type="success">编辑</el-button>
        <el-button type="primary">分配房屋</el-button>
        <el-button type="success">分配车位</el-button>
        <el-button type="danger">退房</el-button>
        <el-button type="warning">退车位</el-button>
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
