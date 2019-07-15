<template>
  <section
    class="h-full min-h-screen bg-grey-light w-full flex content-center justify-center font-serif flex-col text-left"
  >
    <div
      class="container mx-auto md:w-2/3 print:w-full mt-24 print:mt-0 mb-12 bg-white shadow-material print:shadow-none p-12"
    >
      <div id="resume" class="resume-inner w-full">
        <div class="flex items-center">
          <div class="headings flex-grow">
            <h1
              class="title text-5xl print:text-4xl no-underline text-black font-normal"
            >
              Dr. Phillip Hartin
            </h1>
            <h2
              class="name mt-1 text-xl text-black font-normal text-grey-dark tracking-wide"
            >
              Software Engineer
            </h2>
          </div>
          <div class="actions">
            <div
              v-on:click="printResume"
              class="button bg-grey-light rounded-full p-4 group hover:bg-red-light cursor-pointer"
            >
              <i
                data-feather="printer"
                class="text-white"
                height="16px"
                width="16px"
              ></i>
            </div>
          </div>
        </div>

        <!-- Qualifications -->
        <section class="mt-12">
          <div
            class="title text-4xl print:text-2xl pb-4 border-b border-grey-light"
          >
            Qualifications
          </div>
          <div class="list">
            <div
              class="item mt-10 print:mt-6"
              v-for="(qualification, index) in qualifications"
              :key="index"
            >
              <div class="flex items-center">
                <h2 class="title text-2xl print:text-xl font-normal">
                  {{ qualification.title }}
                </h2>
                <div
                  class="flex-grow text-right text-sm print:text-xs font-normal text-grey-darker font-mono"
                >
                  {{ qualification.year }}
                </div>
              </div>
              <div
                class="mt-2 print:mt-1 text-xl print:text-base text-grey-darker tracking-wide"
              >
                {{ qualification.field }}
              </div>
              <div
                class="mt-3 print:mt-1 print:text-sm tracking-wide text-grey-dark font-serif"
              >
                {{ qualification.institution }}
              </div>
            </div>
          </div>
        </section>

        <!-- Experience -->
        <section class="mt-12">
          <div
            class="title text-4xl print:text-2xl pb-4 border-b border-grey-light"
          >
            Experience
          </div>
          <div class="list">
            <div
              class="item mt-10 print:mt-6"
              v-for="(role, index) in experience"
              :key="index"
            >
              <div class="flex items-center">
                <h2 class="title text-2xl print:text-xl font-normal">
                  {{ role.title }}
                </h2>
                <div
                  class="flex-grow text-right text-sm print:text-xs font-normal text-grey-darker font-mono"
                >
                  {{ role.dates }}
                </div>
              </div>
              <div
                class="mt-2 text-xl print:text-base text-grey-darker tracking-wide"
              >
                {{ role.organisation }}
                <span
                  class="tracking-wide text-lg print:text-base text-grey-dark"
                  >| {{ role.location }}</span
                >
              </div>
              <div
                v-if="role.description"
                class="mt-4 print:mt-2 w-2/3 tracking-normal text-base print:text-sm text-grey-darkest leading-tight"
              >
                {{ role.description }}
              </div>
            </div>
          </div>
        </section>

        <!-- Projects -->
        <section class="mt-12">
          <div
            class="title text-4xl print:text-2xl pb-4 border-b border-grey-light"
          >
            Projects
          </div>
          <div class="list">
            <div
              class="item mt-10 print:mt-6"
              v-for="(project, index) in projects"
              :key="index"
            >
              <div class="flex items-center">
                <h2 class="title text-2xl print:text-xl font-normal">
                  {{ project.title }}
                </h2>
                <div
                  class="flex-grow text-right text-sm print:text-xs font-normal text-grey-darker font-mono"
                >
                  {{ project.year }}
                </div>
              </div>
              <div
                class="mt-2 text-xl print:text-base text-grey-darker tracking-wide"
              >
                {{ project.role }}
                <span
                  v-if="project.personal == false"
                  class="tracking-wide text-lg print:text-sm text-grey-dark"
                  >| via {{ project.organisation }}</span
                >
              </div>
              <div
                class="mt-4 print:mt-2 text-grey-darkest print:text-sm tracking-normal leading-tight w-2/3"
              >
                {{ project.key_features }}
              </div>
            </div>
          </div>
        </section>

        <!-- Skills -->
        <section class="mt-12">
          <div
            class="title text-4xl print:text-3xl pb-4 border-b border-grey-light"
          >
            Skills
          </div>
          <div class="list">
            <div
              class="item mt-8 print:mt-6 text-lg text-base text-grey-darkest"
              v-for="(skill, index) in skills"
              :key="index"
            >
              <span
                class="text-sm print:text-xs text-grey-darker tracking-wide uppercase"
                >{{ skill.title }} |</span
              >
              {{ skill.items }}
            </div>
          </div>
        </section>

        <!-- Awards -->
        <section class="mt-12">
          <div
            class="title text-4xl print:text-3xl pb-4 border-b border-grey-light"
          >
            Awards
          </div>
          <div class="list">
            <div
              class="item mt-6 print:mt-4"
              v-for="(award, index) in awards"
              :key="index"
            >
              <div class="flex items-center">
                <h2 class="title text-xl print:text-lg font-normal">
                  {{ award.title }}
                </h2>
                <div
                  class="flex-grow text-right text-sm print:text-xs font-normal text-grey-darker font-mono"
                >
                  {{ award.year }}
                </div>
              </div>
              <div
                class="mt-3 print:mt-1 print:text-sm tracking-wide text-grey-darker font-serif"
              >
                {{ award.body }}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import feather from "feather-icons";

if (process.browser) {
  require("print-js");
}

export default {
  mounted() {
    feather.replace();
  },
  methods: {
    printResume: function() {
      console.log("Print resume");
      printJS({
        printable: "resume",
        type: "html",
        scanStyles: true,
        targetStyles: ["*"],
        css: "https://fonts.googleapis.com/css?family=Playfair+Display"
      });
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
          description:
            "Leading the architecture, development and operations of commercial web and mobile applications.",
          location: "Brisbane, Australia"
        },
        {
          title: "Senior Developer",
          organisation: "Ply Creative",
          dates: "Jan 2017 - Jun 2017",
          description:
            "Responsible for the development of user centeric web applications, with a focus on API design and front-end implementation.",
          location: "Brisbane, Australia"
        },
        {
          title: "Software Engineer",
          organisation: "Self-Employed",
          dates: "Oct 2015 - Jan 2017",
          description:
            "Full stack development; solutions ranging from CMS/eCommerce development to mobile app development and supporting infrastructure. A specialist focus on software solutions for academic research.",
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
          title: "Mental Health and Wellness app",
          personal: false,
          organisation: "Ply Creative",
          year: 2018,
          role: "Lead Developer",
          key_features: "iOS/Android/PWA, Push Notifications"
        },
        {
          title: "Healthy Taps app",
          personal: true,
          organisation: "Ulster University",
          year: 2018,
          role: "Solo Developer",
          key_features:
            "iOS/Android/PWA, Behavioural Tracking, RCT, Distributed Architecture"
        },
        {
          title: "VC Funding, Investment and Recruitment Platform",
          personal: false,
          organisation: "Ply Creative",
          year: 2017,
          role: "Lead Developer",
          key_features:
            "Web Platform, Data Engineering, User Analytics, Payment Gateways, Digital Asset Management, Live Chat"
        },
        {
          title: "Financial Planning SaaS",
          personal: false,
          organisation: "Ply Creative",
          year: 2018,
          role: "Lead Developer",
          key_features: "SPA, Financial Modelling with Xero Integration"
        },
        {
          title: "Australia's First Online Ad Marketplace",
          personal: false,
          organisation: "Ply Creative",
          year: 2017,
          role: "Lead Developer",
          key_features:
            "PWA, Marketplace, Facilitating Escrow Payments, Inventory Management"
        },
        {
          title: "Gray Matters app",
          personal: true,
          organisation: "Ulster University",
          year: 2015,
          role: "Solo Developer",
          key_features:
            "Native iOS and Android, Behavioural Tracking and Manipulation, Clinical RCT"
        }
      ],
      skills: [
        {
          title: "Key Skills",
          items:
            "PhD in Machine Learning applications and healthcare, Data Modelling, Software Design"
        },

        {
          title: "Platforms and Tools",
          items:
            "AWS, Firebase, Google Cloud Platform, Weka, Matlab, SPSS+SAS, Forge, Plesk and Docker"
        },
        {
          title: "Frameworks and Languages",
          items:
            "Laravel, Ionic, Angular, Vue, Nuxt, iOS, Android, Firebase, Python, SciPy/NumPy"
        },
        {
          title: "DevOps",
          items:
            "CI/CD Pipeline Development, Automation, Buddy, Travis, PHPUnit, Behat and Laravel Dusk"
        },
        {
          title: "Interpersonal",
          items:
            "Clear communicator, approachable and dependable, highly analytical yet decisive"
        }
      ],
      awards: [
        {
          title: "Best Thesis Award",
          body: "Computer Science Research Institute | Ulster University",
          year: 2017
        },
        {
          title: "AGDA Design Awards - Winner - Digital Design",
          body: "Australian Graphic Design Association",
          year: 2016
        },
        {
          title: "AGDA Design Awards - Finalist - Design for Good",
          body: "Australian Graphic Design Association",
          year: 2016
        },
        {
          title: "UCAMI Best Paper Award",
          body:
            "Ubiquitous Computing and Ambient Intelligence Annual Conference",
          year: 2014
        },
        {
          title: "Most Outstanding Student in the Final Honours Year",
          body: "British Computing Society",
          year: 2012
        },
        {
          title: "The British Computing Society Medal and Prize",
          body: "British Computing Society",
          year: 2012
        },
        {
          title: "The I+ (i-piu, Italy) Healthcare & Technology Prize",
          body: "Ulster University",
          year: 2012
        }
      ]
    };
  }
};
</script>
