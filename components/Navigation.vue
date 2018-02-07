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
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        flex-direction: row;
        margin-bottom: 16px;
    }
    .logo {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 64px;
    }
    .navigation {
        flex: 1;
        padding-left: $padding-mobile;
        @include tablet {
            padding-left: 100px;
        }
    }
    .mood {
        flex: 1;
        padding-left: $padding-mobile;
        @include tablet {
            padding-left: $padding-desktop;
        }
    }
</style>
