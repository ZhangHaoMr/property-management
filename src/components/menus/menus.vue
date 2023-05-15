<template>
  <div class="menus">
    <div class="menusHeader">
      <img
        src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"
        alt=""
      />
      <span>物业管理系统</span>
    </div>
    <el-menu
      active-text-color="#409eff"
      background-color="#304156"
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      text-color="#bfcbd9"
      unique-opened
      router
    >
      <el-menu-item index="/dashboard">
        <el-icon><setting /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu v-for="item in menuList" :key="item.path" :index="item.path">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item-group v-for="ite in item.children" :key="ite.path">
          <el-menu-item :index="ite.path">{{ ite.meta.title }}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { menuList } from "@/menu";
</script>

<style lang="scss">
.menus {
  width: 100%;
  height: 100%;
  .menusHeader {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2b2f3a;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    img {
      width: 32px;
      height: 32px;
      margin-right: 12px;
    }
  }
  .el-menu {
    width: 100%;
    height: calc(100% - 50px);
    border-right: none;
  }
}
</style>
