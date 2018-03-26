<template>
    <div class="wrapper">
        <logo></logo>
        <navigation></navigation>
        <intro :post="postIntro.body"></intro>
        <skin :post="postSkin.body"></skin>
        <facial :post="postFacial.body"></facial>
        <massage :post="postWellness.body"></massage>
        <addon-treatments :post="postExtra.body"></addon-treatments>
        <contact :post="postContact.body"></contact>
        <page-footer></page-footer>
        <button-scroll-top></button-scroll-top>
    </div>
</template>

<script type="text/babel">
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/Navigation.vue'
import Intro from '~/components/SectionIntro.vue'
import Skin from '~/components/SectionSkinIntro.vue'
import Facial from '~/components/SectionFacial.vue'
import Massage from '~/components/SectionMassage.vue'
import AddonTreatments from '~/components/SectionAddonTreatments.vue'
import Contact from '~/components/SectionContact.vue'
import ButtonScrollTop from '~/components/ButtonScrollTop.vue'
import PageFooter from '~/components/Footer.vue'

export default {
  head () {
    return {
      title: 'Simone Hofer - Naturkosmetik - Chur',
      meta: [
        { name: 'google-site-verification', content: '0leEmXWmiJjZCKPtLPlbICysp6PjuPX25XmtipljEds' }
      ]
    }
  },
  components: {
    Logo,
    Navigation,
    Intro,
    Skin,
    Facial,
    Massage,
    AddonTreatments,
    ButtonScrollTop,
    Contact,
    PageFooter
  },
  asyncData: async ({ app }) => ({
    postIntro: await app.$content('/pages').get('/about'),
    postSkin: await app.$content('/pages').get('/skin'),
    postFacial: await app.$content('/pages').get('/facial'),
    postWellness: await app.$content('/pages').get('/wellness'),
    postExtra: await app.$content('/pages').get('/extra'),
    postContact: await app.$content('/pages').get('/contact'),
  }),
}
</script>

<style lang="scss" scoped>



</style>
