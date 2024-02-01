<script setup>
import NavigationBar from './components/NavigationBar.vue';
import Home from './pages/index.vue';

import { onMounted } from 'vue';

onMounted(() => {
  setTimeout(() => {
    window.HSStaticMethods.autoInit();
  }, 100)
});
</script>

<template>
  <div class="scroll-smooth">
    <NavigationBar />
    <Home />
  </div>
</template>

<style scoped></style>
