export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Ewan Argouse',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        prefix: 'og: http://ogp.me/ns#',
        property: 'og:title',
        content: 'Ewan Argouse',
      },
      {
        prefix: 'og: http://ogp.me/ns#',
        property: 'og:description',
        content: "Hi! I'm Ewan and I want to make fun video games!",
      },
      {
        prefix: 'og: http://ogp.me/ns#',
        property: 'og:type',
        content: 'website',
      },
      {
        prefix: 'og: http://ogp.me/ns#',
        property: 'og:url',
        content: 'https://ewargous.github.io/portfolio/',
      },
      {
        prefix: 'og: http://ogp.me/ns#',
        property: 'og:image',
        content: '/preview.jpg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/styles/main'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/animxyz.js', ssr: false },
    { src: '~plugins/vue-observe-visibility.js', ssr: false },
    { src: '~plugins/vue-infinite-loading.js', ssr: false },
    { src: '~plugins/vue-masonry-css.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'vue-masonry-css',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-purgecss',
  ],
  tailwindcss: {
    jit: true
  },
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  purgeCSS: {
    mode: 'postcss',
    enabled: process.env.NODE_ENV === 'production',
  },
  computed: {
    autoLoadDisabled() {
      return this.loading || this.commentsData.length === 0
    },
  },
}
