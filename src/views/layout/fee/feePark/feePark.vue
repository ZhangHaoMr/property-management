<template>
  <div class="feePark">
    <fo v-bind="formConfig" :formItem="form"> </fo>

    <tab :propList="propList" :form="form" url="/feePark">
      <template #parkType="scope">
        <el-tag v-if="scope.row.parkType == 0" type="success"> 地上 </el-tag>
        <el-tag v-if="scope.row.parkType == 1" type="danger"> 地下 </el-tag>
      </template>
      <template #payParkStatus="scope">
        <el-tag v-if="scope.row.payParkStatus == 1" type="success">
          已缴费
        </el-tag>
        <el-tag v-if="scope.row.payParkStatus == 0" type="danger">
          未缴费
        </el-tag>
      </template>
      <template #button="scope">
        <el-button icon="EditPen" type="primary">编辑</el-button>
        <el-button icon="Delete" type="danger">删除</el-button>
        <el-button
          v-if="scope.row.payWaterStatus == 0"
          icon="Delete"
          type="warning"
          >缴费</el-button
        >
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
