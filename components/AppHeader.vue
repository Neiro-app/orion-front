<script setup>
  import LikeLink from "./UI/LikeLink.vue";
  import ProfileLink from "./UI/ProfileLink.vue";
  import BurgerMenu from "./UI/BurgerMenu.vue";

  const navigation = [
    {
      url: "/reviews",
      name: "Обзоры и рейтинги",
    },
    {
      url: "/about",
      name: "О нас",
    },
    {
      url: "/faqs",
      name: "Помощь",
    },
    {
      url: "/contacts",
      name: "Контакты",
    },
  ];
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <Logo />
        <div class="header__navigation">
          <Navigation :links="navigation" />
          <nuxt-link class="button button-primary ml-[25px]" to="/search">
            Новый поиск
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                d="M0.899933 0.929962L13.1094 13.1394M13.1094 13.1394V3.98232M13.1094 13.1394H3.95229"
                stroke-width="1.5"
                stroke-linecap="square"
              />
            </svg>
          </nuxt-link>
        </div>

        <div class="header__links">
          <LikeLink />
          <ProfileLink />
        </div>
        <div class="header__burger">
          <BurgerMenu />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    @apply py-[23px];
    &__wrapper {
      @apply flex items-center justify-between;
    }

    &__links {
      @apply hidden lg:flex items-center flex-wrap;
    }

    &__navigation {
      @apply flex items-center flex-wrap;
    }

    &__burger {
      @apply lg:hidden;
    }
  }

  .button {
    @apply flex items-center justify-center border-none px-0 font-normal text-lg text-black no-underline leading-4 transition-all duration-300;

    svg {
      @apply inline-block ml-3 w-3.5 h-3.5 stroke-black transition-all duration-300;
    }

    &-primary {
      @apply py-3 px-6 rounded-[60px] bg-[#EBFDFF] hover:text-white hover:bg-primary;

      &:hover {
        svg {
          @apply stroke-white;
        }
      }
    }
  }
</style>
