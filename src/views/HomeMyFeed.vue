<template>
  <div class="home-my-feed"><RwvArticleList type="feed" /></div>
</template>

<script>
import RwvArticleList from '@/components/ArticleList';
import { checkAuth } from '@/mixins/mixin';

export default {
  name: 'rwv-home-my-feed',
  mixins: [checkAuth],
  components: {
    RwvArticleList
  }
};
</script>
