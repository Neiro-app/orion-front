<template>
  <nuxt-link
    class="flex items-center gap-[14px] text-sm tracking-[-0.01em]"
    to="/"
  >
    <IconArrowLeft />
    <slot />
  </nuxt-link>
</template>

<script setup>
import IconArrowLeft from "~/components/icons/IconArrowLeft.vue";

defineProps({
  to: {
    type: String,
    default: "",
  },
});
</script>
