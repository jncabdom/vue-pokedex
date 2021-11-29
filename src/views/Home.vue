<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Pokedex />
  </div>
</template>

<script>
// @ is an alias to /src
import Pokedex from "@/components/Pokedex.vue";

export default {
  name: "Home",
  components: {
    Pokedex
  }
};
</script>
