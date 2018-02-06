<template>
    <section id="contact" class="container">
        <div class="mood mood--image">
            <figure>
                <img src="/images/Nina-simone-hofer-naturkosmetik_Gesichtsbehandlungen-Wellness-Massagen02.jpg" alt="SIMONE HOFER - WELLNESSMASSAGEN">
                <figcaption>Kontakt</figcaption>
            </figure>
        </div>
        <div class="logo">
            <logo></logo>
        </div>
        <div class="card card--contact">
            <h3 class="title is-primary is-3">Nina Simone Thalhofer</h3>
            <p>Quaderstrasse 15, 7000 Chur </p>
            <p>Telefon +41 79 5297598</p>
            <p><a href="mailto:kontakt@simonehofer-naturkosmetik.ch">kontakt@simonehofer-naturkosmetik.ch</a></p>
            <p>Termine nach Vereinbarung</p>
            <button class="button is-primary">Jetzt Termin vereinbaren</button>
        </div>
    </section>
</template>
<script type="text/babel">
  import Logo from '~/components/Logo.vue'
  export default {
    name: 'Massage',
    components: {
      Logo
    },
    props: {},
  }
</script>
<style lang="scss" scoped>
    .container {
        @include tablet {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: $padding-desktop;
            padding-left: $padding-desktop;
            padding-right: $padding-desktop;

            .mood {
                grid-column: 1 /3;
            }
        }
    }
    .logo {
        margin: 0 auto;
        @include mobile {
            padding-bottom: 32px;
        }
    }
    h3{
        font-size: 24px;
        font-weight: $weight-semibold;
        @include desktop {
            font-size: 48px;
        }
    }
</style>
