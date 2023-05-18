<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="form">
    <el-form
      :inline="true"
      :align="align"
      :model="formData"
      class="demo-form-inline"
    >
      <template v-for="item in formProps" :key="item.lable">
        <el-form-item v-if="item.options" :label="item.lable" prop="region">
          <el-select v-model="formData[item.prop]" v-bind="item">
            <el-option
              v-for="opt in item.options"
              :key="opt.label"
              v-bind="opt"
            />
          </el-select>
        </el-form-item>
        <el-form-item v-else :label="item.lable">
          <el-input
            v-model="formData[item.prop]"
            :placeholder="item.placeholder"
          />
        </el-form-item>
      </template>
      <el-form-item>
        <el-button v-if="showSearch" icon="Search" @click="Search">
          查询
        </el-button>
        <el-button
          v-if="showDelete"
          :icon="deleteIcon"
          style="color: red"
          @click="Close"
        >
          重置
        </el-button>
        <el-button v-if="showPlus" icon="Plus" type="primary" @click="Plus">
          新增
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { formConfig } from "@/views/layout/fee/feePark/config/form-config";
import { defineProps, ref, defineEmits } from "vue";
const props = defineProps({
  formItem: {
    type: Object,
    redirect: true
  },
  formProps: {
    type: Array,
    redirect: true,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => []
  },
  align: {
    type: String,
    default: ""
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  showDelete: {
    type: Boolean,
    default: true
  },
  showPlus: {
    type: Boolean,
    default: true
  },
  deleteIcon: {
    type: String,
    default: "Close"
  }
});

const emit = defineEmits(["search"]);

const formItems = props?.formProps?.filter((item: any) => item.prop);
console.log(formItems);
const formOrigin: any = {};
for (const key of formItems) {
  formOrigin[key.prop] = "";
}

const formData = ref(formOrigin);
console.log(formData.value);

const Search = () => {
  console.log("搜索");
  emit("search", formData.value);
};

const Close = () => {
  console.log("重置");
  for (const key in formOrigin) {
    formData.value[key] = formOrigin[key];
  }
};

const Plus = () => {
  alert("添加");
};
</script>

<style lang="scss">
.form {
  width: 100%;
}
</style>
