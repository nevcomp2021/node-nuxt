import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "%s - SampleNuxtXX",
    title: "SNXX",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap"
      }
    ]
  },
  // server: {
  //   port: 9000, // default: 3000
  //   host: "0.0.0.0" // default: localhost
  // },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  env: {
    API_END: process.env.API_END,
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/vue-stripe.js", ssr: false },
    { src: "~/plugins/vue-crypto.js" }
  ],


  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)

  modules: [
    "@nuxtjs/axios",
    // "@nuxtjs/auth",
    "nuxt-stripe-module"
  ],
  axios: {
    baseURL: process.env.API_END
  },
  // authentication mechanism

  router: {


  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#000000", // black
          accent: colors.grey.darken3,
          secondary: "#FFFDFE", // white
          info: "#FF914D", // orange
          warning: colors.amber.base,
          error: "#e24c4c",
          success: "#72CFCC",
          background: "#77cabe"
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
