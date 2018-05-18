<template>
    <div class="wrapper">
        <logo/>
        <div class="container">
            <h2 class="title is-size-2 has-text-primary">{{post.body.title}}</h2>
            <vue-markdown :source="post.body.text"></vue-markdown>
            <nuxt-link to="/" class="button primary">zur Startseite</nuxt-link>
        </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  head () {
    return {
      title: 'Simone Hofer - Naturkosmetik - Chur - Datenschutz'
    }
  },
  components: {
    Logo
  },
  asyncData: async ({ app }) => ({
    post: await app.$content('/pages').get('/impressum')
  })
}
</script>

<style lang="scss" scoped>

    .container {
        padding: 0 8px;
        max-width: 768px;
        margin: 0 auto;
    }

</style>
