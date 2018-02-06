<template>
    <section id="intro" class="container">
        <h2 class="title is-4">Für Sie & Ihn</h2>
        <div class="mood mood--image">
            <figure>
                <img src="/images/Nina-simone-hofer-naturkosmetik_Gesichtsbehandlungen-Wellness-Massagen03.jpg" alt="SIMONE HOFER - WELLNESSMASSAGEN">
            </figure>
        </div>
        <div class="section-content">
            <p>Aus Liebe <br/>
                zu Mensch und Tier,<br/>
                Natur und Umwelt – die ganzheitliche,
                individuelle Behandlung mit natürlichen Produkten liegt mir besonders am
                Herzen. Versuche mit Kosmetik an Tieren lehne ich ab. Ebenso alle chemischen
                Zusatzstoffe in der Kosmetik wie Silikone,
                Parabene, PEG, synthetische Duft-, Farb- und Konservierungsstoffe, Sulfate, Aluminiumchlorid, Nanopartikel,
                Hormone, Pestizide, Minerale und
                GMO (genveränderte pflanzliche
                Wirkstoffe).</p>
            <p>Als ausgebildete, diplomierte Naturkosmetikerin verwende ich nur Rohstoffe
                aus kontrolliert biologischem Anbau
                mit hoher Qualität, die nachweislich
                Bio-zertifiziert sind.</p>
            <p>Mit meiner Behandlung möchte ich Ihnen das Zusammenspiel von Mensch und
                Natur näher bringen.</p>
            <p class="motto has-bg">
                <strong>Mein Motto:</strong><br/>
                <span class="is-primary">Entspannen, Wohlfühlen, Genießen.</span>
            </p>
            <p>Ich freue mich auf Ihren Besuch,<br/>
                mit herzlichen Grüßen, <br/>
                <strong>Ihre Nina Simone Thalhofer</strong></p>
        </div>
    </section>
</template>
<script type="text/babel">
  export default {
    name: 'Intro',
    components: {
    },
    props: {},
  }
</script>
<style lang="scss" scoped>
    .container {
        display: grid;
        grid-template-columns: 40% auto;
    }
    .title {
        font-size: 32px;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }
    .mood {
        grid-column: 2 / 3;
        grid-row: 1 / 2;

        figure {
            padding-right: $padding-desktop;
        }
    }
    .section-content {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
    }
    .motto {
        padding: 0;
        width: 100%;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 0;
        margin-right: 0;
        padding-top: 16px;
        padding-bottom: 16px;

        @include app-padding;
    }
    @include tablet {
        .section-content {
            font-size: 36px;
            line-height: 38px;

            p {
                padding-left: $padding-desktop * 2;
                padding-right: $padding-desktop;
            }
        }

    }

    @include desktop {
        h2, .section-content p {
            padding-left: $padding-desktop * 4;
            padding-right: $padding-desktop * 2;
        }
    }
</style>
