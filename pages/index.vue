<template>
  <section class="h-screen w-screen flex content-center justify-center font-serif">
    <!-- Title -->
    <div class="title self-center z-10">
      <h1 class="text-5xl font-normal">Phillip Hartin<span class="text-xl">, PhD</span></h1>
    </div>

    <!-- Shapes -->
    <div class="shapes absolute pin overflow-hidden z-minus">
      <div class="shape square">
      </div>
      <div class="shape triangle"></div>
      <div class="shape circle"></div>
     
    </div>

  </section>

</template>

<script>
export default {
};
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
  transform: translate(-25%, -25%);
  background: #e5f2ff;
  animation: travelOne 2s infinite alternate linear;
}

.circle {
  transform: translate(-75%, -75%);
  background: #ff8282;
  animation: travelTwo 4s infinite alternate linear;
}


</style>
