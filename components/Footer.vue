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
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 0;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: $padding-desktop;
        padding-right: $padding-desktop;
    }
    .navigation {
        grid-area: menu;
        width: 100%;
    }
    .disclaimer {
        grid-area: disclaimer;

        a {
            color: $grey-light;
            font-style: normal;
            font-weight: $weight-normal;
        }
    }

</style>
