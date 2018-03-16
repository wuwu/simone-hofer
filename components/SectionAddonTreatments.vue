<template>
    <section id="extra" class="container has-bg">
        <div class="mood mood--image">
            <figure>
                <img :src="getCorrectImagePath(post.image)" alt="SIMONE HOFER - WELLNESSMASSAGEN">
                <figcaption>{{post.title}}</figcaption>
            </figure>
        </div>
        <div class="treatments">
            <card-treatment class="card" v-for="(treat, index) in post.treatment" :key="index">
                <template slot="header">{{treat.title}}</template>
                <template slot="description">
                    <vue-markdown :source="treat.text"></vue-markdown>
                </template>
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
    props: ['post']
  }
</script>
<style lang="scss" scoped>

    .treatments {
        width: 100%;
        padding: 0 $padding-mobile 0 $padding-desktop;

    }
    @include tablet {
        .container {
            margin-right: $padding-desktop;
            margin-left: $padding-desktop;
        }

        .treatments {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            flex-direction: row;
            padding-left: $padding-desktop * 3;
            padding-right: $padding-desktop * 2;

            > div {
                flex: 50%;
            }
        }
    }
</style>
