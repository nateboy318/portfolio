<script setup>
// Import the HeroSection component
import Wave from "./Wave.vue";
import ContactForm from "./ContactForm.vue";
</script>

<template>
  <Wave color="white" />
  <section class="Footer">
    <div class="row">
      <div class="col-1">
        <div class="socials">
          <a href="http://intsagram.com">
            <img src="../assets/social-icons/instagram.png" alt="" />
          </a>
          <a href="http://twitter.com">
            <img src="../assets/social-icons/twitter.png" alt="" />
          </a>
          <a href="http://linkedin.com">
            <img src="../assets/social-icons/linkedin.png" alt="" />
          </a>
        </div>
      </div>
      <div class="col-2">
        <h1 class="headline">NATE ROYAL</h1>
        <div class="nav">
          <ul>
            <li>About Me</li>
            <li>My Skills</li>
            <li>Testimonials</li>
          </ul>
        </div>
      </div>
    </div>

    <ContactForm />
  </section>
</template>
