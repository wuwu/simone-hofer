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
        <div class="card card--treatment">
            <h3 class="title is-primary is-3">Nina Simone Thalhofer</h3>
            <p>Quaderstrasse 15, 7000 Chur </p>
            <p>Telefon +41 79 5297598</p>
            <p><a href="mailto:kontakt@simonehofer-naturkosmetik.ch">kontakt@simonehofer-naturkosmetik.ch</a></p>
            <p>Termine nach Vereinbarung</p>
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

</style>
