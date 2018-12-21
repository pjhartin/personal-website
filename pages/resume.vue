<template >
  <section
    class="h-full min-h-screen bg-grey-light w-full flex content-center justify-center font-serif flex-col text-left"
  >
    <div class="container mx-auto md:w-2/3 mt-24 mb-12 bg-white shadow-material p-12">
      <div class="flex items-center">
        <div class="headings flex-grow">
          <h2 class="title text-4xl no-underline text-black font-normal">Dr. Phillip Hartin</h2>
          <h1 class="name mt-1 text-lg text-black font-normal text-grey-dark">Software Engineer</h1>
        </div>
        <div class="actions">
          <div
            v-on:click="printResume"
            class="button bg-grey-light rounded-full p-4 group hover:bg-red-light cursor-pointer"
          >
            <i data-feather="printer" class="text-white"></i>
          </div>
        </div>
      </div>

      <!-- Qualifications -->
      <section class="mt-12">
        <div class="title text-3xl pb-4 border-b border-grey-light">Qualifications</div>
        <div class="list">
          <div class="item mt-8" v-for="(qualification, index) in qualifications" :key="index">
            <div class="flex items-center">
              <h2 class="title text-2xl font-normal">{{qualification.title}}</h2>
              <div
                class="flex-grow text-right text-sm font-normal text-grey-darker font-mono"
              >{{qualification.year}}</div>
            </div>
            <div class="mt-1 text-xl">{{qualification.field}}</div>
            <div class="mt-2 tracking-wide text-grey-darker">{{qualification.institution}}</div>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section class="mt-12">
        <div class="title text-3xl pb-4 border-b border-grey-light">Experience</div>
        <div class="list">
          <div class="item mt-8" v-for="(role, index) in experience" :key="index">
            <div class="flex items-center">
              <h2 class="title text-2xl font-normal">{{role.title}}</h2>
              <div
                class="flex-grow text-right text-sm font-normal text-grey-darker font-mono"
              >{{role.dates}}</div>
            </div>
            <div class="mt-1 text-xl">{{role.organisation}}</div>
            <div class="mt-2 tracking-wide text-grey-darker">{{role.location}}</div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section class="mt-12">
        <div class="title text-3xl pb-4 border-b border-grey-light">Projects</div>
        <div class="list">
          <div class="item mt-8" v-for="(project, index) in projects" :key="index">
            <div class="flex items-center">
              <h2 class="title text-2xl font-normal">{{project.title}}</h2>
              <div
                class="flex-grow text-right text-sm font-normal text-grey-darker font-mono"
              >{{project.year}}</div>
            </div>
            <div class="mt-1 text-xl">{{project.role}}</div>
            <div class="mt-2 tracking-wide text-grey-darker">{{project.technologies}}</div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import feather from "feather-icons";
// import printJS from "print-js";

export default {
  mounted() {
    feather.replace();
  },
  methods: {
    printResume: function() {
      console.log("Print resume");
    }
  },
  data() {
    return {
      qualifications: [
        {
          title: "Doctor of Philosophy (PhD)",
          field: "Computer Science",
          year: "2016",
          awards: ["Best Thesis Award", "UCAMI Best Paper Award"],
          institution: "Ulster University"
        },
        {
          title: "Bachelor Degree with First Class Honours (BSc Hons)",
          field: "Computer Science",
          year: "2012",
          awards: [
            "The British Computing Society Medal and Prize",
            "Most Outstanding Student in the Final Honours Year",
            "The I+ Healthcare & Technology Prize"
          ],
          institution: "Ulster University"
        }
      ],
      experience: [
        {
          title: "Lead Developer",
          organisation: "Ply Creative",
          dates: "Jun 2017 - Present",
          description: "",
          location: "Brisbane / Gold Coast, Australia"
        },
        {
          title: "Senior Developer",
          organisation: "Ply Creative",
          dates: "Jan 2017 - Jun 2017",
          description: "",
          location: "Brisbane / Gold Coast, Australia"
        },
        {
          title: "Software Engineer",
          organisation: "Self-Employed",
          dates: "Oct 2015 - Jan 2017",
          description: "",
          location: "Coffs Harbour, Australia"
        },
        {
          title: "Lecturer (Part-Time)",
          organisation: "Ulster University",
          dates: "2014",
          description: "",
          location: "Belfast, United Kingdom"
        },
        {
          title: "Software Engineer & Research Assistant",
          organisation: "Ulster University",
          dates: "2012 - 2015",
          description: "",
          location: "Belfast, United Kingdom"
        },
        {
          title: "Global Markets Trade Floor Infrastructure Analyst",
          organisation: "Citigroup",
          dates: "2010 - 2011",
          description: "",
          location: "Belfast, United Kingdom"
        }
      ],

      projects: [
        {
          title: "Australia's first Online Ad Marketplace",
          personal: false,
          year: 2016,
          technologies: ["Laravel", "Angular", "Ionic"],
          role: "Lead Architect and Developer",
          key_features: [
            "PWA",
            "Escrow Payments",
            "Marketplace",
            "Inventory Management"
          ]
        },
        {
          title: "Financial Planning SaaS",
          personal: false,
          year: 2016,
          technologies: ["Laravel", "Vue"],
          role: "Lead Developer",
          key_features: ["Xero Integration", "Financial Planning"]
        }
      ]
    };
  }
};
</script>
