<template>
  <div class="sysrolelist">
    <tab :propList="propList" :form="form" url="/parkList" />
  </div>
</template>

<script lang="ts" setup>
import { propList, form } from "./config/table-content";
import tab from "@/baseUI/table";
</script>

<style scoped></style>
