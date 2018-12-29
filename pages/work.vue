<template>
  <section class="h-full w-full flex content-center justify-center font-serif flex-col text-center">
    <div class="container mx-auto md:w-2/3 pl-8 pr-8 mt-24 mb-12">
      <div class="work list-item mb-24 relative" v-for="(project, index) in projects" :key="index">
        <a :href="project.link" target="_blank" class="no-underline text-black">
          <h2 class="title text-4xl md:text-5xl no-underline text-black font-normal">
            {{project.title}}
            <span class="year text-2xl ml-4">{{project.year}}</span>
          </h2>
          <div v-if="project.role" class="role text-2xl text-grey-darker mt-4">{{project.role}}</div>
          <div
            v-if="project.subtitle"
            class="subtitle text text-grey-dark mt-4"
          >{{project.subtitle}}</div>
          <div v-if="project.tech" class="tech text-sm text-grey-darker mt-4">{{project.tech}}</div>
          <div
            class="hover-container absolute pin h-full w-full flex content-center justify-center items-center"
          >
            <div class="hover-item alt"></div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Healthy Taps",
          year: "2018",
          role: "Developer",
          tech: "Ionic, Firebase, Vue, Laravel, Google Cloud Engine"
        },
        {
          title: "The Design Conference",
          year: "2017",
          role: "Developer",
          link: "https://thedesignconference.com.au",
          tech: "Wordpress, Braintree"
        },
        {
          title: "Analogue Gallery",
          year: "2016",
          role: "Developer",
          tech: "VanillaJS"
        },
        {
          title: "First Coat Festival App",
          year: "2016",
          role: "Developer",
          link: "https://firstcoat.com.au/",
          tech: "Ionic, Angular, Silverstripe"
        },
        {
          title: "The Design Conference App",
          subtitle: "AGDA Design Awards 2016 - Winner - Digital Design",
          year: "2016",
          role: "Developer / UX Designer",
          link: "http://awards2016.agda.com.au/finalist/3/10005/624",
          tech: "Ionic, Angular, Silverstripe"
        },
        {
          title: "Gray Matters",
          subtitle: "USA / Italy RCT study & original public MVP",
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
.hover-item.alt {
  background: #fcd5ff;
  height: 280px;
  width: 280px;
  border-radius: 0;
}
</style>
