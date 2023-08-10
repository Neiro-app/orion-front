<template>
  <div
    class="flex gap-[63px] h-[406px] p-[50px] block-outline"
  >
    <div class="w-[240px] h-[294-px]">
      <img class="w-full h-auto object-cover" :src="image" :alt="name" />
    </div>
    <div class="flex flex-col items-start justify-between">
      <h3 class="text-[40px] leading-[48px] tracking-[-0.02em]">{{ name }}</h3>
      <div class="flex flex-col">
        <div
          class="grid grid-cols-[repeat(2,_max-content)] gap-x-[11px] gap-y-[15px] mb-[30px] items-end"
        >
          <span class="text-sm tracking-[-0.01em]">Лучшая цена:</span>
          <span class="text-[32px] leading-[32px] tracking-[-0.03em]">{{
            price
          }}</span>
          <span class="text-sm tracking-[-0.01em]">На сайте:</span>
          <img class="object-cover" :src="source" alt="Источник" />
        </div>
        <div class="flex items-center gap-6">
          <BaseButton arrow blue>Купить</BaseButton>
          <BaseButton arrow to="/">Подробно о товаре</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";

defineProps({
  image: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  price: {
    type: String,
    default: null,
  },
  source: {
    type: String,
    default: null,
  },
});
</script>
