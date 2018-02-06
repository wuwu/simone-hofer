<template>
    <section id="footer" class="container has-bg">
        <div class="navigation">
            <main-menu></main-menu>
        </div>
        <div class="disclaimer">
            <a href="#">Datenschutz</a><br/>
            <a href="#">Impressum</a>
        </div>
    </section>
</template>
<script type="text/babel">
  import MainMenu from '~/components/MainMenu.vue'
  export default {
    name: 'Footer',
    components: {
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
            "menu disclaimer";
        margin-bottom: 0;
        padding-top: 16px;
        padding-bottom: 16px;
    }
    .navigation {
        grid-area: menu;
    }
    .disclaimer {
        grid-area: disclaimer;
    }

</style>
