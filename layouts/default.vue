<template>
  <div id="main" v-bind:style="styleObject">
    <!-- Navigation -->
    <nav class="nav">
      <div class="fixed w-full h-32 background-red z-10"></div>
      <div class="fixed w-full h-32 bottom-0 z-10"></div>
      <nuxt-link
        v-on:click.native="colourCycle"
        to="/"
        class="link z-50 blend-difference text-white hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline fixed bottom-0 left-0 md:pl-12 pl-8 pb-8 uppercase print:invisible"
      >Home</nuxt-link>
      <nuxt-link
        v-on:click.native="colourCycle"
        to="/work"
        class="link z-50 blend-difference text-white hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline fixed top-0 left-0 md:pl-12 pl-8 pt-8 uppercase print:invisible"
      >Works</nuxt-link>
      <nuxt-link
        v-on:click.native="colourCycle"
        to="/research"
        class="link z-50 blend-difference text-white hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline fixed top-0 right-0 md:pr-12 pr-8 pt-8 uppercase print:invisible"
      >Research</nuxt-link>

      <nuxt-link
        v-on:click.native="colourCycle"
        to="/about"
        class="link z-50 blend-difference text-white hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline fixed bottom-0 right-0 md:pr-12 pr-8 pb-8 uppercase print:invisible"
      >About</nuxt-link>
      <!-- 
      <a
        v-on:click.native="colourCycle"
        href="mailto:contact@philliphartin.com"
        class="link z-50 blend-difference text-white hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline fixed bottom-0 right-0 md:pr-12 pr-8 pb-8 uppercase print:invisible"
      >Contact</a>-->
    </nav>
    <!-- Nuxt Router -->
    <nuxt/>
  </div>
</template>

<script>
import styleMixin from "./../mixin/style-mixin";
export default {
  mixins: [styleMixin],
  head() {
    return {
      title: "Phillip Hartin",
      htmlAttrs: {
        lang: "en"
      },
      link: [],
      script: [
        {
          src:
            "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
          type: "text/javascript"
        },
        {
          innerHTML: `WebFont.load({google: {families: ["Open Sans", "Playfair Display", "Work Sans"]}});`,
          type: "text/javascript",
          body: true
        }
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
</style>
