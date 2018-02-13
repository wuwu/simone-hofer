<template>
    <section id="intro" class="container">
        <h2 class="title is-4">{{post.title}}</h2>
        <div class="mood mood--image">
            <figure>
                <img :src="getCorrectImagePath(post.image)" alt="SIMONE HOFER - WELLNESSMASSAGEN">
            </figure>
        </div>
        <div class="section-content">
            <vue-markdown :source="post.text"></vue-markdown>
        </div>
    </section>
</template>
<script type="text/babel">
  export default {
    name: 'Intro',
    props: ['post'],
    data() {
      return {
        model: '# Hello World!'
      }
    }
  }
</script>
<style lang="scss" scoped>
    .container {

    }
    .title {
        font-size: 32px;
        @include mobile {
            margin-top: 16px;
        }
    }
    .mood {
        flex: 1;

        figure {
            padding-right: $padding-mobile;
            padding-left: $padding-mobile;
        }
    }
    h2 {
        padding-left: $padding-mobile;
        padding-right: $padding-mobile;
    }
    .section-content p {
        padding-left: $padding-desktop;
        padding-right: $padding-mobile;
    }

    @include tablet {
        .container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            flex-direction: row;
        }
        .section-content {
            font-size: 36px;
            line-height: 38px;

            p {
                padding-left: $padding-desktop * 2;
                padding-right: $padding-desktop;
            }
        }

        .title {
            padding-left: $padding-desktop * 2;
            flex: 35%;
        }

        .mood {
            flex: 65%;

            figure {
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
<style lang="scss">

    .section-content p {
        padding-left: $padding-desktop;
        padding-right: $padding-mobile;
    }

    .motto {
        padding: 0;
        width: 100%;
        margin-top: 64px;
        margin-bottom: 64px;
        margin-left: 0;
        margin-right: 0;
        padding-top: 32px;
        padding-bottom: 32px;
    }
    @include tablet {

        .section-content p {
            padding-left: $padding-desktop * 2;
            padding-right: $padding-desktop;
        }
    }

    @include desktop {
        .section-content p {
            padding-left: $padding-desktop * 4;
            padding-right: $padding-desktop * 2;
        }
    }
</style>