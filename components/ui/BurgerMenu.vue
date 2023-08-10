<template>
  <button class="burger">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
.burger {
  @apply relative w-[48px] h-[29px] p-0 after:content-[''] after:absolute after:top-[-12px] after:left-0 after:w-[50px] after:h-[50px] after:border after:border-transparent after:rounded-full after:transition-all after:duration-300	after:ease-in-out;

  span {
    @apply absolute left-0 w-full h-[2px] m-auto bg-black transition-all duration-300 ease-in-out;

    &:nth-child(1) {
      @apply top-0;
    }
    &:nth-child(2) {
      @apply inset-y-0;
    }
    &:nth-child(3) {
      @apply bottom-0;
    }
  }

  &.is-active {
    @apply after:border-black;
    span {
      @apply w-[18px];
      &:nth-child(1) {
        @apply rotate-45 bottom-[2px] right-[-2px];
      }
      &:nth-child(2) {
        @apply opacity-0;
      }
      &:nth-child(3) {
        @apply -rotate-45 top-[-2px] right-[-2px];
      }
    }
  }
}
</style>
