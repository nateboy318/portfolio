<script setup>
import SidebySide from "./components/SidebySide.vue";
import Hero from "./components/Hero.vue";
import Wave from "./components/Wave.vue";
import Skills from "./components/Skills.vue";
import Portfolio from "./components/Portfolio.vue";
import Testimonials from "./components/Testimonials.vue";
import Footer from "./components/Footer.vue";
import Test from "./components/Test.vue";
</script>

<template>
  <div class="wrapper">
    <Hero />
    <SidebySide />

    <Skills />
    <!-- <Wave style="transform: rotateX(180deg); margin: -200px" /> -->
    <Portfolio />
    <Test />
    <Testimonials />

    <Footer />
  </div>
</template>
