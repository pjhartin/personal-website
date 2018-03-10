<template lang="pug">
  #app
    .router-container
      router-view
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "styles/variables/_colors.scss";

html {
  display: block;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  background: white;
  display: block;
  height: 100%;
}

#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background: $color2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
}

.router-container {
  position: relative;
  margin: 2rem;
}
</style>
