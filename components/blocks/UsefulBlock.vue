<template>
  <section class="relative flex items-end justify-between pt-[158px] pb-15">
    <div class="flex flex-col">
      <h2 class="mb-[33px] text-[54px] leading-[60px] tracking-[0.02em]">
        Этот рейтинг<br />
        был полезен?
      </h2>
      <div class="flex items-center gap-3">
        <button
          class="flex items-center gap-3 px-[30px] py-2 text-[24px] leading-[34px] block-outline"
        >
          <IconYes />
          Да
        </button>
        <button
          class="flex items-center gap-3 px-[30px] py-2 text-[24px] leading-[34px] block-outline"
        >
          <IconNot />
          Нет
        </button>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="mb-[28px] text-sm tracking-[-0.01em]">
        Сохраняй рейтинг у себя в<br />
        Избранном и делись с друзьями!
      </div>
      <LikeActions />
    </div>
    <IconArrowLoop class="absolute right-[120px] bottom-[110px] scale-[0.8]" />
  </section>
</template>
<script setup lang="ts">
import IconYes from "~/components/icons/IconYes.vue";
import IconNot from "~/components/icons/IconNot.vue";
import LikeActions from "~/components/elements/LikeActions.vue";
import IconArrowLoop from "~/components/icons/IconArrowLoop.vue";
</script>
