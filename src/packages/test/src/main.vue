<template>
  <div>
    <div>我是输入信息A{{msg}}</div>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  name: 'RTest',
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
