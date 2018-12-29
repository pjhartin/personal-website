module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Phillip Hartin",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Building tech for the web and mobile"
      },
      // Open Graph
      {
        name: "og:title",
        content: "Phillip Hartin"
      },
      {
        name: "og:description",
        content: "Building tech for the web and mobile"
      },
      {
        name: "og:type",
        content: "website"
      },
      {
        name: "og:url",
        content: "https://philliphartin.com"
      },
      {
        name: "og:image",
        content: "static/images/seo.jpg"
      }
    ],
    link: [
      // Favicon
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-16x16.png"
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#ff8282"
  },
  /*
   ** Global CSS
   */

  css: ["~/assets/main.css", "~/assets/css/tailwind.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  }
};
