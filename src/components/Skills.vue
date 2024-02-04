<script setup>
// Import the HeroSection component
import Wave from "./Wave.vue";
</script>

<template>
  <Wave color="black" />
  <section class="Skills">
    <h1 class="sub-head">MY SKILLS</h1>
    <div class="container">
      <div class="box">
        <img src="../assets/skill-icons/python.png" />
      </div>
      <div class="box">
        <img src="../assets/skill-icons/cpp.png" />
      </div>
      <div class="box">
        <img src="../assets/skill-icons/html5.png" />
      </div>
      <div class="box">
        <img src="../assets/skill-icons/sass.png" />
      </div>
      <div class="box">
        <img src="../assets/skill-icons/wp.png" />
      </div>
      <div class="box">
        <img src="../assets/skill-icons/c.png" />
      </div>
    </div>
    <button class="btn-2">Download Resume</button>
  </section>
</template>
