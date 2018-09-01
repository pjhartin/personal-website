<template lang="pug">
  #app
    .splash(v-lazy:background-image="'/static/images/background.jpg'")
    .top-nav
      .links
        a.external-link(href="https://medium.com/@philliphartin", target="_blank", title="Medium") 
          i.fab.fa-medium-m
        a.external-link(href="https://github.com/pjhartin", target="_blank", title="Github")
          i.fab.fa-github
        a.external-link(href="https://www.linkedin.com/in/philliphartin/", target="_blank", title="LinkedIn")
          i.fab.fa-linkedin-in
        a.external-link(href="mailto:contact@philliphartin.com", target="_blank", title="Email")
          i.fas.fa-envelope
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  i,
  span {
    opacity: 0;
    transition: opacity 200ms ease-in;
  }

  &.wf-loading {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    i,
    span {
      opacity: 0;
    }
  }

  &.wf-active {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    i,
    span {
      opacity: 1;
    }
  }
}

body {
  margin: 0;
  padding: 0;
  background: $purple;
  display: block;
  height: 100%;

  #app {
    opacity: 1;
    animation: fade-in 2s;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}

#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}

.splash {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  opacity: 0;

  transition: opacity 1s ease-in;

  &[lazy="loaded"] {
    opacity: 1;
  }
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

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }

  .external-link {
    color: white;
    transition: all 350ms ease-in-out;
    padding: 0.5rem;
    font-size: 1rem;

    &:hover {
      transform: scale(1.3) translateY(-5%);
      color: $purple;
    }
  }
}
</style>
