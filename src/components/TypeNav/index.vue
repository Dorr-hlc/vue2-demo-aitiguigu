<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="enterShow" @mouseleave="leaveShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 过渡动画 -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <!-- 事件委派结合编程式导航实现路由传参 -->
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ item_cur: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    href=""
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 2,3级分类 -->
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <!-- 二级 -->
                        <a
                          href=""
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <!-- 三级 -->
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            href=""
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
// 把所有的lodash功能函数引入了
// import _ from "lodash";
// 按需加载
import { throttle } from "lodash";
export default {
  name: "TypeNav",
  components: {},
  props: {},
  data() {
    return {
      // 鼠标Hover
      currentIndex: "-1",
      show: true,
    };
  },
  watch: {},
  computed: {
    ...mapState({
      // 对象的右侧需要的是一个函数，当使用这个计算属性，函数会立即执行一次，
      // 注入参数state，其实就是大仓库中的数据state
      categoryList: (state) => state.home.categoryList.slice(0, 16),
    }),
  },
  methods: {
    // changeIndex(index) {
    //   this.currentIndex = index;
    // },
    leaveShow() {
      this.currentIndex = "-1";
           console.log('3123',this.$route.name);
      if (this.$route.name == "search") {
   
        this.show = false;
      }
    },
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    // 鼠标移入，商品列表显示
    enterShow() {
      this.show = true;
    },
    goSearch(event) {
      event.preventDefault();
      // 编程式导航结合事件委派，点击a标签跳转
      // 存在的问题，事件委派是把全部的子节点的事件委派给了父节点，因此需要确认点击的是a标签
      // 当确认了点击a标签，还得确认点击的是几级a标签
      let element = event.target;
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      // console.log(element.dataset, categoryname);
      // this.$route.push("/search");
      // console.log(category2Id);
      if (categoryname) {
        //  整理路由跳转的参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }

        // 判断，如果路由跳转的时候，带有params 参数，就一起传过去，也就是合并参数
        if (this.$route.params) {
          location.params = this.$route.params;
          // 整理参数
          location.query = query;
          // 路由跳转
          this.$router.push(location);
        }
      }
    },
  },
  created() {},
  mounted() {
    // 组件挂载成功,show=false
    if (this.$route.name == "search") {
      this.show = false;
    }
  },
};
</script>
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          &.item_cur {
            background: skyblue;
          }
          .item-list {
            // display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
      }
    }
    // 过渡动画的样式
    // 开始
    .sort-enter {
      height: 0;
    }
    // 进入
    .sort-enter-to {
      height: 461px;
    }
    // 时间，速率
    .sort-enter-active {
      transition: all 0.6s linear;
    }
  }
}
</style>
