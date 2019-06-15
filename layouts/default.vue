<template>
  <div>
    <!-- Navigation -->
    <nav class="nav">
      <div class="fixed w-full h-32 background-red z-10"></div>
      <div class="fixed w-full h-32 pin-b z-10"></div>
      <nuxt-link
        to="/"
        class="link z-50 text-white hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline fixed pin-b pin-l md:pl-12 pl-8 pb-8 uppercase print:invisible"
      >Home</nuxt-link>
      <nuxt-link
        to="/work"
        class="link z-50  text-white hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline fixed pin-t pin-l md:pl-12 pl-8 pt-8 uppercase print:invisible"
      >Works</nuxt-link>
      <nuxt-link
        to="/research"
        class="link z-50  text-white hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline fixed pin-t pin-r md:pr-12 pr-8 pt-8 uppercase print:invisible"
      >Research</nuxt-link>
      <!-- <nuxt-link to="/contact" class="z-50 text-grey-dark hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline fixed pin-b pin-r md:pr-12 pr-8 pb-8 uppercase">Contact</nuxt-link> -->
      <a
        href="mailto:contact@philliphartin.com"
        class="link z-50 text-white hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline fixed pin-b pin-r md:pr-12 pr-8 pb-8 uppercase print:invisible"
      >Contact</a>
    </nav>
    <!-- Nuxt Router -->
    <nuxt/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Phillip Hartin",
      htmlAttrs: {
        lang: "en"
      },
      link: [],
      script: [
        // {
        //   src:
        //     "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
        //   type: "text/javascript"
        // },
        // {
        //   innerHTML: `WebFont.load({google: {families: ["Open Sans", "Playfair Display", "Work Sans"]}});`,
        //   type: "text/javascript",
        //   body: true
        // }
      ],
      __dangerouslyDisableSanitizers: ["script"]
    };
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.faded-top {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 33%,
    rgba(255, 255, 255, 0) 100%
  );
}

.faded-bottom {
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 33%,
    rgba(255, 255, 255, 0) 100%
  );
}

.link {
  mix-blend-mode: difference;
}
</style>
