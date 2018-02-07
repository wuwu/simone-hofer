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
                <p>Eine intensive Hautanalyse zur Bestimmung Ihres Hauttyps und deren Zusand, sowie die ausführliche Pflegeberatung sind die Basis für Ihre kosmetische Behandlung durch mich.</p>
                <p>Richtige Pflege bedeutet vor allem die natürlichen Funktionen der Haut zu unterstützen oder wiederherzustellen.<br>
                    Der Hauttyp und der Hautzustand ist entscheidend für die Wahl des richtigen Hautpflegeprodukts. Ebenfalls sollten Typgerechtes Make Up und typgerechte Sonnenpflegeprodukte verwendet werden. Alles frei von chemischen Zusatzstoffen, welche ihre Haut nachhaltig schädigen. Die Bedürfnisse der Haut können sich je nach Klima, Alter, Jahreszeit, hormonellen Schwankungen, Ernährung und Lebensweise, nicht zuletzt auch durch Krankheiten, verändern.<br>
                    Deshalb ist es wichtig Ihren persönlichen Hauttyp und Hautzustand zu kennen. Nur so kann eine gezielte Behandlung mit qualitativ hochwertigen Produkten zum Wohlbefinden ihrer Haut beitragen.</p>
                <p>Eine Hautanalyse setzt sich zusammen aus der Hautdiagnose und Ihrer persönlichen Anamnese.</p>
                <p>Wichtig für die Analyse sind das bestimmen Ihres Hauttypes und des Hautzustandes.</p>
                <p>Der Hauttyp ist ab der Pubertät bestimmbar und bleibt lebenslang erhalten.<br>
                    Veränderbar ist nur der Hautzustand unter Berücksichtigung des Hauttypes. Dieser kann sich oft mehrmals in einem Jahr verändern. Meist jedoch im Sommer und Winter. Das Wetter spielt dabei eine entscheidende Rolle. Im Winter ist die Luft oft trocken und kalt. Die Haut braucht vermehrt Feuchtigkeit und Fett. Im Sommer ist es oft warm und feucht, dementsprechend muss man auch die Hautpflege wieder anpassen. Das ist auch der Grund, warum man im Handel oft nicht die richtige Pflege findet. Obwohl man viel Geld bezahlt hat, bleibt ein Spannungsgefühl auf der Haut, sie fühlt sich zu fett oder trocken an und im schlimmsten Fall gibt es noch Ausschlag oder Juckreiz.</p>
                <p>Im Grunde genommen verhält es sich mit der Haut nicht anders, als mit Bekleidung. Gerne übernehme ich die «Bekleidung» Ihrer Haut durch fachgerechte Beratung.</p>
                <p><strong>Hautdiagnose</strong></p>
                <p>Bei der Diagnose wird die Hautfarbe, das Hautrelief, die Hautelastizität, die Hautspannung, die Hautfeuchtigkeit und der Fettgehalt bestimmt, ebenso die Sensibilität durch den Dermographismustest.</p>
                <p><strong>Persönliche Anamnese</strong></p>
                <p>Bei der persönlichen Anamnese ist es wichtig, Ihre Lebensumstände zu erfassen. Dazu gehören die Frage nach Ihrem Alter, Beruf, Krankheiten, Allergien, Lebensgewohnheiten, Stress, Medikamente, Ernährung, Bewegung.<br>
                    All diese Angaben unterliegen der Schweigepflicht. Sie sind auch nicht verpflichtet Angaben zu machen, jedoch wird eine gezielte Behandlung dann unter Umständen nicht zum gewünschten Erfolg führen.<br>
                    Wenn Ihre persönliche Analyse feststeht, dann kann ich Sie in der weiteren Pflege Ihrer Haut positiv unterstützen und Sie werden bald Erfolge feststellen.<br>
                    Wichtig dabei ist, dass Sie nach der Umstellung auf die biozertifizierten Produkte bitte nichts anderes mehr verwenden. Es wird bis zu drei Monate dauern, bis sich Ihre Haut an die neue, natürliche Pflege gewöhnt hat. Hautunreinheiten während dieser Umstellungsphase sind normal. Ihre Haut braucht Zeit um die bisherigen Stoffe abzubauen.<br>
                    Zusammenfassend kann ich Ihnen also versichern, dass ich bei meinen biokosmetischen Behandlungen nie allein bei der Betrachtung Ihrer Haut stehen bleibe, sondern steht’sdie gesamte Erscheinung, den allgemeinen Gesundheitszustand, sowie Ihren Lebensumstand mit einbeziehe.</p>
            </div>
        </div>
    <nuxt-link to="/">zurück</nuxt-link>
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
