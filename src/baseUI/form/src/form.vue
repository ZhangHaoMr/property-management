<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="form">
    <el-form
      :inline="true"
      :align="align"
      :model="formItem"
      class="demo-form-inline"
    >
      <template v-for="item in formProps" :key="item.lable">
        <el-form-item v-if="item.options" :label="item.lable" prop="region">
          <el-select v-model="formItem[item.prop]">
            <el-option
              v-for="opt in item.options"
              :key="opt.label"
              v-bind="opt"
            />
          </el-select>
        </el-form-item>
        <el-form-item v-else :label="item.lable">
          <el-input
            v-model="formItem[item.prop]"
            :placeholder="item.placeholder"
          />
        </el-form-item>
      </template>

      <!-- <el-form-item label="Activity zone">
        <el-select v-model="formInline.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <slot name="buttons">
          <el-button icon="Search">查询</el-button>
          <el-button icon="Delete" style="color: red">重置</el-button>
          <el-button icon="Plus" type="primary">新增</el-button>
        </slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  formItem: {
    type: Object,
    redirect: true
  },
  formProps: {
    type: Object,
    redirect: true,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => []
  },
  align: {
    type: String,
    default: ""
  }
});
</script>

<style lang="scss">
.form {
  width: 100%;
}
</style>
