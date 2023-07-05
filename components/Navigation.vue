<template>
  <nav class="nav">
    <ul class="nav__lists">
      <li class="nav__list" v-for="link in links" :key="link.id">
        <nuxt-link class="nav__link" :to="link.url">
          {{ link.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  defineProps({
    links: {
      type: Array,
      required: false,
    },
  });
</script>

<style lang="scss" scoped>
  .nav {
    @apply fixed lg:static inset-0 bg-white lg:bg-transparent p-5 lg:p-0 min-h-screen lg:min-h-full overflow-y-auto overflow-x-hidden	lg:overflow-auto translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100	 invisible lg:visible transition-all duration-300	ease-in-out z-50;
    &__lists {
      @apply flex flex-wrap items-center flex-col lg:flex-row;
    }

    &__list {
      &:not(:last-child) {
        @apply lg:mr-5;
      }
    }

    &__link {
      @apply inline-block py-3 lg:py-0 font-normal text-lg leading-5 text-black hover:text-primary no-underline transition-all duration-300 ease-in-out;
    }
  }
</style>
