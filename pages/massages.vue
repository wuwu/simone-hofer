<template>
    <div class="wrapper">
        <logo/>
        <div class="container">
            <div class="columns">
                <div class="column">
                    <p>{{ }}</p>
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
    post: await app.$content('/pages').get('/massages'),
  }),
}
</script>

<style lang="scss" scoped>



</style>
