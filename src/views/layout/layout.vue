<template>
  <div class="layout">
    <el-container>
      <el-aside width="210px">
        <Menus />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
          <tags />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Menus from "./menus/menus.vue";
import Header from "./Header.vue";
import tags from "./tags.vue";
</script>

<style lang="scss">
.layout {
  width: 100vw;
  height: 100vh;
  .el-container {
    width: 100%;
    height: 100%;
    .el-header {
      height: 80px;
      padding: 0;
    }
  }
}
</style>
