<template>
    <div class="wrapper">
        <logo/>
        <skin :post="postSkin.body"></skin>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Skin from '~/components/SectionSkin.vue'

export default {
  head () {
    return {
      title: 'Simone Hofer - Hautanalyse - Chur'
    }
  },
  components: {
    Logo,
    Skin
  },
  asyncData: async ({ app }) => ({
    postSkin: await app.$content('/pages').get('/skin')
  })
}
</script>

<style lang="scss" scoped>



</style>
