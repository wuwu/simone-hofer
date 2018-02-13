<template>
    <section id="face" class="container has-bg">
        <vue-markdown :source="post.intro" class="is-large"></vue-markdown>
        <figure>
            <img :src="getCorrectImagePath(post.image)" alt="SIMONE HOFER - WELLNESSMASSAGEN">
            <figcaption>{{post.title}}</figcaption>
        </figure>
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
    name: 'Facial',
    components: {
      CardTreatment
    },
    props: ['post']
  }
</script>
<style lang="scss" scoped>

    .container {
        margin-right: 0;
        margin-left: 0;
    }

    .is-large {
        padding-top: $padding-desktop;
        padding-bottom: $padding-desktop;
        padding-left: $padding-desktop * 2;
        padding-right: $padding-desktop*2;
    }

    .treatments {
        width: 100%;
        padding-left: $padding-desktop;
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
        .is-large {
            font-size: 28px;
            padding-top: $padding-desktop;
            padding-bottom: $padding-desktop;
            padding-left: $padding-desktop * 3;
            padding-right: $padding-desktop*2;
        }
    }

</style>
