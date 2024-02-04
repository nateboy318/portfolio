<script setup>
import { onMounted } from "vue";
import { animate, spring } from "motion";
console.log("animate loaded");
onMounted(() => {
  const animation = animate(
    ".box",
    { scale: 1.1 },
    {
      duration: 1,
      easing: spring(),
      repeat: Infinity,
      direction: "alternate",
    }
  );
});
</script>

<template>
  <div class="card">Your content here</div>
</template>

<style scoped>
.card {
  width: 200px;
  height: 100px;
  background: blue;
  border-radius: 5px;
  margin: 100px;
}
</style>
