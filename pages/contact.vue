<template>
  <div class="page-index">
    <div class="wrapper">
        <div class="container">
            <h1 class="title is-centered is-primary is-1">{{post.body.title}}</h1>
            <p>{{post.body.subtitle}}</p>
            <p>{{post.body.text}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',

  asyncData: async ({ app }) => ({
    post: await app.$content('/pages').get('/contact'),
  }),
};
</script>
