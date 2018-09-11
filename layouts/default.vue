<template>
  <div>

    <!-- Navigation -->
    <nav class="nav">
      <nuxt-link to="/" class="z-50 text-grey-dark hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline absolute pin-b pin-l md:pl-12 pl-8 pb-8 uppercase">Home</nuxt-link>
      <nuxt-link to="/work" class="z-50 text-grey-dark hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline absolute pin-t pin-l md:pl-12 pl-8 pt-8 uppercase">Work</nuxt-link>
      <nuxt-link to="/research" class="z-50 text-grey-dark hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline absolute pin-t pin-r md:pr-12 pr-8 pt-8 uppercase">Research</nuxt-link>
      <nuxt-link to="/contact" class="z-50 text-grey-dark hover:text-grey-darkest font-bold font-sans text-sm tracking-extrawide no-underline absolute pin-b pin-r md:pr-12 pr-8 pb-8 uppercase">Contact</nuxt-link>
    </nav>

    <!-- Nuxt Router -->
    <nuxt/>

  </div>


</template>

<script>
  export default {

    head(){
      return {
          title: 'Phillip Hartin', // set a title
          htmlAttrs: {
            lang: 'en',
          },
        link: [
          {rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display"}
        ]
        }
    }

  };
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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

