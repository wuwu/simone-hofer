<template>
    <section id="top" class="container">
        <div class="logo">
            <logo/>
        </div>
        <div class="mood mood--image">
            <figure>
                <img src="/images/Nina-simone-hofer-naturkosmetik_Gesichtsbehandlungen-Wellness-Massagen04.jpg" alt="SIMONE HOFER - WELLNESSMASSAGEN">
            </figure>
        </div>
        <div class="navigation">
            <main-menu></main-menu>
        </div>
    </section>
</template>
<script type="text/babel">
  import Logo from '~/components/Logo.vue'
  import MainMenu from '~/components/MainMenu.vue'
  export default {
    name: 'Navigation',
    components: {
      Logo,
      MainMenu
    },
    props: {},
  }
</script>
<style lang="scss" scoped>
    .container {
        display: grid;
        grid-gap: 16px;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 16px;
    }
    .logo {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 64px;
    }
    .navigation {
        grid-column: 2 / 3;
        grid-row: 2 / 3;

        @include tablet {
            padding-left: 100px;
        }
    }
    .mood {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        padding-left: $padding-mobile;
        @include tablet {
            padding-left: $padding-desktop;
        }
    }
</style>
