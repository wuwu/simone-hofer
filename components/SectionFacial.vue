<template>
    <section id="face" class="container has-bg">
        <p>
            Tauchen Sie ein in eine Welt des Wohlbefindens und der Entspannung.
            Zertifizierte Naturkosmetika sorgen – fein abgestimmt auf die individuellen Bedürfnisse Ihrer Haut – für ein gestrafftes, ebenmäßiges Hautbild und einen gepflegten Teint.
        </p>
        <div class="mood mood--image">
            <figure>
                <img src="/images/Nina-simone-hofer-naturkosmetik_Gesichtsbehandlungen-Wellness-Massagen01.jpg" alt="SIMONE HOFER - WELLNESSMASSAGEN">
                <figcaption>Gesichtsbehandlungen</figcaption>
            </figure>
        </div>
        <div class="treatments">
            <card-treatment>
                <template slot="header">Auszeit</template>
                <template slot="description">
                    <ul class="list list--treatment">
                        <li>Gesichtsreinigung/Hautdiagnose</li>
                        <li>Kompressen</li>
                        <li>typgerechtes Peeling</li>
                        <li>Ausreinigen</li>
                        <li>Maske</li>
                        <li>Abschlusspflege</li>
                    </ul>
                </template>
                <template slot="price">circa 60 min / 120.-CHF</template>
            </card-treatment>
            <card-treatment>
                <template slot="header">Loslassen</template>
                <template slot="description">
                    <ul class="list list--treatment">
                        <li>Gesichtsreinigung/Hautdiagnose</li>
                        <li>Kompressen</li>
                        <li>typgerechtes Peeling</li>
                        <li>Ausreinigen</li>
                        <li>Augenbrauenkorrektur</li>
                        <li>Serum</li>
                        <li>Maske</li>
                        <li>Nacken-, Dekolleté-, Gesichtsmassage</li>
                        <li>Abschlusspflege</li>
                    </ul>
                </template>
                <template slot="price">circa 90 min / 180.- CHF</template>
            </card-treatment>
            <card-treatment>
                <template slot="header">Kräuterzauber</template>
                <template slot="description">
                    <ul class="list list--treatment">
                        <li>Gesichtsreinigung/Hautdiagnose</li>
                        <li>Kräuter-Kompressen</li>
                        <li>typgerechtes Peeling</li>
                        <li>Ausreinigen</li>
                        <li>Augenbrauenkorrektur</li>
                        <li>Serum</li>
                        <li>Maske</li>
                        <li>Nacken-, Dekolleté-, Gesichtsmassage</li>
                        <li>Abschlusspflege</li>
                    </ul>
                </template>
                <template slot="price">circa 90 min / 180.- CHF</template>
            </card-treatment>
            <card-treatment>
                <template slot="header">Ohrkerzenbehandlung</template>
                <template slot="description">
                    <ul class="list list--treatment">
                        <li>Gesichtsreinigung</li>
                        <li>Ohrkerzenbehandlung</li>
                        <li>Nachruhen</li>
                        <li>Lymphstimulationsmassage</li>
                        <li>Abschlusspflege</li>
                    </ul>
                </template>
                <template slot="price">circa 60 min / 80.- CHF</template>
            </card-treatment>
        </div>

    </section>
</template>
<script type="text/babel">
  import CardTreatment from '~/components/TreatmentCard.vue'

  export default {
    name: 'Facial',
    components: {
      CardTreatment
    },
    props: {},
  }
</script>
<style lang="scss" scoped>

    .container {
        margin-right: $padding-desktop;
        margin-left: $padding-desktop;
    }

    .treatments {
        @include tablet {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: $padding-desktop * 0.5;
        }
    }
    @include tablet {
        p {
            padding-top: $padding-desktop;
            padding-bottom: $padding-desktop;
            padding-left: $padding-desktop * 3;
            padding-right: $padding-desktop*2;
        }
    }
    .mood {
        padding-bottom: $padding-desktop * 2;
    }

</style>
