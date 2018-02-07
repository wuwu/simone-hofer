<template>
    <div class="logo">
        <img src="~/assets/images/simonehofer_naturkosmetik.png" width="360px">
    </div>
</template>

<style lang="scss" scoped>
    .logo {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: $padding-mobile *2;
        @include tablet {
            margin-bottom: $padding-desktop * 2;
        }
    }
    img {
        max-width: 360px;
        height: auto;
    }
</style>