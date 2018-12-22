<template>
  <div class="main">
    <sg-header class="header"></sg-header>
    <div class="content">
      <div class="left-nav">
        <sg-nav></sg-nav>
      </div>
      <div class="center-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SgHeader from '@examples/src/components/header'
import SgNav from '@examples/src/components/nav'

export default {
  components: {
    SgHeader,
    SgNav
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .header {
    height: 50px;
  }

  .content {
    flex: 1;
    display: flex;
    .left-nav {
    }

    .center-container {
      flex: 1;
      padding: 20px;
      height: 100%;
      overflow: hidden;
      background: #35353a;
      color: #fff;
    }
  }

</style>
