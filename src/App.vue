<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- HOME.SEARCH显示，其他页面隐藏 -->
    <Footer v-show="$route.meta"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  name: "App",
  components: { Header, Footer },
  mounted(){
        // 通知vuex发送请求，获取数据
    this.$store.dispatch("categoryList");
  }
};
</script>

<style >
</style>
