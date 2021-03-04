<template>
  <skylines />
</template>

<script setup>
import Skylines from './components/Skylines.vue'
</script>

<style>
html,
body {
  height: 100%;
}

body {
  background-image: radial-gradient(50% 100%,#180526 0,#040e21 100%);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>