<template>
    <ul class="menu">
        <li><a href="#" v-scroll-to="'#intro'">Über mich</a></li>
        <li><nuxt-link to="/hautanalyse">Hautdiagnose</nuxt-link></li>
        <li><a href="#" v-scroll-to="'#face'">Gesichtsbehandlungen</a></li>
        <li><a href="#" v-scroll-to="'#massages'">Wellness Massagen</a></li>
        <li><a href="#" v-scroll-to="'#extra'">Extra Treatments</a></li>
        <li><a href="#" v-scroll-to="'#contact'">Kontakt</a></li>
    </ul>
</template>
<script type="text/babel">
  export default {
    name: 'Menu',
  }
</script>
<style lang="scss" scoped>
    .menu {
        list-style: none;

        a {
            color: $text;
            font-style: normal;
            font-weight: $weight-normal;
        }
    }
</style>
