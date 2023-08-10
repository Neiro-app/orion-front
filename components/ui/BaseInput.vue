<template>
  <div class="form-group">
    <input
      class="form-input"
      :type="props.type"
      :name="props.name"
      :value="props.value"
      :checked="checked"
      :id="props.id"
      @input="$emit('update:modelValue', $event.target.value)"
      v-model="checked"
    />
    <label
      class="form-label"
      :class="[props.type === 'checkbox' ? 'form-label--checkbox' : '']"
      :for="props.id"
    >
      <div class="inline-block mr-3.5" v-if="props.type === 'checkbox'">
        <svg
          v-if="!checked"
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <circle cx="18.9683" cy="18.1882" r="18" fill="white" />
          <rect
            x="11.4683"
            y="10.6882"
            width="15"
            height="15"
            rx="4"
            fill="url(#paint0_linear_1328_615)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1328_615"
              x1="22.2573"
              y1="4.86087"
              x2="29.1993"
              y2="26.3233"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CAF9FF" />
              <stop offset="1" stop-color="#C2E6FF" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <rect
            x="0.968262"
            y="0.188232"
            width="36"
            height="36"
            rx="10"
            fill="url(#paint0_linear_1604_1949)"
          />
          <rect
            x="11.4683"
            y="10.6882"
            width="15"
            height="15"
            rx="5"
            fill="url(#paint1_linear_1604_1949)"
          />
          <path
            d="M16.8056 23.1984L9.02246 14.1611"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="square"
          />
          <path
            d="M30.7493 9.25488L16.8057 23.1985"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="square"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1604_1949"
              x1="26.862"
              y1="-13.7974"
              x2="43.5229"
              y2="37.7123"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CAF9FF" />
              <stop offset="1" stop-color="#C2E6FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1604_1949"
              x1="22.2573"
              y1="4.86087"
              x2="29.1993"
              y2="26.3233"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CAF9FF" />
              <stop offset="1" stop-color="#C2E6FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <slot />
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
    default: "text",
  },
  name: String,
  checked: {
    type: Boolean,
    required: false,
    default: false,
  },
  id: "",
  value: "",
});

let checked = ref(false);

defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.form-label {
  @apply relative inline-flex items-center justify-center px-[26px] lg:px-6 rounded-[60px] text-[26px] lg:text-2xl leading-[65px] lg:leading-[56px] bg-gradient-to-b from-gradient-start to-gradient-end cursor-pointer  hover:from-primary hover:to-secondary hover:text-white;
}

.form-input {
  @apply hidden;

  &:checked ~ .form-label {
    @apply bg-white text-black bg-none after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-[60px] after:border-[1.5px] after:border-black;
  }
}
</style>
