<template>
  <section
    class="blend-difference min-h-screen w-full flex content-center justify-center font-serif flex-col text-center text-white"
  >
    <div class="container mx-auto md:w-1/2 pl-8 pr-8 mt-24 mb-12">
      <p class="md:text-xl mb-4">
        Hi, I'm Phillip Hartin, <br>thanks for visiting my little slice of the internet.
      </p>
      <p class="md:text-xl mb-4"></p>
      <p class="md:text-xl mb-4">
        I'm currently the Engineering & Development Lead at Big Picture Medical,
        a medical technology company working to set the global standard in the
        delivery of specialist quality care.
      </p>
      <p class="md:text-xl mb-4">
        Outside of this role, I'm involved in a number of healthcare research
        projects on a software consultancy basis, developing mobile apps, web
        platforms, and all their supporting infrastructures.
      </p>
      <!-- <p class="md:text-2xl mb-4">
        Outside of this role, I'm involved in a range of healthcare research projects and creative projects as the co-founder of
        <b>LittleFox Studios</b>.
      </p>-->
      <p class="md:text-xl mb-6">
        These commitments keep me quite busy, so I apologise if I'm slow to
        respond, but if you'd like to get in touch please don't hesitate to reach out for a chat.
      </p>

      <a class="text-lg mx-2" href="mailto:contact@philliphartin.com">
        <font-awesome-icon :icon="['fas', 'inbox']"></font-awesome-icon>
      </a>

      <a class="text-lg mx-2" href="https://www.linkedin.com/in/philliphartin/">
        <font-awesome-icon :icon="['fab', 'linkedin-in']"></font-awesome-icon>
      </a>

      <a class="text-lg mx-2" href="https://twitter.com/philliphartin">
        <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
      </a>
    </div>
  </section>
</template>

<script>
import styleMixin from "./../mixin/style-mixin";

export default {
  mixins: [styleMixin],
  data() {
    return {};
  }
};
</script>
