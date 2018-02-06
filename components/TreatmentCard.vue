<template>
    <div class="card card--treatment">
        <h3 class="title">
            <slot name="header"></slot>
        </h3>
        <slot name="description"></slot>
        <p class="price">
            <slot name="price">

            </slot>
        </p>
        </div>
</template>
<script type="text/babel">
  export default {
    name: 'Massage',
    components: {
    },
    props: {},
  }
</script>
<style lang="scss" scoped>
    .card--treatment {
        width: 100%;
        margin-bottom: $padding-desktop;
    }
    .title {
        color: $primary;
        font-size: 36px;
    }
    ul {
        list-style-type: disc;
        padding-left: 32px;
    }
    .price {
        margin-top: $padding-mobile;
        font-weight: 900;
    }
</style>
