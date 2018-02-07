<template>
    <section id="skin" class="container">
        <div class="mood mood--image">
            <figure>
                <img src="/images/Nina-simone-hofer-naturkosmetik_Gesichtsbehandlungen-Wellness-Massagen02.jpg" alt="SIMONE HOFER - WELLNESSMASSAGEN">
                <figcaption>Hautdiagnose</figcaption>
            </figure>
        </div>
        <div class="section-content">
            <p class="col1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,</p>
            <p class="col2"> consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
    </section>
</template>
<script type="text/babel">
  export default {
    name: 'Skin',
    components: {
    },
    props: {},
  }
</script>
<style lang="scss" scoped>

    .section-content {
        padding: 0 $padding-mobile 0 $padding-desktop;
    }

    @include tablet {
        .section-content {
            padding: 0 $padding-desktop;
            display: flex;
        }
        .col1 {
            flex: 1;
            padding-right: 8px;

        }
        .col2 {
            flex:1;
            padding-left: 8px;

        }
    }
</style>
