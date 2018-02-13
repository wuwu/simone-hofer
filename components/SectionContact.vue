<template>
    <section id="contact" class="container">
        <div class="mood mood--image">
            <figure>
                <img :src="getCorrectImagePath(post.image)" alt="SIMONE HOFER - WELLNESSMASSAGEN">
                <figcaption>{{post.title}}</figcaption>
            </figure>
        </div>
        <div class="logo">
            <logo></logo>
        </div>
        <div class="card card--contact">
            <vue-markdown :source="post.text"></vue-markdown>
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
    props: ['post']
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
