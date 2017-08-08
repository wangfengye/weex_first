<template>
  <div class="wrapper" >
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>
//原生应用跳转
/* import weexVueRouter from 'weex-vue-router'
import routes from './router/native-router'
Vue.use(weexVueRouter,{routes,weex}) */
//const navigator =weex.requireModule('navigator')
export default {
  mounted(){
    this.jump('/')
  },
  methods: {
    jump(url) {
      this.$router.push(url)
      // navigator.push({'url':'http://192.168.168.39:8080/dist/pages/imageList.js','animated':'true'})
    }
  }
}
</script>

<style>
.wrapper {
  align-items: center;
}

.template {
  position: absolute;
  top: 128px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.title {
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 48px;
}

.desc {
  padding-top: 20px;
  color: #888;
  font-size: 24px;
}

.img {
  width: 360px;
  height: 480px;
}
</style>