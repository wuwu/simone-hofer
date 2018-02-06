<template>
    <section id="intro" class="container">
        <h2 class="title is-4">Für Sie & Ihn</h2>
        <div class="mood mood--image">
            <figure>
                <img src="/images/Nina-simone-hofer-naturkosmetik_Gesichtsbehandlungen-Wellness-Massagen01.jpg" alt="SIMONE HOFER - WELLNESSMASSAGEN">
            </figure>
        </div>
        <div class="section-content">
            <p>Aus Liebe zu Mensch und Tier, Natur und Umwelt – die ganzheitliche,
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
        grid-gap: 1em;
        grid-template-areas:
            "title mood"
            "content content";
    }
    .title {
        grid-area: title;
    }
    .mood {
        grid-area: mood;
    }
    .section-content {
        grid-area: content;
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
</style>
