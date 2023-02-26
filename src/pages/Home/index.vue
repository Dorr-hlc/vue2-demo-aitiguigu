<!--
 * @Copyright: Copyright© 2022 AOMEI
 * @Abstract: 
 * @Date: 2023-02-19 22:23:30
 * @Author: 
 * @LastEditors: houliucun
 * @LastEditTime: 2023-02-26 14:48:15
 * @RevisionHistory: 
-->
<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor" />
    <Brand />
  </div>
</template>
<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapState } from "vuex";
export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  props: {},
  data() {
    return {
      n: 1,
    };
  },
  watch: {},
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
  methods: {},
  created() {},
  mounted() {
    this.$store.dispatch("GetFloorList");
  },
};
</script>
<style lang="css" scoped>
</style>