<!-- eslint-disable no-undef -->
<template>
  <el-table
    border
    :data="tableData"
    style="width: 100%"
    row-key="menuId"
    default-expand-all
    height="460"
  >
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
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[10, 20, 50, 100]"
    layout="total, sizes, prev, pager, next, jumper"
    background
    :total="total"
  />

  <!-- <el-pagination
    :current-page="form.currentPage"
    :page-size="form.pageSize"
    :page-sizes="[10, 20, 50, 100]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="form.total"
  /> -->
</template>

<script lang="ts" setup>
import { getList } from "@/api/layout";
import { defineProps, ref } from "vue";

const props = defineProps({
  propList: {
    type: Array,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  form: {
    type: Object,
    required: true
  }
});
const tableData = ref([]);

const currentPage = ref(props.form.currentPage);
const pageSize = ref(props.form.pageSize);
const total = ref(props.form.total);

// console.log(props.form);

const getTableList = async () => {
  try {
    const res: any = await getList(props.url, props.form);
    tableData.value = res.data.records || res.data;
    total.value = res.data.total;
    pageSize.value = res.data.size;
    currentPage.value = res.data.current;
  } catch (e) {
    console.log(e);
  }
};
getTableList();

// eslint-disable-next-line no-undef
defineExpose({
  getTableList
});
</script>

<style lang="scss">
.el-pagination {
  margin-top: 10px;
}
</style>
