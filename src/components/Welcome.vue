<template lang="pug">
  
  .welcome
    .content
      .title
        .letters
          .row
            .letter H
            .letter.offset A
            .letter R
          .row
            .letter T
            .letter I
          .row
            .letter N

        #tagline.tagline Building tech for the web
        //-p I've been researching and building stuff, for quite some time now. I've been pretty busy with all the work. So busy in fact, that I haven't had a chance to build my own site. Good news is, I'm working on it.

</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      applyStyleToTagline: function() {
        let letters = [];

        // Get each letter in the tagline
        let tagline = document.getElementById("tagline");

        // Fetch each letter
        for (var i = 0; i < tagline.innerHTML.length; i++) {
          let letter = tagline.innerHTML.charAt(i);
          letters.push(letter);
        }

        // Delete existing letters
        tagline.innerHTML = "";

        // Redraw each letter as a span
        letters.forEach(function(letter) {
          let span = document.createElement("span");
          span.innerHTML = letter;
          span.className = "new";

          tagline.appendChild(span);
        });
      }
    };
  },
  mounted: function() {
    this.applyStyleToTagline();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/variables/_colors.scss";
@import "../styles/variables/_fonts.scss";

.welcome {
  color: white;

  .title {
    position: relative;
    text-align: center;
    max-width: 600px;
    width: 100%;
  }

  .letters {
    font-family: "Work Sans";

    font-size: 9rem;
    color: $black;
    font-weight: 700;

    .row {
      margin: -0.1em 0rem;
      display: flex;
      align-content: center;
      align-items: center;

      &:nth-child(2) {
        margin: 0 15%;
      }

      &:nth-child(3) {
        margin: -10% 0%;
      }
    }

    .letter {
      flex: 1;
      &.offset {
        transform: translateY(10%);
      }
    }
  }

  .tagline {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: $font-roadrage;
    width: 100%;
    font-size: 4rem;
    line-height: 1.3em;
    text-align: center;

    &:nth-of-type(odd) {
      font-size: 2rem;
      // transform: scale(2);
    }
  }

  .new {
    &:nth-of-type(odd) {
      font-size: 3.3rem;
    }
  }
}
</style>
