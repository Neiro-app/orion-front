// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover",
    },
  },

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Manrope: true,
          download: true,
          inject: true,
        },
      },
    ],
    "@nuxtjs/tailwindcss",
    "@hypernym/nuxt-gsap",
  ],

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },

  css: ["assets/css/main.css"],

  build: {
    transpile: ["gsap"],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
