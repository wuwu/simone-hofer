<template>
    <section id="top" class="container">
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
        margin-bottom: 16px;

        @include tablet {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            flex-direction: row;
            align-items: center;
        }
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
        padding-right: $padding-mobile;
        @include tablet {
            padding-left: $padding-desktop;
            padding-right: 0;
        }
    }
</style>
