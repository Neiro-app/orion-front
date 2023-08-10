<template>
  <div class="flex items-center gap-2.5 w-fit pt-[6.5px] pr-[6.5px] pb-[6.5px] pl-[18px] block-outline">
    <span class="text-xl items-center  tracking-[-0.01em]">{{ name }}</span>
    <button class="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-gradient-to-b from-gradient-start to-gradient-end"><Close /></button>
  </div>
</template>

<script setup>
import Close from "../icons/IconClose.vue";

const props = defineProps({
  name: String,
});
</script>

