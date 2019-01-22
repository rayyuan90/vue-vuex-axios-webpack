<template>
  <div class="home-global"><RwvArticleList type="all" /></div>
</template>
<script>
import RwvArticleList from '@/components/ArticleList';
import { checkAuth } from '@/mixins/mixin';

export default {
  name: 'rwv-home-global',
  mixins: [checkAuth],
  components: {
    RwvArticleList
  }
};
</script>
