<template>
  <section class="h-screen w-screen flex content-center justify-center font-serif">

    <!-- Shapes -->
    <div class="shapes absolute pin overflow-hidden">
      <div class="shape circle"></div>
      <div class="shape triangle"></div>
      <!--<div class="shape square"></div>-->
      <div class="title self-center">
        <h1 class="name font-normal">Phillip Hartin<span class="text-xl">, PhD</span></h1>
      </div>
    </div>

  </section>

</template>

<script>
export default {};
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
  font-size: 6.5rem;
}

.shapes {
  /*animation-name: spin;*/
  animation-duration: 120000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  background: white;
}

.shape {
  position: absolute;
  background: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: multiply;
  width: 250px;
  height: 250px;
}

.square {
  background: #fcd5ff;
  animation: travelTwo 1s ease-in forwards;
  animation-delay: 300ms;
}

.triangle {
  background: #ffa199;
  mix-blend-mode: normal;
  animation: travelOne 1s ease-in forwards;
  animation-delay: 300ms;
  border-radius: 50%;
}

.circle {
  /*border-radius: 50%;*/
  background: #006667;
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
</style>
