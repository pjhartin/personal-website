<template>
  <section class="h-full w-full flex content-center justify-center font-serif flex-col text-center">
    <div class="container mx-auto md:w-2/3 pl-8 pr-8 mt-24 mb-12" >
      <div class="blend-difference list-item mb-24 relative" v-for="(project, index) in projects" :key="index">
        <a :href="project.link" target="_blank" class="link no-underline text-white">
          <h2 class="title text-4xl md:text-5xl no-underline text-white font-normal">
            {{project.title}}
            <span class="year text-2xl ml-4">{{project.year}}</span>
          </h2>
          <div v-if="project.role" class="role text-2xl  text-white mt-4">{{project.role}}</div>
          <div
            v-if="project.subtitle"
            class="subtitle text text-white font-bold mt-4"
          >{{project.subtitle}}</div>
          <div v-if="project.tech" class="tech text-white mt-4">{{project.tech}}</div>
          <div
            class="hover-container absolute pin h-full w-full flex content-center justify-center items-center"
          >
            <div class="hover-item work-item"></div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import styleMixin from "./../mixin/style-mixin";
export default {
  mixins: [styleMixin],
  data() {
    return {
      projects: [
        {
          title: "Healthy Taps",
          year: "2018",
          role: "Developer (Solo)",
          tech: "Ionic, Firebase, Vue, Laravel, Google Cloud Engine"
        },
        {
          title: "GreenX7",
          year: "2018",
          role: "Lead Software Engineer at Ply Studio",
          link: "https://greenx7.com.au",
          tech: "*Super Secret Tech*"
        },
        {
          title: "Apollo League",
          year: "2017",
          role: "Lead Software Engineer at Ply Studio",
          link: "https://apollo-league.com",
          tech: "*Super Secret Tech*"
        },
        {
          title: "Adfomo",
          year: "2017",
          role: "Lead Software Engineer at Ply Studio",
          link: "https://adfomo.com",
          tech: "*Super Secret Tech*"
        },
        {
          title: "The Design Conference",
          year: "2017",
          role: "Developer (Solo)",
          link: "https://thedesignconference.com.au",
          tech: "Wordpress, Braintree"
        },
        {
          title: "Analogue Gallery",
          year: "2016",
          role: "Developer (Solo)",
          tech: "VanillaJS"
        },
        {
          title: "First Coat Festival App",
          year: "2016",
          role: "Developer (Solo)",
          link: "https://firstcoat.com.au/",
          tech: "Ionic, Angular, Silverstripe"
        },
        {
          title: "The Design Conference App",
          subtitle: "AGDA Design Awards 2016 - Winner - Digital Design",
          year: "2016",
          role: "Developer (Solo) / UX Designer",
          link: "http://awards2016.agda.com.au/finalist/3/10005/624",
          tech: "Ionic, Angular, Silverstripe"
        },
        {
          title: "Gray Matters",
          year: "2014-2016",
          role: "Developer / Data Scientist",
          link: "http://graymattersapp.org",
          tech: "iOS, Android, Ionic, NodeJS, MongoDb, PHP, Matlab, SPSS"
        },
        {
          title: "TAUT App",
          year: "2013",
          role: "Developer / Data Scientist",
          link:
            "https://link.springer.com/chapter/10.1007/978-3-319-13105-4_53",
          tech: "Android, PHP, Matlab, R"
        }
      ]
    };
  }
};
</script>

<style>
.blend-difference {
  mix-blend-mode: difference;
}

.link {
  mix-blend-mode: difference;
}
</style>
