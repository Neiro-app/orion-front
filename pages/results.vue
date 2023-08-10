<template>
  <div class="flex flex-col">
    <sections class="flex flex-col pt-[46px] pb-[21px]">
      <BackButton class="mb-[33px]" to="/">
        Вернуться к настройкам запроса
      </BackButton>
      <h1
        class="relative mb-[64px] text-[110px] leading-[110px] lg:tracking-[-0.03em]"
      >
        Лучшие варианты<br />
        по запросу
        <IconArrowLoop class="absolute right-0 bottom-[-60px]" />
      </h1>
      <div class="flex items-center gap-1 mb-[35px]">
        <FilterPanel />
        <LikeActions />
        <BaseButton class="ml-auto" arrow>Отчет о поиске</BaseButton>
      </div>
      <div class="text-sm tracking-[-0.01em]">
        Сбор информации: 185 сайтов<br />
        Актуально на 20 мая 2023 г., 15:30
      </div>
    </sections>
    <ResultsBlock />
    <UsefulBlock />
  </div>
</template>

<script setup>
import FilterPanel from "~/components/elements/FilterPanel.vue";
import ResultsBlock from "~/components/blocks/ResultsBlock.vue";
import LikeActions from "~/components/elements/LikeActions.vue";
import BaseButton from "~/components/ui/BaseButton.vue";
import BackButton from "~/components/ui/BackButton.vue";
import IconArrowLoop from "~/components/icons/IconArrowLoop.vue";
import UsefulBlock from "~/components/blocks/UsefulBlock.vue";
</script>
