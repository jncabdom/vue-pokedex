<template>
  <div id="app">
    <Pokedex></Pokedex>
  </div>
</template>

<script>
import Pokedex from "./components/Pokedex.vue";

export default {
  name: "App",
  components: {
    Pokedex
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("/poke-wallpaper.png");
}
</style>
