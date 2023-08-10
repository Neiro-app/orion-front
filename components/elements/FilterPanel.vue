<template>
  <div class="flex items-center gap-1">
    <FilterPanelItem v-for="(filter, i) in filters" :key="i" :name="filter" />
  </div>
</template>

<script setup>
import FilterPanelItem from "./FilterPanelItem.vue";

const filters = ["Смартфон", "От 15 000 ₽ до  40 000 ₽", "Андроид"];
</script>
