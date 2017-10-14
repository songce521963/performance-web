<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <MenuItem name="1">
          <Icon type="upload"></Icon>
          <span @click="toPage('index')">CSV上传</span>
        </MenuItem>
        <MenuItem name="2">
          <Icon type="search"></Icon>
          <span @click="toPage('searchReport')">查看报表</span>
        </MenuItem>
      </div>
    </Menu>
    <div class="layout-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      toPage (pageName) {
        this.$router.push({name: pageName})
      }
    }
  }
</script>

<style>
  .ivu-spin-fix {
    background-color: rgba(55, 55, 55, .6);
  }

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 320px;
    margin: 0 auto;
  }

  .layout-assistant {
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 800px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
</style>
