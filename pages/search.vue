<template>
  <div class="search">
    <div class="search__block">
      <div class="search__header">
        <h1 class="search__title" ref="title">
          <span v-html="products[counter].title"></span>
        </h1>
        <div class="search__step">
          <div class="search__step--white">
            <p class="search__step-title">Шаг {{ counter + 1 }}</p>
            <p
              class="search__step-subtitle"
              v-html="products[counter].subtitle"
            ></p>
            <div class="search__step-counter">
              {{ counter + 1 }}/{{ products.length }}
            </div>
            <svg
              class="search__line"
              ref="step"
              xmlns="http://www.w3.org/2000/svg"
              width="146"
              height="72"
              viewBox="0 0 146 72"
              fill="none"
            >
              <path
                d="M17.6772 70.4943C33.5174 -12.3518 100.819 -3.38786 107.351 18.8934C110.706 30.3346 105.011 40.7263 96.1155 38.436C79.7224 34.2154 97.4796 8.78016 114.863 3.75692C136.018 -2.35612 146.631 7.03308 143.773 23.3431M17.6772 70.4943L41.978 54.0797M17.6772 70.4943L1.14629 46.2636"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </div>
          <div class="search__step--blue"></div>
        </div>
      </div>
      <form class="search__form" @submit.prevent="incrementCounter">
        <div class="search__categories" :class="[products[counter].className]">
          <BaseInput
            class="search__input"
            v-for="product in products[counter].data"
            :key="product.value"
            :type="products[counter].type"
            :value="product.value"
            :id="product.value"
            :name="products[counter].queryName"
            v-model="selected"
          >
            {{ product.title }}
          </BaseInput>
        </div>
        <div class="search__button">
          <button
            class="button-outline mb-3 lg:mb-0 lg:mr-[10px]"
            v-if="counter > 0"
          >
            Пропустить
          </button>
          <button class="button-outline" type="submit">Найти!</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "~/components/ui/BaseInput.vue";

const title = ref(null);
const step = ref(null);
const selected = ref([]);

const products = [
  {
    title: "Какой товар <br>найти?",
    subtitle: "Выберите из списка <br>категорию товара",
    subtitleInfo: null,
    emptyButton: true,
    queryName: "categories",
    type: "radio",
    data: [
      {
        title: "Телевизор",
        value: "tv",
      },
      {
        title: "Смартфон",
        value: "smartphones",
      },
      {
        title: "Планшет",
        value: "tablet",
      },
      {
        title: "Ноутбук",
        value: "laptop",
      },
      {
        title: "Холодильник",
        value: "fridge",
      },
      {
        title: "Пылесос",
        value: "cleaner",
      },
      {
        title: "Проектор",
        value: "projector",
      },
      {
        title: "Стиральная машина",
        value: "washer",
      },
      {
        title: "Посудомоечная машина",
        value: "dishwasher",
      },
      {
        title: "Фотоаппарат",
        value: "camera",
      },
      {
        title: "Нет нужного товара?",
        value: "empty",
      },
    ],
  },

  {
    title: "Айфон<br> или андроид?",
    subtitle: "Выберите один из вариантов",
    subtitleInfo:
      "<h2>Айфон или андроид?</h2><p>Андроид с Айфоном представляют собой электронный гаджеты, смартфоны. Android выпускают довольно много производителей, вроде Samsung, LG, Lenovo и прочих. Производством iPhone занимается только одна компания, Apple. Этот же производитель старается тщательно отслеживать качество своего гаджета и не даёт возможность использовать на нём софт сторонних производителей. <br><br>Составные части Айфона, вроде соединений по USB тоже не позволяют пользователю сделать выбор. В то же время, кабели для Android отлично подходят друг к другу. Площадка iPhone держит внутренний программный код, который создаёт лишь яблочная компания. <br><br>Наиболее значительное различие между ними, это их мобильная система, экосистема. Например, iPhone iOS более совершенна, чем ОС Андроид. Оперативная система Android практически аналог ОС КПК.</p>",
    queryName: "options",
    type: "checkbox",
    data: [
      {
        title: "Айфон",
        value: "ios",
      },
      {
        title: "Андроид",
        value: "android",
      },
      {
        title: "Не важно",
        value: "",
      },
    ],
  },

  {
    title: "Какие параметры<br> для вас важны?",
    subtitle: "Выберите нужные характеристики",
    queryName: "property",
    className: "flex-col items-start",
    type: "checkbox",
    data: [
      {
        title: "Большой экран",
        value: "big-screen",
      },
      {
        title: "Большая встроенная память",
        value: "memory",
      },
      {
        title: "Фронтальная камера с высоким разрешением",
        value: "front-camera",
      },
      {
        title: "Защита от воды",
        value: "water-resistant",
      },
    ],
  },

  {
    title: "Сколько вы<br> готовы потратить?",
    subtitle: "Выберите один из вариантов",
    queryName: "price",
    type: "checkbox",
    data: [
      {
        title: "До 15 000 ₽",
        value: "15000",
      },
      {
        title: "От 15 000 ₽ до  40 000 ₽",
        value: "15000&40000",
      },
      {
        title: "От 40 000 ₽ и выше",
        value: "40000",
      },
    ],
  },
];

const { $gsap } = useNuxtApp();
var tl = $gsap.timeline();
onMounted(() => {
  tl.from(".search__title span", { opacity: 0, translateY: 50, delay: 1 })
    .fromTo(
      ".search__step--white",
      { opacity: 0 },
      { rotation: "10deg", opacity: 1 },
    )
    .to(".search__step--blue", {
      rotation: "-10deg",
      left: -25,
      opacity: 1,
      onStart: function () {
        title.value.classList.add("is-active");
        step.value.classList.add("is-active");
      },
    })
    .from(".search__categories", { opacity: 0 })
    .from(".search__button", { opacity: 0 });
});

let counter = ref(0);

const incrementCounter = () => {
  title.value.classList.remove("is-active");
  step.value.classList.remove("is-active");
  tl.restart();
  counter.value++;
};
</script>

<style lang="scss" scoped>
.search {
  @apply mt-[60px] mb-[70px];
  &__header {
    @apply flex items-start justify-between;
  }

  &__title {
    @apply scale-150 origin-left text-[64px] lg:text-[80px] leading-[72px] lg:leading-[80px] tracking-[-1.92px] lg:tracking-[-2.4px] text-black overflow-hidden transition-all duration-300;

    &.is-active {
      @apply scale-100;
    }

    span {
      @apply block;
    }
  }

  &__step {
    @apply relative w-[220px];
    &--white {
      @apply p-10 rounded-[40px] opacity-0 text-black border-[1.5px] border-black bg-white transition-all duration-300;
    }

    &--blue {
      @apply absolute top-0 left-[-25px] block opacity-0 w-full h-full rounded-[40px] bg-gradient-to-r from-gradient-start to-gradient-end z-[-1];
    }

    &-title {
      @apply mb-[7px] text-[28px] leading-9 tracking-[-0.28px];
    }

    &-subtitle,
    &-counter {
      @apply text-sm leading-5 tracking-[-0.14px];
    }

    &-subtitle {
      @apply mb-[26px];
    }
  }

  &__line {
    @apply absolute left-[-90%] bottom-[-60px];

    path {
      stroke-dasharray: 300;
      stroke-dashoffset: 300;
    }

    &.is-active {
      path {
        animation: strokeanim 700ms alternate forwards;
      }
    }
  }

  &__form {
    @apply mt-10;
  }

  &__categories {
    @apply flex flex-wrap;
  }

  &__input {
    @apply mr-2 mb-2 odd:rounded-[14px];
  }

  &__button {
    @apply flex flex-wrap lg:flex-nowrap mt-[30px] lg:mt-8;

    button {
      @apply w-full;
    }
  }
}

@keyframes strokeanim {
  to {
    stroke-dashoffset: 600;
  }
}
</style>
