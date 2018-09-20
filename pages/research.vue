<template>
  <section class="h-full w-full flex content-center justify-center font-serif flex-col text-center">
    <div class="container mx-auto md:w-2/3 lg:w-1/2 pl-8 pr-8 mt-24 mb-12">
      <div class="work list-item mb-24 relative" v-for="(publication, index) in publications" :key="index">

        <a :href="publication.link" target="_blank" class="no-underline text-black">
          <div class="title text-2xl md:text-3xl no-underline text-black" >{{publication.title}}</div>
          <div v-if="publication.authors" class="text-lg md:text-xl text-grey-darker mt-4">{{publication.authors}}</div>
          <div v-if="publication.publisher" class="text text-grey-dark mt-4">{{publication.publisher}}</div>
          <div v-if="publication.year" class="text-xl text-grey-dark mt-4">{{publication.year}}</div>

        <div class="hover-container absolute pin h-full w-full flex content-center justify-center items-center">
          <div class="hover-item"></div>
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
      publications: [
        {
          title:
            "Improving Healthcare Intervention Outcomes via Ubiquitous Computing (PhD Thesis)",
          year: "2016",
          authors:
            "Phillip J Hartin, Chris D Nugent, Sally I McClean, Ian Cleland, JoAnn T Tschanz, Christine J Clark, Maria C Norton",
          publisher: "Faculty of Computing and Engineering, Ulster University",
          link:
            "https://github.com/pjhartin/phd-thesis-latex/blob/master/Thesis.pdf"
        },
        {
          title:
            "The empowering role of mobile apps in behavior change interventions: The Gray Matters randomized controlled trial",
          year: "2016",
          authors:
            "Phillip J Hartin, Chris D Nugent, Sally I McClean, Ian Cleland, JoAnn T Tschanz, Christine J Clark, Maria C Norton",
          publisher: "JMIR mHealth and uHealth",
          link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4987494/"
        },
        {
          title:
            "Assessing app quality through expert peer review: A case study from the gray matters study",
          year: "2016",
          authors:
            "Phillip J Hartin, Ian Cleland, Chris D Nugent, Sally I McClean, JoAnn Tschanz, Christine Clark, Maria C Norton",
          publisher:
            "IEEE Engineering in Medicine and Biology Society (EMBC), 2016 IEEE 38th Annual International Conference",
          link: "https://ieeexplore.ieee.org/abstract/document/7591697/"
        },
        {
          title:
            "TAUT: Technology Adoption and Prediction Tools for Everyday Technologies",
          year: "2016",
          authors:
            "Christopher Nugent, Ian Cleland, Sally I McClean, Philip Hartin, Mark Donnelly, Shuai Zhang, Bryan Scotney, JoAnn Tschanz, Maria C Norton, Chelsea Sanders, Ken Robert Smith, Stephanie Behrens",
          publisher:
            "Alzheimer's & Dementia: The Journal of the Alzheimer's Association",
          link:
            "https://aanddjournal.net/article/S1552-5260(16)30801-9/abstract"
        },
        {
          title:
            "Improvements over six months in stress management, diet quality, and moderate physical activity are associated with changes in biomarkers of vascular health and inflammation: The gray matters study",
          year: "2015",
          authors:
            "Maria C Norton, Christine Clark, JoAnn Tschanz, Heidi Wengreen, Elizabeth B Fauth, Phillip J Hartin, Ian Cleland, Christopher Nugent, Sally I McClean, Bryan Scotney, Travis Dorsch, Julie Gast, Dave Robinson, Michael Lefevre",
          publisher:
            "Alzheimer's & Dementia: The Journal of the Alzheimer's Association",
          link:
            "https://www.alzheimersanddementia.com/article/S1552-5260(15)02453-X/abstract"
        },
        {
          title: "Home-based self-management of dementia: closing the loop",
          year: "2015",
          authors:
            "Timothy Patterson, Ian Cleland, Phillip J Hartin, Chris D Nugent, Norman D Black, Mark P Donnelly, Paul J McCullagh, Huiru Zheng, Suzanne McDonough",
          publisher:
            "International Conference on Smart Homes and Health Telematics",
          link: "https://link.springer.com/chapter/10.1007/978-3-319-19312-0_19"
        },
        {
          title:
            "Facilitating Delivery and Remote Monitoring of Behaviour Change Interventions to Reduce Risk of Developing Alzheimer’s Disease: The Gray Matters Study",
          year: "2015",
          authors:
            "Phillip J Hartin, Ian Cleland, Chris D Nugent, Sally I McClean, Timothy Patterson, JoAnn Tschanz, Christine Clark, Maria C Norton",
          publisher:
            "International Conference on Smart Homes and Health Telematics",
          link:
            "https://link.springer.com/chapter/10.1007%2F978-3-319-19312-0_32"
        },
        {
          title:
            "The design and progress of a multidomain lifestyle intervention to improve brain health in middle-aged persons to reduce later Alzheimer's disease risk: The Gray Matters randomized trial",
          year: "2015",
          authors:
            "Maria C Norton, Christine J Clark, JoAnn T Tschanz, Phillip Hartin, Elizabeth B Fauth, Julie A Gast, Travis E Dorsch, Heidi Wengreen, Chris Nugent, W David Robinson, Michael Lefevre, Sally McClean, Ian Cleland, Sydney Y Schaefer, Sheryl Aguilar",
          publisher:
            "Alzheimer's & Dementia: Translational Research & Clinical Interventions",
          link:
            "https://www.sciencedirect.com/science/article/pii/S2352873715000098"
        },
        {
          title:
            "Identification of Ideal Contexts to Issue Reminders for Persons with Dementia",
          year: "2014",
          authors:
            "Phillip J Hartin, Chris D Nugent, Sally I McClean, Ian Cleland, Maria C Norton, Chelsea Sanders, JoAnn T Tschanz",
          publisher: "International Workshop on Ambient Assisted Living",
          link: "https://link.springer.com/chapter/10.1007/978-3-319-13105-4_53"
        },
        {
          title:
            "Predicting technology adoption in people with dementia; initial results from the TAUT project",
          year: "2014",
          authors:
            "Ian Cleland, Chris D Nugent, Sally I McClean, Phillip J Hartin, Chelsea Sanders, Mark Donnelly, Shuai Zhang, Bryan Scotney, Ken Smith, Maria C Norton, JoAnn T Tschanz",
          publisher: "International Workshop on Ambient Assisted Living",
          link: "https://link.springer.com/chapter/10.1007/978-3-319-13105-4_39"
        },
        {
          title:
            "Encouraging behavioral change via everyday technologies to reduce risk of developing Alzheimer’s disease",
          year: "2014",
          authors:
            "Phillip J Hartin, Chris D Nugent, Sally I McClean, Ian Cleland, JoAnn Tschanz, Christine Clark, Maria C Norton",
          publisher: "International Workshop on Ambient Assisted Living",
          link: "https://link.springer.com/chapter/10.1007/978-3-319-13105-4_9"
        },
        {
          title:
            "A smartphone application to evaluate technology adoption and usage in persons with dementia",
          year: "2014",
          authors:
            "Phillip J Hartin, Chris D Nugent, Sally I McClean, Ian Cleland, Maria C Norton, Chelsea Sanders, JoAnn T Tschanz",
          publisher:
            "IEEE Engineering in Medicine and Biology Society (EMBC), 2014 36th Annual International Conference of the IEEE",
          link: "https://ieeexplore.ieee.org/abstract/document/6944844/"
        }
      ]
    };
  }
};
</script>
