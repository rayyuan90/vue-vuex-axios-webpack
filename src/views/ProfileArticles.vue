<template>
  <div class="profile-page">
    <RwvArticleList :author="author" :items-per-page="5"></RwvArticleList>
  </div>
</template>

<script>
import RwvArticleList from '@/components/ArticleList';
import { checkAuth } from '@/mixins/mixin';

export default {
  name: 'RwvProfileArticles',
  mixins: [checkAuth],
  components: {
    RwvArticleList
  },
  computed: {
    author() {
      return this.$route.params.username;
    }
  }
};
</script>
