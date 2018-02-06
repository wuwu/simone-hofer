<template>
    <section id="massages" class="container">
        <div class="mood mood--image">
            <figure>
                <img src="/images/Nina-simone-hofer-naturkosmetik_Gesichtsbehandlungen-Wellness-Massagen04.jpg" alt="SIMONE HOFER - WELLNESSMASSAGEN">
                <figcaption>Wellness Massagen</figcaption>
            </figure>
        </div>
        <card-treatment>
            <template slot="header">Kräuterstempel-Massage</template>
            <template slot="description">
                <p>Genießen Sie die Dekolleté- und Gesichtsmassage mit Seidenkräuterstempel und einer speziellen Kräutermischung aus kontrolliert biologischem Anbau. Die Behandlung steigert die Stoffwechselprozesse in Ihrem Gewebe, beruhigt und entspannt.</p>
            </template>
            <p slot="price">circa 60 min / 135.-CHF</p>
        </card-treatment>
        <card-treatment>
            <template slot="header">Edelstein-Massage</template>
            <template slot="description">
                <p>Erleben Sie die eine Dekolleté- und Gesichtsmassage mit Edelsteinen. Dank der Verbindung von Massage und Heilsteinen entsteht eine tiefe, ganzheitliche Wirkung, die Körper, Seele und Geist beruhigt. Gesundungsprozesse werden positiv beeinflusst. Die intensive Massage ist herrlich entspannend. </p>
            </template>
            <p slot="price">circa 60 min / 135.-CHF</p>
        </card-treatment>
    </section>
</template>
<script type="text/babel">
  import CardTreatment from '~/components/TreatmentCard.vue'
  export default {
    name: 'Massage',
    components: {
      CardTreatment
    },
    props: {},
  }
</script>
<style lang="scss" scoped>

</style>
