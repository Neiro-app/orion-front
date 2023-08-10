<template>
  <component
    class="flex items-center justify-center w-fit text-black rounded-[60px] cursor-pointer"
    :class="[
      !blue && 'gap-2',
      blue && 'gap-[10px] px-[30px] py-2 text-white bg-gradient-bright',
      outline && 'px-[30px] py-2 border-[2px] border-black',
    ]"
    :is="to ? 'nuxt-link' : 'button'"
    @click="$emit('click')"
  >
    <span
      :class="[
        !blue && !big && 'text-[18px] leading-[28px] tracking-[-0.01em]',
        blue && 'text-[24px] leading-[34px]',
        big && 'text-[40px] leading-[48px] tracking-[-0.02em]',
      ]"
    >
      <slot />
    </span>
    <DiagonalArrowRightUp v-if="arrow" />
  </component>
</template>

<script setup>
import DiagonalArrowRightUp from "../icons/IconDiagonalArrowRightUp.vue";

defineProps({
  to: {
    type: String,
    default: "",
  },
  blue: {
    type: Boolean,
    default: false,
  },
  big: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  arrow: Boolean,
});
</script>
