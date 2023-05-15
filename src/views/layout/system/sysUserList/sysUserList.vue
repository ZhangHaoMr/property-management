<template>
  <div class="sysuserlist">
    <tableContent :propList="propList">
      <template #sex="scope">
        <el-tag :type="scope.row.sex == 1 ? '' : 'success'">
          {{ scope.row.sex == 1 ? "男" : "女" }}
        </el-tag>
      </template>
      <template #isAdmin="scope">
        <el-switch
          v-model="scope.row.isAdmin"
          class="mb-2"
          active-text="是"
          inactive-text="否"
          active-value="0"
          inactive-value="1"
        />
      </template>
      <template #authorities="scope">
        <el-switch
          v-model="scope.row.authorities"
          class="mb-2"
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
    </tableContent>
  </div>
</template>

<script lang="ts" setup>
import tableContent from "@/baseUI/table";
import { propList } from "./config/table-content";
</script>

<style scoped></style>
