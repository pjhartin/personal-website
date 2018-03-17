<template lang="pug">
  #app
    .top-nav
      .links
        a.external-link(href="mailto:contact@philliphartin.com", target="_blank")
          i.fal.fa-envelope
        a.external-link(href="https://medium.com/@philliphartin", target="_blank") 
          i.fab.fa-medium-m
        a.external-link(href="https://github.com/pjhartin", target="_blank")
          i.fab.fa-github
        a.external-link(href="https://twitter.com/philliphartin", target="_blank")
          i.fab.fa-twitter
        a.external-link(href="https://www.linkedin.com/in/philliphartin/", target="_blank")
          i.fab.fa-linkedin-in
    .content
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
  background: $purple;
  display: block;
  height: 100%;
}

#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background: $purple;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}

.top-nav {
  position: relative;
  height: 80px;
  display: flex;
}

.content {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.router-container {
  position: relative;
  width: 100%;
}

.links {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 2rem;

  .external-link {
    color: white;
    transition: all 350ms ease-in-out;
    padding: 0.5rem;
    font-size: 1rem;

    &:hover {
      color: $orange;
    }
  }
}
</style>
