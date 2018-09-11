<template>
  <section class="h-screen w-screen flex content-center justify-center">
    <!-- Title -->
    <div class="title self-center z-10">
      <h1 class="text-5xl">Phillip Hartin<span class="text-xl">, PhD</span></h1>
    </div>
    <!-- Shapes -->
    <div class="shapes absolute pin z-minus">
      <div class="shape square">
      </div>
      <div class="shape triangle"></div>
      <div class="shape circle"></div>
     
    </div>

  </section>

</template>

<script>
export default {};
</script>

<style>
.shape {
  position: absolute;
  background: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: multiply;
  width: 350px;
  height: 350px;
}

.square {
  background: #fcd5ff;
}

.triangle {
  transform: translate(-50%, -50%);
  background: #e5f2ff;
  animation: travelOne 2s infinite alternate linear;
}

.circle {
  transform: translate(-50%, -50%);
  background: #ff8282;
  animation: travelTwo 4s infinite alternate linear;
}

@keyframes travelOne {
  0% {
    transform: translate(-50%, -50%);
  }
  25% {
    transform: translate(-25%, -25%);
  }
  50% {
    transform: translate(-25%, -75%);
  }
  75% {
    transform: translate(-75%, -75%);
  }
  100% {
    transform: translate(-75%, -25%);
  }
}

@keyframes travelTwo {
  0% {
    transform: translate(-50%, -50%);
  }
  25% {
    transform: translate(-75%, -75%);
  }
  50% {
    transform: translate(-75%, -75%);
  }
  75% {
    transform: translate(-25%, -25%);
  }
  100% {
    transform: translate(-25%, -75%);
  }
}
</style>