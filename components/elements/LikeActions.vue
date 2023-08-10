<template>
  <div class="flex items-center gap-1">
    <button class="flex items-center justify-center w-[45px] h-[45px] block-outline">
      <IconHeart />
    </button>
    <button class="flex items-center justify-center w-[45px] h-[45px] block-outline">
      <IconShare />
    </button>
    <button class="flex items-center justify-center w-[45px] h-[45px] block-outline">
      <IconEllipsis />
    </button>
  </div>
</template>

<script setup>
import IconHeart from "~/components/icons/IconHeart.vue";
import IconShare from "~/components/icons/IconShare.vue";
import IconEllipsis from "~/components/icons/IconEllipsis.vue";
</script>
