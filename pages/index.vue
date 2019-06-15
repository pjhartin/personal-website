<template>
  <section class="h-screen w-screen flex content-center justify-center font-serif" @click="colourCycle">

    <!-- Shapes -->
    <div class="shapes absolute pin overflow-hidden" >
      <div class="shape block"></div>
      <div class="bouncing-ball-y">
        <div class="bouncing-ball-x">
          <div class="ball" ></div>
        </div>
      </div>
      <!--<div class="shape square"></div>-->
      <div class="title self-center">
        <h1 class="name font-normal">Phillip<br> Hartin<span class="text-xl">, PhD</span></h1>
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
.title {
  position: absolute;
  background: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  mix-blend-mode: difference;
}

.name {
  font-size: 7.5rem;
}

.shapes {
  /*animation-name: spin;*/
  animation-duration: 120000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
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

.square {
  background: #fcd5ff;
  animation: travelTwo 1s ease-in forwards;
  animation-delay: 300ms;
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
}

.block {
  /*border-radius: 50%;*/
  background: #ffe2e2;
  animation: growCircle 300ms ease-in forwards;
  animation-delay: 1s;
}

@keyframes travelOne {
  from {
    transform: translate(-50%, -50%);
  }
  to {
    transform: translate(-25%, -25%);
  }
}

@keyframes travelTwo {
  from {
    transform: translate(-50%, -50%);
  }
  to {
    transform: translate(-75%, -75%);
  }
}
@keyframes growCircle {
  from {
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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
