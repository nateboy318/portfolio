<script setup>
// Import the HeroSection component
import Sphere from "./Sphere.vue";
</script>

<template>
  <section class="Hero">
    <div class="content">
      <h1 class="hero-text">NATE ROYAL</h1>
      <h2 class="sub-head typewriter">
        <span class="typing-words">
          <span class="word" text="Design">Diehard Creative</span
          ><span class="word" text="Line 2">Tech Enthusiast</span
          ><span class="word" text="Line 3.">Front-End Developer</span>
        </span>
      </h2>
      <i class="fa-regular fa-angle-down"></i>
    </div>
    <Sphere />
  </section>
</template>

<script type="module">
// Register the component
export default {
  components: {
    Sphere,
  },
};
</script>
