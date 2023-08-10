<template>
  <div
    class="flex flex-col h-[406px] p-[50px] block-outline"
  >
    <div class="flex items-center mb-[34px] content-between tracking-[-0.01em]">
      <h3 class="text-[20px] leading-[24px]">Рейтинг одобрения</h3>
      <span class="text-[86px] leading-[60px]">{{ rating }}</span>
    </div>
    <div class="flex flex-col gap-1">
      <div v-for="(item, i) in ratingData" :key="i">
        <div class="flex items-center gap-4">
          <component :is="item.component" />
          <div
            class="relative w-full h-[10px] rounded-[60px] bg-gradient-to-b from-gradient-start to-gradient-end"
          >
            <span
              class="absolute h-full top-0 left-0 rounded-[60px] bg-gradient-bright"
              :style="{
                width: `${item.value}px`,
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconSmileGreat from "~/components/icons/IconSmileGreat.vue";
import IconSmileGood from "~/components/icons/IconSmileGood.vue";
import IconSmileFine from "~/components/icons/IconSmileFine.vue";
import IconSmileBad from "~/components/icons/IconSmileBad.vue";
import IconSmileAngry from "~/components/icons/IconSmileAngry.vue";

const ratingData = [
  { component: IconSmileGreat, value: 90 },
  { component: IconSmileGood, value: 70 },
  { component: IconSmileFine, value: 47 },
  { component: IconSmileBad, value: 30 },
  { component: IconSmileAngry, value: 11 },
];

defineProps({
  rating: {
    type: String,
    default: "",
  },
});
</script>
