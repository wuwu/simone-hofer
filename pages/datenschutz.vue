<template>
    <div class="wrapper">
        <logo/>
        <skin :post="post.body"></skin>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Skin from '~/components/SectionSkin.vue'

export default {
  components: {
    Logo,
    Skin
  },
  asyncData: async ({ app }) => ({
    post: await app.$content('/pages').get('/datenschutz')
  })
}
</script>

<style lang="scss" scoped>



</style>
