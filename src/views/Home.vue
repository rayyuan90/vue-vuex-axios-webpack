<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">测试页</h1>
        <p>测试框架</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="isAuthenticated" class="nav-item">
                <router-link
                  :to="{ name: 'home-my-feed' }"
                  class="nav-link"
                  active-class="active"
                >
                  我的文章
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'home' }"
                  exact
                  class="nav-link"
                  active-class="active"
                >
                  全部文章
                </router-link>
              </li>
              <li class="nav-item" v-if="tag">
                <router-link
                  :to="{ name: 'home-tag', params: { tag } }"
                  class="nav-link"
                  active-class="active"
                >
                  <i class="ion-pound"></i> {{ tag }}
                </router-link>
              </li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <RwvTag v-for="(tag, index) in tags" :name="tag" :key="index">
              </RwvTag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page .logo-font {
  color: #fff;
}
</style>

<script>
import { mapGetters } from 'vuex';
import RwvTag from '@/components/VTag';
import { FETCH_TAGS } from '@/store/actions.type';
import { checkAuth } from '@/mixins/mixin';

// var checkAuth = {
//   beforeCreate(){
//     if(!this.$store.state.auth.isAuthenticated){
//       this.$router.push({ name: "login" });
//       return;
//     }
//   },
// }
export default {
  name: 'home',
  components: {
    RwvTag
  },
  mixins: [checkAuth],
  mounted() {
    this.$store.dispatch(FETCH_TAGS);
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'tags']),
    tag() {
      return this.$route.params.tag;
    }
  }
};
</script>
