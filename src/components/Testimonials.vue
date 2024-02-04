<template>
  <section class="Testimonials">
    <div class="container">
      <h1 class="sub-head">Testimonials</h1>
      <carousel :items-to-show="1">
        <slide v-for="slide in 10" :key="slide">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            lorem at tellus placerat cursus. Mauris eleifend erat pretium,
            elementum enim in, mollis nunc. Phasellus ultrices, mi vel luctus
            imperdiet, eros felis fermentum arcu, quis tincidunt nisl augue nec
            enim.
          </p>
          <h1 class="Author">Author, Company</h1>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
    <div class="underlay-container">
      <img class="underlay" src="../assets/mesh-asset-lg.png" />
    </div>
  </section>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
