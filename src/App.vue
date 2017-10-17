<template>
  <div class="layout">
    <Menu mode="horizontal" v-on:on-select="onSelect" theme="dark" active-name="index">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <MenuItem name="index">
          <Icon type="upload"></Icon>
          <span>CSV上传</span>
        </MenuItem>
        <MenuItem name="searchReport">
          <Icon type="search"></Icon>
          <span>查看报表</span>
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
      onSelect (pageName) {
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
    background: url(./assets/logo.png) 0 0 no-repeat;
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
