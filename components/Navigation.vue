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
  import MainMenu from '~/components/Menu.vue'
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
        grid-gap: 1em;
        grid-template-areas:
            "header header"
            "mood navigation";
        margin-bottom: 16px;
    }
    .logo {
        grid-area: header;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 64px;
    }
    .navigation {
        grid-area: navigation
    }
    .mood {
        grid-area: mood;
    }
</style>
