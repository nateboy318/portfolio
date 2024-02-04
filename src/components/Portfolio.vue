<script setup>
import Tilt from "vanilla-tilt-vue";
import { computed } from "vue";
const tiltOptions = computed(() => ({
  reverse: true,

  max: 5,
}));
</script>

<template>
  <section class="Portfolio">
    <h1 class="sub-head dark">MY WORK</h1>
    <Tilt parallax=true :options="tiltOptions">
      <div class="container">
        <div class="row">
          <h1 class="headline">Brown-Forman Foundation</h1>
          <button class="btn-1">Visit Site</button>
        </div>
        <img
          src="../assets/portfolio-previews/preview-bff.png"
          alt=""
          class="preview"
        />
      </div>
    </Tilt>

    <Tilt parallax="true" :options="tiltOptions">
      <div class="container">
        <div class="row">
          <h1 class="headline">Brown-Forman Foundation</h1>
          <button class="btn-1">Visit Site</button>
        </div>
        <img
          src="../assets/portfolio-previews/preview-bff.png"
          alt=""
          class="preview"
        />
      </div>
    </Tilt>

    <Tilt parallax="true" :options="tiltOptions">
      <div class="container">
        <div class="row">
          <h1 class="headline">Brown-Forman Foundation</h1>
          <button class="btn-1">Visit Site</button>
        </div>
        <img
          src="../assets/portfolio-previews/preview-bff.png"
          alt=""
          class="preview"
        />
      </div>
    </Tilt>
  </section>
</template>
