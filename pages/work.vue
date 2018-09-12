<template>
  <section class="h-100 w-100 flex  content-center justify-center font-serif flex-col text-center">
    <div class="container mx-auto pl-8 pr-8  mt-24 mb-12">
      <div class="work mb-12" v-for="(project, index) in projects" :key="index">
        <a class="title text-3xl md:text-6xl no-underline text-black" :href="project.link" target="_blank">{{project.title}}<span class="year text-2xl ml-4">{{project.year}}</span></a>
        <div class="reveal text-xl text-grey-dark mt-2">{{project.role}}</div>
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
          title: 'Healthy Taps',
          year: '2018',
          role: 'Developer / Architect'
        },
        {
          title: 'The Design Conference',
          year: '2017',
          role: 'Developer',
          link: 'https://thedesignconference.com.au'
        },
        {
          title: 'Analogue Gallery',
          year: '2016',
          role: 'Developer',
          link: 'https://analoguegallery.com.au'
        },
        {
          title: 'First Coat Festival App',
          year: '2016',
          role: 'Developer',
          link: 'https://firstcoat.com.au/'
        },
        {
          title: 'The Design Conference App',
          year: '2016',
          role: 'Developer / UX Designer',
          link: 'http://awards2016.agda.com.au/finalist/3/10005/624'
        },
        {
          title: 'Gray Matters',
          year: '2015',
          role: 'Developer / UI & UX Designer',
          link: 'http://graymattersapp.org'
        },
        {
          title: 'Gray Matters (RCT)',
          year: '2014',
          role: 'Developer / Data Scientist',
          link: 'http://graymattersapp.org'
        },
        {
          title: 'TAUT App',
          year: '2013',
          role: 'Developer / Data Scientist',
          link: 'https://link.springer.com/chapter/10.1007/978-3-319-13105-4_53'
        }
      ]
    };
  }
};
</script>

<style>
</style>
