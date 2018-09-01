<template lang="pug">
  
  .welcome
    .content
      .title
        .letters
          .row
            span.letter H
            span.letter.offset A
            span.letter R
          .row
            span.letter T
            span.letter I
          .row
            span.letter N

        //- #tagline.tagline Building products for the web and mobile
        p.disclaimer
          | I've been researching and coding tech for quite some time now. I've been pretty busy with all the work, so busy in fact, that I haven't had a chance to build my own site. So here's a distracting image of me surfing.
          | #[br]
          | #[br]
          | New site coming soon.

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
        if (tagline) {
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

  .disclaimer {
    margin-top: 6rem;
    font-size: 1rem;
    padding-left: 24px;
    padding-right: 24px;
    font-family: "Muli";
  }

  .letters {
    font-family: "Work Sans";
    font-size: 9rem;
    color: $black;
    font-weight: 700;
    transition: all 120ms ease-in;

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
      /*mix-blend-mode: color;*/
      opacity: 0.8;

      &.offset {
        transform: translateY(15%);
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
