<template>
  <skyline />
</template>

<script setup>
import Skyline from './components/Skyline.vue'
</script>

<style>
html,
body,
#app {
  height: 100%;
}

body {
  background-image: radial-gradient(50% 100%,#180526 0,#040e21 100%);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>