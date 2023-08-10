<template>
  <section class="flex flex-col items-center">
    <div class="flex flex-col gap-[100px] mb-[65px]">
      <div v-for="(result, i) in results" :key="i" class="flex flex-col">
        <div class="flex items-center w-full mb-[27px]">
          <span
            class="flex items-center justify-center w-[45px] h-[45px] text-[24px] leading-[34px] rounded-full bg-gradient-to-b from-gradient-start to-gradient-end"
            >{{ i + 1 }}.</span
          >
          <span class="ml-[18px] text-[28px] leading-[36px]"
            >Лучший вариант</span
          >
          <LikeActions class="ml-auto" />
        </div>
        <div class="flex items-center gap-1">
          <ResultsCard
            :name="result.name"
            :image="result.image"
            :price="result.price"
            :source="result.source"
            class="max-w-[807px]"
          />
          <RatingCard rating="9,5" class="w-[33%]" />
        </div>
      </div>
    </div>
    <div class="flex items-center gap-[9px] w-full">
      <BaseButton big blue class="max-w-[807px] w-full">Показать еще 7 товаров</BaseButton>
      <BaseButton big outline class="max-w-[389px] w-full">Удиви меня!</BaseButton>
    </div>
  </section>
</template>

<script setup>
import ResultsCard from "~/components/elements/ResultCard.vue";
import RatingCard from "~/components/elements/RatingCard.vue";
import BaseButton from "~/components/ui/BaseButton.vue";

import phone from "../../assets/images/mock/phone.jpg";
import yandexLogo from "../../assets/images/mock/yandex-logo.jpg";
import LikeActions from "~/components/elements/LikeActions.vue";

const results = [
  {
    name: "Смартфон Xiaomi 11T 8/128 ГБ Global",
    image: phone,
    price: "32 000 ₽",
    source: yandexLogo,
  },
  {
    name: "Смартфон Xiaomi 11T 8/128 ГБ Global",
    image: phone,
    price: "32 000 ₽",
    source: yandexLogo,
  },
  {
    name: "Смартфон Xiaomi 11T 8/128 ГБ Global",
    image: phone,
    price: "32 000 ₽",
    source: yandexLogo,
  },
];
</script>