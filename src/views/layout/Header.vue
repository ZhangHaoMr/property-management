<template>
  <div class="Header">
    <div class="header-left">
      <el-icon size="25"><Fold /></el-icon>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">公告管理</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <img
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
          alt=""
        />
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item divided>重置密码</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss">
.Header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 0 10px;
  .header-left {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-dropdown:hover {
    border: 0 !important;
  }
  :focus {
    outline: 0;
  }
  .el-dropdown-link {
    img {
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
  }
  .el-dropdown-link:hover {
    border: 0 !important;
  }
}
</style>
