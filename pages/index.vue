<template>
  <div>
    <h1>hellow world</h1>
    <div v-if="this.posts?.data?.message">
      {{ this.posts.data.message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      message: 'Loading...', // Set a default value
    };
  },
  async fetch() {
    this.posts = await this.$axios.get('/api');
    console.log('post data reponce', this.posts);
  },
};
</script>
