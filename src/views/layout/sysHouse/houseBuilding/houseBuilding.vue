<template>
  <div class="houseBuilding">
    <fo v-bind="formConfig" :formItem="form"> </fo>

    <tab :propList="propList" :form="form" url="/HouseBuilding">
      <template #houseType="scope">
        <el-tag v-if="scope.row.type == 0" type="success"> 普通房 </el-tag>
        <el-tag v-if="scope.row.type == 1" type="danger"> 电梯房 </el-tag>
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
