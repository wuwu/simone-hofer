<template>
  <div id="back-scrolltop" class="row" v-if="scrolled">
    <div class="small-12 column">
      <span @click.prevent="scrollTop" class="button--scrolltop">
        <img src='~/assets/images/to-top.png' width="54" height="54"/>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ButtonScrollTop',
    props: [
      'target'
    ],
    data() {
      return {
        scrolled: false
      }
    },

    methods: {
      scrollTop() {
        const element = document.body
        const to = 0
        const duration = 100
        if (duration < 0) return
        var difference = to - element.scrollTop
        var perTick = difference / duration * 2

        setTimeout(function () {
          element.scrollTop = element.scrollTop + perTick
          scrollTo(element, to, duration - 2)
        }, 50)
      },
      handleScroll() {
        this.scrolled = window.scrollY > 0
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
<style lang="scss" scoped>
  .button--scrolltop{
    position: fixed;
    z-index: 100;
    right:0;
    bottom: 25px;
    padding-right: $padding-mobile;
    margin-bottom: 25px;
    margin-top: 25px;
    background-color: transparent;
    &:hover{
      cursor: pointer;
     }
    @include tablet {
      padding-right: $padding-desktop;
    }
    .svg-fill{
        fill: rgba($primary, .55);
        path{
          fill: $white;
        }
    }

  }
</style>
