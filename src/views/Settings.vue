<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">你的设置</h1>
          <form @submit.prevent="updateSettings();">
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  v-model="currentUser.image"
                  placeholder="头像url"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="currentUser.username"
                  placeholder="用户名"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  v-model="currentUser.bio"
                  placeholder="简单介绍吧"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="currentUser.email"
                  placeholder="邮箱"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  v-model="currentUser.password"
                  placeholder="密码"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                更新信息
              </button>
            </fieldset>
          </form>
          <!-- Line break for logout button -->
          <hr />
          <button @click="logout" class="btn btn-outline-danger">
            退出当前用户
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { LOGOUT, UPDATE_USER } from '@/store/actions.type';
import { checkAuth } from '@/mixins/mixin';

export default {
  name: 'RwvSettings',
  mixins: [checkAuth],
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    updateSettings() {
      this.$store.dispatch(UPDATE_USER, this.currentUser).then(() => {
        // #todo, nice toast and no redirect
        this.$router.push({ name: 'home' });
      });
    },
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: 'home' });
      });
    }
  }
};
</script>
