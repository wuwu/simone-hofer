<template>
    <section id="skin" class="container">
        <div class="mood mood--image">
            <figure>
                <img src="/images/Nina-simone-hofer-naturkosmetik_Gesichtsbehandlungen-Wellness-Massagen07.jpg" alt="SIMONE HOFER - WELLNESSMASSAGEN">
                <figcaption>Hautdiagnose</figcaption>
            </figure>
        </div>
        <div class="section-content">
            <div class="entry-content">
                <p><strong class="primary">Hautanalyse</strong><br>
                    Die Haut ist eines der wichtigsten und grössten Organe unseres Körpers. Wohlbefinden oder Unwohlsein lässt sich durch unsere Haut eruieren.</p>
                <p>Nichts bringt so charakteristisch unverwechselbar und stets unterscheidbar die Individualität eines Menschen zum Ausdruck wie seine Haut. Daher ist eine innere und äussere Pflege diese Organes so wichtig.</p>
                <p>Warum die Hautanalyse so wichtig ist……</p>
                <nuxt-link to="/hautanalyse" class="button is-primary">weitere Informationen</nuxt-link>

            </div>
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
        margin-bottom: $padding-desktop * 2;

        p {
            padding: 8px 0 8px 0;
        }
    }

    @include tablet {
        .section-content {
            font-size: 32px;
            padding: 0 $padding-desktop;
            padding-left: $padding-desktop * 3;
            padding-right: $padding-desktop * 2;
        }
    }
    strong {
        color: $primary;
    }

</style>
