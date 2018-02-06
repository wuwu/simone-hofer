<template>
    <div class="wrapper">
        <navigation></navigation>
        <intro></intro>
        <skin></skin>
        <facial></facial>
        <massage></massage>
        <addon-treatments></addon-treatments>
        <contact></contact>
        <page-footer></page-footer>
        <button-scroll-top></button-scroll-top>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/Navigation.vue'
import Intro from '~/components/SectionIntro.vue'
import Skin from '~/components/SectionSkin.vue'
import Facial from '~/components/SectionFacial.vue'
import Massage from '~/components/SectionMassage.vue'
import AddonTreatments from '~/components/SectionAddonTreatments.vue'
import Contact from '~/components/SectionContact.vue'
import ButtonScrollTop from '~/components/ButtonScrollTop.vue'
import PageFooter from '~/components/Footer.vue'

export default {
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
  }
}
</script>

<style lang="scss" scoped>



</style>
