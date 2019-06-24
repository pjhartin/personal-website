<template>
  <section
    class="h-screen w-screen flex content-center justify-center font-serif blend-difference"
    @click="colourCycle"
  >
    <div class="shapes absolute inset-0 overflow-hidden">
      <div class="shape block"></div>
      <div class="bouncing-ball-y">
        <div class="bouncing-ball-x">
          <div class="ball"></div>
        </div>
      </div>
      <div class="header-container text-white self-center">
        <h1 class="name text-4xl md:text-6xl">
          Phillip
          <br>Hartin
          <span class="text-xl">, PhD</span>
        </h1>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import styleMixin from "./../mixin/style-mixin";
export default {
  mixins: [styleMixin],
  data() {
    return {};
  }
};
</script>

<style>
.header-container {
  position: absolute;
  background: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
}

.shape {
  position: absolute;
  top: 45%;
  left: 55%;
  transform: translate(-50%, -50%);
  mix-blend-mode: multiply;
  width: 400px;
  height: 250px;
}

.ball {
  background: #eee;
  mix-blend-mode: exclusion;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.bouncing-ball-y {
  position: absolute;
  width: 100%;
  height: calc(100%);
  animation-name: bounce;
  animation-iteration-count: infinite;
  animation-duration: 1200ms;
}

.bouncing-ball-x {
  position: absolute;
  animation-name: travel;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 4.8s;
  /* TODO: Make 1s on mobile */
}

.block {
  background: #ffe2e2;
  opacity: 0.1;
}

@keyframes travel {
  from {
    left: 0px;
  }
  to {
    left: calc(100% - 100px);
  }
}

@keyframes bounce {
  from,
  to {
    top: 120px;
    animation-timing-function: ease-in;
  }
  50% {
    top: calc(50% + 25px);
    animation-timing-function: ease-out;
  }
}
</style>
