<template>
    <section id="contact" class="container">
        <div class="mood mood--image">
            <figure>
                <img src="/images/Nina-simone-hofer-naturkosmetik_Gesichtsbehandlungen-Wellness-Massagen08.jpg" alt="SIMONE HOFER - WELLNESSMASSAGEN">
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
            <p>Termine nach Vereinbarung</p>
            <a class="button is-primary" href="mailto:kontakt@simonehofer-naturkosmetik.ch">Jetzt Termin vereinbaren</a>
            <p><a href="mailto:kontakt@simonehofer-naturkosmetik.ch">kontakt@simonehofer-naturkosmetik.ch</a></p>
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
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            flex-direction: row;

            padding-left: $padding-desktop;
            padding-right: $padding-desktop;

            .mood {
                width: 100%;
            }
            .logo {
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: flex-start;
            }
            .card--contact {
                flex: 1;
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
