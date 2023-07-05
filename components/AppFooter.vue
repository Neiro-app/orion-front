<script setup>
  import SocialIcon from "./UI/socialcon.vue";

  const icons = ["tiktok", "youtube", 'instagram', 'vk', 'facebook', 'twitter', 'telegram'];
  let footer = ref(null);

  const { $ScrollTrigger } = useNuxtApp();


  onMounted(() => {
    $ScrollTrigger.create({
      trigger: footer.value,
      markers: false,
      start: 'top 40%',
      onEnter: () => footer.value.classList.add("is-active"),
      onLeave: () => footer.value.classList.remove("is-active"),
      onEnterBack: () => footer.value.classList.add("is-active"),
      onLeaveBack: () => footer.value.classList.remove("is-active"),
    });
  });
</script>

<template>
  <footer class="footer" ref="footer">
    <div class="container">
      <div class="footer__block">
        <Logo :footerLogo="true" />
        <p class="footer__text">
          Нейро в Telegram - такой же умный, как и на сайте
        </p>
        <nuxt-link
          class="inline-flex items-center border-2 rounded-full border-black py-1 px-5 text-xl leading-7 text-black mt-7"
          href="https://t.me/neiro_bot"
          target="_blank"
          rel="noopener"
        >
          Перейти в Telegram
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-[15px] h-[15px] ml-2.5 stroke-current"
            viewBox="0 0 15 15"
          >
            <path
              d="M1.29056 13.3576L13.5 1.14819M13.5 1.14819L4.34292 1.14819M13.5 1.14819L13.5 10.3053"
              stroke-width="1.5"
              stroke-linecap="square"
            />
          </svg>
        </nuxt-link>
      </div>
      <div class="footer__animation">
        <SocialIcon :name="icons" :animation="true" />
      </div>
      <div class="footer__copyright">
        <p class="text-lg lg:text-base leading-6">
          &copy; Нейро 2023. Все права защищены
        </p>
        <nuxt-link
          class="inline-block text-lg lg:text-sm leading-6 lg:leading-5 mt-4 lg:mt-[13px] hover:text-primary transition-all duration-300 ease-in-out"
          to="/policy"
          >Политика конфиденциальности</nuxt-link
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    @apply relative mt-auto pt-[231px] pb-[30px] overflow-hidden;
    &__block {
      @apply lg:max-w-[40%];
    }

    &__text {
      @apply mt-8 lg:mt-9 font-normal text-3xl lg:text-[32px] leading-[38px] lg:leading-10 tracking-[-0.03em];
    }

    &__copyright {
      @apply mt-[60px] lg:mt-28 text-black font-normal;
    }

    &__animation {
      @apply relative lg:static mt-[22px] lg:mt-0 h-[384px] lg:h-auto;
    }
  }
</style>
