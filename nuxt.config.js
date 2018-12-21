const path = require("path");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || [];
  }
}

module.exports = {
  css: ["assets/main.css", "~/assets/css/tailwind.css"],
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
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (!isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            // purgecss configuration
            // https://github.com/FullHuman/purgecss
            paths: glob.sync([
              path.join(__dirname, "./pages/**/*.vue"),
              path.join(__dirname, "./layouts/**/*.vue"),
              path.join(__dirname, "./components/**/*.vue")
            ]),
            extractors: [{
              extractor: TailwindExtractor,
              extensions: ["vue"]
            }],
            whitelist: ["html", "body", "nuxt-progress", "wf-active"]
          })
        );
      }
    }
  }
};
