<template>
  <el-table border :data="tableData" style="width: 100%">
    <template v-for="item in propList" :key="item.id">
      <el-table-column v-bind="item">
        <template #default="scope">
          <slot :name="item.slotName" :row="scope.row">
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
  <el-pagination
    :current-page="form.curentPage"
    :page-size="form.pageSize"
    :page-sizes="[10, 20, 50, 100]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="form.total"
  />
</template>

<script lang="ts" setup>
import { getList } from "@/api/layout";
import { defineProps, ref } from "vue";

defineProps({
  propList: {
    type: Array,
    required: true
  }
});
const tableData = ref([]);
const form = ref({
  loginName: "",
  phone: "",
  curentPage: 1,
  pageSize: 10,
  total: 0
});

getList(form.value).then((res) => {
  console.log(res);
  form.value.total = res.total;
  form.value.pageSize = res.size;
  form.value.curentPage = res.pages;
  tableData.value = res.data.records;
});
</script>

<style lang="scss"></style>
