<template>
  <div class="abc">
    <div @click="alert">这是alert组件，点我试试看</div>
    <!--<img v-show="showImage" src="../WechatIMG5.png" alt="" style="width: 100px;height: 100px">-->
    <div v-show="showImage" style="color: red;">我是隐藏的内容</div>
  </div>
</template>

<script>
export default {
  name: 'SgAlert',
  data() {
    return {
      showImage: true
    }
  },
  methods: {
    alert() {
      // alert('执行了组件中的逻辑')
      this.showImage = !this.showImage
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './main.scss';

  body {
    background: #fff;
  }
</style>
