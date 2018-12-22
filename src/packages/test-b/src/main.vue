<template>
  <div>
    <div>我是输入信息B{{msg_b}}</div>
    <input type="text" v-model="msg_b">
  </div>
</template>

<script>
export default {
  name: 'RTestB',
  data() {
    return {
      msg_b: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './main.scss';
</style>
