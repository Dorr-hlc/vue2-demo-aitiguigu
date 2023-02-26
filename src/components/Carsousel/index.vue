<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-02-26 16:09:14
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-02-26 16:09:54
 * @RevisionHistory: 
-->
<template>
  <div class="swiper-container" id="floor1Swiper" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carouse, index) in list"
        :key="carouse.id"
      >
        <img :src="carouse.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "Carsousel",
  components: {},
  props: ["list"],
  data() {
    return {};
  },
  watch: {
    list: {
      immediate: true, //代表立即监听，不管数据是否发生变化
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          new Swiper(this.$refs.cur, {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="css" scoped></style>
