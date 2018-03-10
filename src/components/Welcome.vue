<template lang="pug">
  
  .welcome
    h1 Phillip Hartin
    p I've been researching and building stuff, for quite some time now. I've been pretty busy with all the work. So busy in fact, that I haven't had a chance to build my own site. Good news is, I'm working on it.
  
    .links
      a.external-link(href="mailto:contact@philliphartin.com", target="_blank") Email.
      a.external-link(href="https://github.com/pjhartin", target="_blank") Github.
      a.external-link(href="https://twitter.com/philliphartin", target="_blank") Twitter.
      a.external-link(href="https://www.linkedin.com/in/philliphartin/", target="_blank") LinkedIn.

</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/variables/_colors.scss";

.welcome {
  color: white;
  font-family: monospace;

  .links {
    > .external-link {
      margin-right: 1rem;
      color: white;
      transition: all 350ms ease-in-out;
      // mix-blend-mode: difference;
      // text-decoration: none;

      &:hover {
        color: $color1;
      }
    }
  }
}
</style>
