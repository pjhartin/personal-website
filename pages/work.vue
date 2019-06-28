<template>
  <section
    class="blend-difference h-full w-full flex content-center justify-center font-serif flex-col text-center"
  >
    <div class="container mx-auto md:w-2/3 pl-8 pr-8 mt-24 mb-12">
      <div
        class="list-item cursor-pointer mb-24 relative"
        v-for="(project, index) in projects"
        :key="index"
      >
        <a :href="project.link" target="_blank" class="link no-underline text-white">
          <div v-if="project.awards" class="awards text-lg mb-2 text font-bold">{{project.awards}}</div>
          <h2 class="title text-5xl md:text-5xl no-underline font-normal">
            {{project.title}}
            <span class="year text-2xl ml-4">{{project.year}}</span>
          </h2>
          <div v-if="project.role" class="role text-xl mt-4">{{project.role}}</div>

          <div v-if="project.client" class="role text mt-4">{{project.client}}</div>
          <!--<div v-if="project.tech" class="tech mt-4">{{project.tech}}</div>-->
          <div
            class="hover-container absolute inset-0 h-full w-full flex content-center justify-center items-center"
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
          title: "iMPAKT",
          year: "2019",
          role: "Freelance Software Engineer",
          client: "for Connected Health Innovation Centre",
          tech: "Laravel, VueJS"
        },
        {
          title: "Healthy Taps",
          year: "2018",
          role: "Freelance Software Engineer",
          client: "for National University of Ireland Galway",
          tech: "Ionic, Firebase, Vue, Laravel, Google Cloud Engine"
        },
        {
          title: "GreenX7",
          year: "2018",
          role: "Lead Software Engineer",
          client: "at Ply Studio",
          link: "https://ply.studio"
        },
        {
          title: "Apollo League",
          year: "2017",
          role: "Lead Software Engineer",
          client: "at Ply Studio",
          link: "https://ply.studio"
        },
        {
          title: "Adfomo",
          year: "2017",
          role: "Lead Software Engineer",
          client: "at Ply Studio",
          link: "https://ply.studio"
        },
        {
          title: "The Design Conference",
          year: "2017",
          role: "Freelance Developer",
          client: "for Analogue Digital",
          link: "https://thedesignconference.com.au",
          tech: "Wordpress, Braintree"
        },
        {
          title: "Analogue Gallery",
          year: "2016",
          role: "Freelance Developer",
          client: "for Analogue Digital",
          tech: "VanillaJS"
        },
        {
          title: "First Coat Festival App",
          year: "2016",
          role: "Freelance Developer",
          client: "for Analogue Digital",
          link: "https://firstcoat.com.au/",
          tech: "Ionic, Angular, Silverstripe"
        },
        {
          title: "The Design Conference App",
          awards: "AGDA Design Awards 2016 - Winner - Digital Design",
          year: "2016",
          role: "Freelance Developer / UX Designer",
          client: "for Analogue Digital",
          link: "http://awards2016.agda.com.au/finalist/3/10005/624",
          tech: "Ionic, Angular, Silverstripe"
        },
        {
          title: "Gray Matters",
          year: "2014-2016",
          role: "Lead Developer & Data Scientist",
          client: "at Ulster University",
          link: "http://graymattersapp.org",
          tech: "iOS, Android, Ionic, NodeJS, MongoDb, PHP, Matlab, SPSS"
        },
        {
          title: "TAUT App",
          year: "2013",
          role: "Lead Developer & Data Scientist",
          client: "at Ulster University",
          link:
            "https://link.springer.com/chapter/10.1007/978-3-319-13105-4_53",
          tech: "Android, PHP, Matlab, R"
        }
      ]
    };
  }
};
</script>
