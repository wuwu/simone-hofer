<template>
    <section id="extra" class="container">
        <div class="mood mood--image">
            <figure>
                <img src="/images/Nina-simone-hofer-naturkosmetik_Gesichtsbehandlungen-Wellness-Massagen05.jpg" alt="SIMONE HOFER - WELLNESSMASSAGEN">
                <figcaption>weitere Treatments</figcaption>
            </figure>
        </div>
        <div class="treatments">
            <card-treatment>
                <template slot="header">Natürliche Haarentfernung</template>
                <template slot="description">
                    <p>(Sugaring)</p>
                    <ul class="list list--treatment">
                        <li>halbe Beine Unterschenkel <span class="price">60.- CHF</span></li>
                        <li>ganze Beine Oberschenkel und Unterschenkel <span class="price">90.- CHF</span></li>
                        <li>Brust/Rücken <span class="price">80.- CHF</span></li>
                        <li>Oberlippe <span class="price">35.- CHF</span></li>
                        <li>Oberlippe während Kosmetikbehandlung <span class="price">25.- CHF</span></li>
                    </ul>
                </template>
            </card-treatment>
            <card-treatment>
                <template slot="header">Zusatzbehandlungen</template>
                <template slot="description">
                    <ul class="list list--treatment">
                        <li>Wimpern färben <span class="price">35.- CHF</span></li>
                        <li>Wimpern färben während Kosmetikbehandlung <span class="price">30.- CHF</span></li>
                        <li>Brauen färben und formen <span class="price">40.- CHF</span></li>
                        <li>Brauen färben während Kosmetikbehandlung <span class="price">20.- CHF</span></li>
                        <li>Wimpern und Brauen färben <span class="price">65.- CHF</span></li>
                        <li>Wimpern und Brauen färben während Kosmetikbehandlung <span class="price">45.- CHF</span></li>
                    </ul>
                </template>
            </card-treatment>
            <card-treatment>
                <template slot="header">Maniküre</template>
                <template slot="description">
                    <p>Handbad, Nagelhaut entfernen, Nägel kürzen und feilen, auf Wunsch lackieren oder polieren, Handmaske, Handmassage</p>

                </template>
                <p slot="price">circa 60 min / 80.-CHF</p>
            </card-treatment>
        </div>
    </section>
</template>
<script type="text/babel">
  import CardTreatment from '~/components/TreatmentCard.vue'
  export default {
    name: 'ExtraTreatments',
    components: {
      CardTreatment
    },
    props: {},
  }
</script>
<style lang="scss" scoped>

    .treatments {
        width: 100%;
        padding: 0 $padding-mobile 0 $padding-desktop;

    }
    @include tablet {
        .container {
            padding-right: $padding-desktop;
            padding-left: $padding-desktop;
        }

        .treatments {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: $padding-desktop * 0.5;
            padding-left: $padding-desktop * 3;
            padding-right: $padding-desktop * 2;
        }
    }
</style>
