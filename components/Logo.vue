<template>
  <router-link to="/" class="logo">
    <img
      class="logo__image"
      src="/logo.svg"
      alt="logo"
      width="45"
      height="36"
    />
    <span class="text-[0]" v-if="!footerLogo">Нейро</span>
    <span v-if="footerLogo">@neiro_bot</span>
  </router-link>
</template>

<script setup>
  const props = defineProps({
    footerLogo: {
      type: Boolean,
      required: false,
      default: false,
    },
  });
</script>

<style lang="scss" scoped>
  .logo {
    @apply inline-flex items-center text-3xl lg:text-2xl leading-[34px] font-normal text-black no-underline;

    &__image {
      @apply inline-block mr-2.5;
    }
  }
</style>
