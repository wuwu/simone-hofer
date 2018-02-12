<template>
    <div class="wrapper">
        <logo/>
        <div class="container">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <h1 class="title is-size-1 hast-text-primary hast-text-left is-capitalized has-text-weight-bold">{{ post.body.text }}</h1>
                    <p>{{ post.body.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'


export default {
  components: {
    Logo
  },
  asyncData: async ({ app }) => ({
    post: await app.$content('/pages').get('/wellness'),
  }),
}
</script>

<style lang="scss" scoped>



</style>
