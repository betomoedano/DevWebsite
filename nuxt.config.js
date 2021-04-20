export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Website Alberto',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/main.css'],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    'nuxt-windicss',
    'nuxt-vite',
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
    '@nuxtjs/color-mode'
  ],
  // DarkMode Config
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },
  windicss: {
    scan: {
      dirs: ['./'],
      exclude: [
        'node_modules',
        '.git',
        '.nuxt/**/*',
        '*.template.html',
        'app.html'
      ],
      include: []
    },
    transformCSS: 'pre',
    preflight: {
      alias: {
        // add nuxt aliases
        'nuxt-link': 'a',
        // @nuxt/image module
        'nuxt-img': 'img'
      }
    }
  },
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-windicss-preprocess',
        options: {
          compile: true, // false: interpretation mode; true: compilation mode
          globalPreflight: true, // set preflight style is global or scoped
          globalUtility: true, // set utility style is global or scoped
          prefix: 'eco-' // set compilation mode style prefix
        }
      });
    }
  },
  // PWA Config
  pwa: {
    manifest: {
      theme_color: '#ffffff',
      name: 'Base proyect'
    },
    icon: {
      fileName: 'icon.png'
    }
  }
};
