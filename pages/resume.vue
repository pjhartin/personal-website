<template>
  <section class="h-full w-full flex content-center justify-center font-serif flex-col text-center">
    <div class="container mx-auto md:w-2/3 pl-8 pr-8 mt-24 mb-12">
      <h2 class="title text-4xl md:text-5xl no-underline text-black font-normal">Resume</h2>
      <section class="mt-24">
        <div class="title text-4xl">Qualifications</div>
        <div class="list">
          <div class="item" v-for="(qualification, index) in qualifications" :key="index">
            <h2 class="title text-2xl no-underline text-black font-normal">
              {{qualification.title}}
              {{qualification.field}}
              <span
                class="year text-2xl ml-4"
              >{{qualification.year}}</span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
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
